import React from "react";
import logo from "../pics/logoVoting.png";
import { Link } from "react-router-dom";
function LogoandTitle() {
  return (
    <div className="flex mt-6 ml-6   ">
     
      <Link to="/">
      <img
        src={logo}
        alt="logo pic"
        className=" ml-10 object-scale-down h-16 w-[200px] "
      />
      </Link>
    </div>
  );
}

export default LogoandTitle;
