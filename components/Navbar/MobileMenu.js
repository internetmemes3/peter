import React, { useState } from "react";
import {Link} from 'react-scroll';
import Image from "next/image";
import styles from "./MobileMenu.module.css";
import {CgMenuRound} from 'react-icons/cg'
import { CgCloseO } from "react-icons/cg";

const MobileMenu = () => {

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };


  const hamburgerIcon = <CgMenuRound className={styles.Hamburger} size={54} color='white' onClick={() => setNavbarOpen(!isNavbarOpen)}/>
  const closeIcon = <CgCloseO className={styles.Hamburger} size={54} color='white' onClick={() => setNavbarOpen(!isNavbarOpen)}/>

  

  return (
    <nav role="navigation" >
      
      
      <div className={styles.menuToggle} >
      
      
      {isNavbarOpen && (
           <ul className={styles.menu} >
         
           <li  >
                   <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeNavbar} > About us </Link>
                 </li>
                 <li  >
                   <Link to="roadmap" spy={true} smooth={true} offset={-31} duration={500} onClick={closeNavbar} > Roadmap </Link>
                 </li>
                 <li  >
                   <Link to="team" spy={true} smooth={true} offset={-110} duration={500} onClick={closeNavbar} > Team </Link>
                 </li>
                 <li >
                   <Link to="faqs" spy={true} smooth={true} offset={-33} duration={500} onClick={closeNavbar} > Faqs </Link>
                 </li>
                 
                 <li  >
                 <a style={{marginRight: '10px'}}
              href="https://twitter.com/petercoinsol"
              title="Follow us on X/Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Follow us on X/Twitter"
                src="/assets/images/twitter-icon.png"
                height={60}
                width={60}
              />
            </a>
            
            
      
            </li>
                 

                 <li>
                 <a
            href="https://telegram.com/"
            target="_blank"
            rel="noreferrer"
            title="Go to Whitepaper"
            className={styles.mintButton}
          >
            Join Community
          </a>
                 </li>
             </ul>)}
           
      </div>
      {isNavbarOpen ? closeIcon : hamburgerIcon }
    </nav>
  );
};

export default MobileMenu;
