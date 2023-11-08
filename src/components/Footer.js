import React from "react";
import LogoandTitle from "./LogoandTitle";
function Footer() {
  return (
    <div className="bg-yellow-300   h-40 2xl:h-44 w-full flex text-center mt-12 2xl:mt-32 ">
      {/* <h1 className="m-auto text-lg font-light font-serif underline">
        About Us
      </h1>
     */}
      <div className="py-8 mr-20 ">
        <div className=" mr-28 ">
          <LogoandTitle />
        </div>
        <p className="pt-4 ">© 2023 Sea Evolution the defi - All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
