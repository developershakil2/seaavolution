import React,{ useContext, useState } from "react";
import { ContextApi } from "../utilities/ContextApi";




const VoteForm2 = ({close2})=>{
    const {addVoter} = useContext(ContextApi);
    const [address, setCreatorName] = useState(``);
    console.log(address, 'sdd')
    const createVote = ()=>{
        addVoter(address);
    }


    return(
        <>
           <div className="w-[350px] px-4 py-10 rounded-xl relative bg-white">
             <button onClick={close2} className="top-1 right-1 absolute"><img className="w-[30px] h-[30px]" src="https://i.ibb.co/1mswmRF/close.png" alt="sea evolution"/></button>
            <h2 className="text-center w-full mb-6 font-black text-xl ">Add Voter</h2>
               <input type="text"  value={address} onChange={(e)=>setCreatorName(e.target.value)} className="w-full text-xs outline-none border-[4px] shadow-2xl p-3 rounded-xl my-2 h-[38px]" placeholder="0x.. "/>
               <button onClick={createVote} className="w-full py-4 my-4 text-white bg-[#1454ab] font-black text-lg rounded-xl">Add Now</button>
           </div>
        </>
    )
}

export default VoteForm2;