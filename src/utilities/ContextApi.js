import React, {useState, useEffect, createContext} from 'react'
import { ethers } from 'ethers';
import Web3 from 'web3';
import Abi from './vote.json';
export const ContextApi = createContext();



const ContextComponent = ({children}) => {
  
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [allVote, setAllVote] = useState([]);
  const [allVote2, setAllVote2] = useState([]);
  const [ownElection , setOwnElection] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false)
  const [getNoVoteId, setGetNoVoteId] = useState(null)
  console.log(ownElection, 'elect')
const contractAddress = '0x3d6E38a3D91F2f47bb1C008630cA5763D8E79B0D';
  // console.log(allVote, 'all votes')


 

  useEffect(() => {
    
    const init = async () => {
      if (window.ethereum) {
        try {
          // Use MetaMask provider
          const metaMaskProvider = new ethers.providers.Web3Provider(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request account access

          setWeb3(new Web3(metaMaskProvider));
          setProvider(metaMaskProvider);
          setSigner(metaMaskProvider.getSigner());

          const connectedAccounts = await metaMaskProvider.listAccounts();
          setAccounts(connectedAccounts);
        } catch (error) {
          console.error('Error connecting with MetaMask:', error);
        }
      } else if (window.web3) {
        // Use legacy Web3 provider (not recommended)
        const web3Provider = new Web3(window.web3.currentProvider);

        setWeb3(web3Provider);
        setProvider(new ethers.providers.Web3Provider(web3Provider));
        setSigner(new ethers.providers.Web3Provider(web3Provider).getSigner());

        const connectedAccounts = await web3Provider.eth.getAccounts();
        setAccounts(connectedAccounts);
      } else {
        console.log('No wallet provider found');
      }
    };

    init();
  }, []);

  useEffect(() => {
    const getElections = async () => {
      try {
    
        const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/d44d1e97c9f842babdc420193e589513');
  

        const contract = new ethers.Contract(contractAddress, Abi, provider);
  
      
        const electionData = await contract.getAllElections();

        setAllVote(electionData);




      } catch (error) {
        alert("Something went wrong");
        console.error('Error:', error);
      }
    };

    const getElections2 = async () => {
      try {
    
        const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/d44d1e97c9f842babdc420193e589513');
  

        const contract = new ethers.Contract(contractAddress, Abi, provider);
  
      
        const electionData = await contract.getAllElections2();

        setAllVote(electionData);




      
      } catch (error) {
        alert("Something went wrong");
        console.error('Error:', error);
      }
    };

    getElections2();
    getElections();
  }, []);  

  useEffect(()=>{
    const getAdmin = async ()=>{
     try{
      const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/d44d1e97c9f842babdc420193e589513');
      const contract = new ethers.Contract(contractAddress, Abi, provider);
      const checkAd = await contract.checkAdmin(accounts[0]);
      
      setIsAdmin(checkAd)
     }catch(error){
      console.log('something went wrong')
     }
    }
    getAdmin();
  }, [accounts])

 
      const getOwnerElection = async ()=>{
         try{
          const sign = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, Abi, sign);
          const trans = await contract.getElectionsByOwner();
          setOwnElection(trans);
          console.log('owner election', trans)
          
         }catch(error){
          console.log('error from owner get election')
         }
    
      }
     

  const getallVoters = async(id)=>{
    try{
      const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/d44d1e97c9f842babdc420193e589513');
      const contract = new ethers.Contract(contractAddress, Abi , provider);
        
      const trans = await contract.getTotalVoters(id);
     
      return trans;
      

    }catch(error){
      console.log(error)

    }
  }

  const getallVoters2 = async (id)=>{
    try{
      const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/d44d1e97c9f842babdc420193e589513');
      const contract = new ethers.Contract(contractAddress, Abi , provider);
        
      const trans = await contract.getTotalVoters2(id);
      console.log(trans)
      return trans;
      

    }catch(error){
      console.log('something went wrong')

    }
  }

  const getvoterlist = async (id)=>{
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/d44d1e97c9f842babdc420193e589513');
    const contract = new ethers.Contract(contractAddress, Abi,provider);
    const trans = await contract.getVoters2(id);
    setGetNoVoteId(trans)

   
   
   
  }
useEffect(()=>{
  {
    if(allVote.length >0){
      allVote.map((el, ind)=> getvoterlist(ind))
    }
  }
}, [allVote])
 
  
  const walletConnect = async () => {
    if (window.ethereum) {
      try {
        // Use MetaMask provider
        const metaMaskProvider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request account access

        setWeb3(new Web3(metaMaskProvider));
        setProvider(metaMaskProvider);
        setSigner(metaMaskProvider.getSigner());

        const connectedAccounts = await metaMaskProvider.listAccounts();
        setAccounts(connectedAccounts);
      } catch (error) {
        console.error('Error connecting with MetaMask:', error);
      }
    } else if (window.web3) {
      // Use legacy Web3 provider (not recommended)
      const web3Provider = new Web3(window.web3.currentProvider);

      setWeb3(web3Provider);
      setProvider(new ethers.providers.Web3Provider(web3Provider));
      setSigner(new ethers.providers.Web3Provider(web3Provider).getSigner());

      const connectedAccounts = await web3Provider.eth.getAccounts();
      setAccounts(connectedAccounts);
    } else {
      alert("No wallet provider found")
      console.log('No wallet provider found');
    }
  };
  
  const createElection = async (voteCreatorName, title,description)=>{
   try{
    const sign = provider.getSigner();
    const contract = new ethers.Contract(contractAddress , Abi, sign);
    const trans =  await contract.createElection(voteCreatorName, title, description);
     
         await trans.wait();

          if(trans){
            window.location.reload();
            console.log('successfully created a election')
            alert('successfully created a new Election')
          }else{
            alert('transaction is failed')
          }
  
   }catch(error){
    console.log('something went wrong', error);
    alert('something went wrong')
   }

  }
  const doVote = async (id)=>{
     try{
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Abi, signer);
      const trans = await contract.vote(id);
      await trans.wait();
      if(trans){
        alert("you have successfully voted this election");
       
      }else{
        alert("maybe you already did vote for this election");
      }
     }catch(error){
      alert("make sure you have connected metamask or your wallet is in the voter list and you can't vote yourself if you created this election or you already did vote or election was stoped by candidate")
     }
  }

  const getnovote = async (id)=>{
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Abi, signer);
     const trans = await contract.getNoVotesForElection(id);
     console.log(trans, 'data for not vote')

  
  }

  const addAdminByOwner = async (address)=>{
    try{
      const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Abi, signer);
     const trans = await contract.addAdminByAdmins(address);
     await trans.wait();
     alert("you've successfully added a new admin");
     console.log(trans, 'data for not vote')
    }catch(error){
      alert('please check your address it should a valid address')
    }

  }

  const addVoter = async (address)=>{
    try{
      const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Abi, signer);
     const trans = await contract.addAllowedVoter(address);
     await trans.wait();
     alert("you've successfully added a new admin");
     console.log(trans, 'data for not vote')
    }catch(error){
      alert('please check your address it should a valid address')
    }

  }


  
  const addAdminByow = async ()=>{
    try{
      const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Abi, signer);
     const trans = await contract.addAdminByOwner('0x1A4A9C461f4A9d2EF3B98f53614eadE1D8DdAD5a');
     await trans.wait();
     alert("you've successfully added a new admin");
     console.log(trans, 'data for not vote')
    }catch(error){
      alert('please check your address it should a valid address')
    }
  }


  const noVote = async (id)=>{
    try{
     const signer = provider.getSigner();
     const contract = new ethers.Contract(contractAddress, Abi, signer);
     const trans = await contract.voteNo(id);
     await trans.wait();
     if(trans){
       alert("you have successfully voted this election");
      
     }else{
       alert("maybe you already did vote for this election");
     }
    }catch(error){
     alert("make sure you have connected metamask or your wallet is in the voter list and you can't vote yourself if you created this election or you already did vote or election was stoped by candidate")
    }
 }


  const stopMyElection = async (id)=>{
  try{
    const sign = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Abi, sign);

    const trans = await contract.stopElection(id);
    if(trans){
      alert('you have successfully stoped your election now anyone cant vote this election')
    }
  }catch(error){
    alert('something went wrong')
  }
  }
 
    return(
      <>
      <ContextApi.Provider value={{walletConnect,allVote2,addVoter,getvoterlist,setGetNoVoteId,getNoVoteId, getnovote,addAdminByow, addAdminByOwner, isAdmin,noVote,stopMyElection, getOwnerElection,ownElection,getallVoters2, getallVoters,createElection,doVote, allVote, signer, provider, accounts, allVote}}>
          {children}
      </ContextApi.Provider>
      
      </>
    )
}

export default ContextComponent;