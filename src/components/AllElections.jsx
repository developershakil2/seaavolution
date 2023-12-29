import {Link} from 'react-router-dom'



const AllElections  = ({open})=>{


    return(
        <>
           <div className=" flex justify-between mx-auto w-[80%] hero items-center py-10">
        <div className="hero_left">
         <div className="title_wrapper">
         <h3 className="title_one font-black text-3xl">Sea Evolution the defi - evolution</h3>
      <h3 className="title_tow font-bold text-2xl">Join as a organigation or vote them</h3>
        
         </div>

         <div className="button_group mt-[80px] flex justify-around  ">
          <Link to="/explore-vote"> <button className="outline-none font-bold text-white border-none w-[160px] h-[50px] rounded-lg bg-[#1454ab]">Start Voting </button></Link>
           <button onClick={open} className="outline-none font-bold text-white border-none w-[160px] h-[50px] rounded-lg bg-[#1454ab]">Start Election</button>
         </div>
        </div>

        <div className="hero_right w-[50%]">
          <img src="images/vote.jpg" alt="seaevolution" className="w-[80%] mx-auto h-[400px] rounded-full" />
        </div>
    </div>
        </>
    )
}


export default AllElections