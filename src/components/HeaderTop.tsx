import React from "react";

import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";

const HeaderTop= () => {
  return <div className="border-b border-grey-200 hidden sm:block">
    <div className="container py-4 ">
        <div className="flex justify-between items-center">
            <div className="hidden  lg:flex gap-1">
                <div className="HeaderTop__icon_wrapper">
                    <FaFacebook/>
                </div>
                <div className="HeaderTop__icon_wrapper">
                  <FaTwitter />
                </div>
                <div className="HeaderTop_icon_wrapper">
                  <FaInstagram/>
                </div>
                <div className="HeaderTop_icon_wrapper">
                  <FaLinkedin/>
                </div>
            </div>
            <div className="text-teal-500 text-[12px]">
             <b> FREE SHIPPING</b> THIS WEEK ORDER OVER - $99
             </div>
            <div className="flex gap-4">
              <select
               className="text-purple-600 text-[12px] w-[70px]"
               name="currency"
               id="currency"
               >
                 <option value="USD $">USD $</option>
                 <option value="PKR">PKR</option>
                 <option value="INR">INR</option>  
                 </select>

                 <select className="text-purple-600 text-[12px] w-[80px]"
                  name="language"
                  id="language"
                >
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Korean">Korean</option>

                 </select>
            </div>




        </div>
    </div>
  </div>
}
export default HeaderTop;

