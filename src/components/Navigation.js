import React, { useState } from "react";
import {Link } from "react-router-dom";

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-[0.8rem]", link: "/" },
    { name: "Price", icon: "pricetags-outline", dis: "translate-x-[5.7rem]" , link: "/pricing" },
    { name: "Cart", icon: "cart-outline", dis: "translate-x-[10.7rem]", link: "/cart" },
    // { name: "Message", icon: "chatbubble-outline", dis: "translate-x-[15.7rem]", link: "/" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-[15.7rem]", link: "/login" },
    
    
    
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-white bottom-nav  fixed-bottom max-h-[4.4rem]   ">
      <ul className="flex relative">
        <span
          className={`bg-amber-400 ring ring-white duration-500 ${Menus[active].dis}  h-14 w-14 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li className="w-20 ">
          <div key={i}>
            <Link to={menu.link}
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span style={{color:"black"}}
                className={`text-2xl  cursor-pointer duration-500 ${
                  i === active && "-mt-7 text-black"
                }`}
              >
               <ion-icon  name={menu.icon}></ion-icon>
              </span>
              <span
                className={` text-black ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </Link>
            </div>
          </li>
        ))}
       
      </ul>

    </div>
  );
};

export default Navigation;