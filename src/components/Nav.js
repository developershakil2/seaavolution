import React, {useContext, useEffect, useState} from 'react';
import { ContextApi } from '../utilities/ContextApi';
import {Link} from 'react-router-dom'



const Nav = ()=>{
   
    const {walletConnect, signer, provider,isAdmin, accounts} = useContext(ContextApi);
       

    
    
    return(
        <>
        <div className="w-[85%] navigation mx-auto flex justify-between items-center">
            <a href="/" className="underline-offset-0 ">
                <img src="https://i.ibb.co/7G6NNJR/logo.png" alt='seaevolution' className="w-[140px] h-[75px] object-contain"/>
            </a>

          {
            accounts[0] == null?   <button onClick={walletConnect} className="outline-none font-bold text-white border-none w-[160px] h-[50px] rounded-lg bg-[#1454ab]">
            connect Wallet 
        </button>: isAdmin === true ? <Link  to="/myelection" className="outline-none flex justify-center items-center font-bold text-white border-none w-[160px] h-[50px] rounded-lg bg-[#1454ab]">My Elections</Link>:'wallet connected'
          }
        </div>
        
        </>
    )
}


export default Nav;