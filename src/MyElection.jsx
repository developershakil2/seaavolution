import React, { useContext } from "react"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

import { ContextApi } from "./utilities/ContextApi"

const MyElection = ()=>{

  const {getOwnerElection, ownElection, stopMyElection} = useContext(ContextApi)
  

    return(
        <>
          <header>
      <Nav/>
    </header>
     {
    ownElection && ownElection.map((el , ind)=>{
        return(
          <div key={ind} className="my-[100px] card_main_wrapper w-[85%] mx-auto ">
          <h1 className="my-5 w-full font-black text-3xl text-center">My Election ID #{ind} </h1>
     
       <div className="card_wrapper gap-2 w-full flex justify-between flex-wrap">
          <div className="card justify-center items-center flex flex-col p-3 w-[300px] h-[350px] rounded-xl bg-[#111]">
              <img src="images/vote.gif" alt="seaevolution" className="w-[130px] mx-auto h-[130px]"/>
            <h2 className="text-white font-black text-center text-xl my-2">{el.title.slice(0,35)}...</h2>
             
             {
              el.status != false ? <button onClick={()=>stopMyElection(ind)} className="w-[80%] mx-auto h-[40px] rounded-xl mt-2 font-black text-white bg-[#ab1414] outline-none border-none ">End This Election</button>  :<h2  className="text-[red] bg-white p-4 mt-4 font-black">This Election you already Disabled user can't vote this election</h2>
             }
              
            
            
          </div>


       </div>
     </div>
        )
       })
     }


<button onClick={getOwnerElection} className="w-[100%] mx-auto h-[40px] rounded-xl mt-2 font-black text-white bg-[#14ab26] outline-none border-none ">See All My Elections</button>
     
    <Footer/>
        </>
    )
}

export default MyElection;