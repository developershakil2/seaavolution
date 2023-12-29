import React, {useState, useContext} from 'react'
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import VotingCard from "./components/VotingCard"
import VoteForm from "./components/VoteForm"
import {Link} from 'react-router-dom'
import { ContextApi } from './utilities/ContextApi'
import VoteForm1 from './components/VoteForm1'
import VoteForm2 from './components/VoteForm2'
const Home = ()=>{
  const {isAdmin, addAdminByow} = useContext(ContextApi);
 const [modal, setModal] = useState('scale(0)');

console.log(isAdmin, "admin ")
  const close = ()=>{
     setModal('scale(0)')
  }
  const open = ()=>{
      setModal('scale(1)')
  }


  const [modal1, setModal1] = useState('scale(0)');
  const [modal2, setModal2] = useState('scale(0)');


  const close1 = ()=>{
     setModal1('scale(0)')
  }
  const open1 = ()=>{
      setModal1('scale(1)')
  }

  const close2 = ()=>{
    setModal2('scale(0)')
 }
 const open2 = ()=>{
     setModal2('scale(1)')
 }

    return(
        <>
        <div style={{transform:modal}} className="bg-[#00000076] backdrop-blur-lg w-full h-full flex justify-center items-center  top-0 left-0 fixed z-20">
          <VoteForm close={close}/>
        </div>

        <div style={{transform:modal1}} className="bg-[#00000076] backdrop-blur-lg w-full h-full flex justify-center items-center  top-0 left-0 fixed z-20">
          <VoteForm1 close1={close1}/>
        </div>

        <div style={{transform:modal2}} className="bg-[#00000076] backdrop-blur-lg w-full h-full flex justify-center items-center  top-0 left-0 fixed z-20">
          <VoteForm2 close2={close2}/>
        </div>
          <header>
      <Nav/>
    </header>
   
    <div className=" flex justify-between mx-auto w-[80%] hero items-center py-10">
        <div className="hero_left">
         <div className="title_wrapper">
         <h3 className="title_one font-black text-3xl">Sea Evolution the defi - evolution</h3>
      <h3 className="title_tow font-bold text-2xl">Join as a organigation or vote them</h3>
        
         </div>
         {/* <button onClick={addAdminByow}>add admin</button> */}

         <div className="button_group mt-[80px] flex justify-around  ">
          {
            isAdmin === true ? <button onClick={open1} className="outline-none font-bold text-white border-none w-[160px] h-[50px] rounded-lg bg-[#1454ab]">Add an Admin</button>: <Link to="/explore-vote"> <button className="outline-none font-bold text-white border-none w-[160px] h-[50px] rounded-lg bg-[#1454ab]">Start Voting </button></Link>
          
          }
        
          {
            isAdmin === true ?  <button onClick={open} className="outline-none font-bold text-white border-none w-[160px] h-[50px] rounded-lg bg-[#1454ab]">Start Election</button>
       :''
          }
         </div>
        </div>

        <div className="hero_right w-[50%]">
          <img src="https://i.ibb.co/GVyC81V/vote.jpg" alt="seaevolution" className="w-[80%] mx-auto h-[400px] rounded-2xl" />
        </div>
    </div>
    <VotingCard/>
    <Footer/>
        </>
    )
}

export default Home;