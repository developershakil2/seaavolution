import React,{ useContext, useState } from "react";
import { ContextApi } from "../utilities/ContextApi";




const VoteForm = ({close})=>{
    const {createElection} = useContext(ContextApi);
    const [creatorName, setCreatorName] = useState('');
    const [voteTitle, setvoteTitle] = useState('');
    const [voteDes, setDes] = useState();


    const createVote = ()=>{
        createElection(creatorName, voteTitle, voteDes);
    }

    return(
        <>
           <div className="w-[350px] px-4 py-10 rounded-xl relative bg-white">
             <button onClick={close} className="top-1 right-1 absolute"><img className="w-[30px] h-[30px]" src="https://i.ibb.co/1mswmRF/close.png" alt="sea evolution"/></button>
            <h2 className="text-center w-full mb-6 font-black text-xl ">Start Election Right Now</h2>
               <input type="text" value={creatorName} onChange={(e)=>setCreatorName(e.target.value)} className="w-full text-xs outline-none shadow-2xl p-3 rounded-xl my-2 h-[38px]" placeholder="Your Name ex: Shakil Hossain "/>
               <input type="text" value={voteTitle} onChange={(e)=>setvoteTitle(e.target.value)} className="w-full text-xs outline-none shadow-2xl p-3 rounded-xl my-2 h-[38px]" placeholder="Vote Title ex: we have to Change something! "/>
         
                <textarea value={voteDes} onChange={(e)=> setDes(e.target.value)} className="w-full text-xs outline-none shadow-2xl p-3 rounded-xl my-2 h-[200px]" type="text" placeholder="Vote description ex: we have to Change something! ">

                </textarea>

               <button onClick={createVote} className="w-full py-4 my-4 text-white bg-[#1454ab] font-black text-lg rounded-xl">Start Election</button>
           </div>
        </>
    )
}

export default VoteForm;