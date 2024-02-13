import React, {UseState} from "react";
import Image from "next/image";
import {Link} from 'react-scroll';
import RenderMobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
      <div className={styles.logo}>
      <Image src="/assets/images/logo.jpg" alt="Logo" width={70} height={70} className={styles.rounded} />
    </div>
    <ul className={styles.linksHolder}>
  <li>
    <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
      <span role="img" aria-label="hero">⛺</span> Home
    </Link>
  </li>
</ul>
        <ul className={styles.linksHolder}>
  <li>
    <Link to="about" spy={true} smooth={true} offset={-30} duration={500}>
      <span role="img" aria-label="Cool Guy">😎</span> About Us
    </Link>
  </li>
</ul>
<ul className={styles.linksHolder}>
  <li>
    <Link to="story" spy={true} smooth={true} offset={128} duration={500}>
      <span role="img" aria-label="Tokenomics">🌐</span> Tokenomics
    </Link>
  </li>
</ul>
<ul className={styles.linksHolder}>
  <li>
    <Link to="Roadmap" spy={true} smooth={true} offset={-100} duration={500}>
      <span role="img" aria-label="Roadmap">🗺️</span> Roadmap
    </Link>
  </li>
</ul>
<ul className={styles.linksHolder}>
  <li>
    <Link to="Buy" spy={true} smooth={true} offset={-60} duration={500}>
      <span role="img" aria-label="Question">❓</span> How To Buy
    </Link>
  </li>
</ul>
<ul className={styles.linksHolder}>
  <li>
    <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
      <span role="img" aria-label="Contact">🤝</span> Contact
    </Link>
  </li>
</ul>

        <div className={styles.rightContainer}>
          <a
            href="https://telegram.com/"
            target="_blank"
            rel="noreferrer"
            title="Telegram"
            className={styles.mintButton}
          >
            <Image
              src="/assets/vectors/Telegram_logo.svg"
              alt="Telegram"
              width={40}
              height={22}
            />

            Join Community
          </a>

          <div className={styles.socialHolder}>

            <a
              href="https://twitter.com/petercoinsol"
              title="Follow us on X/Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Follow us on X/Twitter"
                src="/assets/images/twitter-icon.png"
                height={40}
                width={40}
              />
            </a>
          </div>

          
        </div>
      </div>

      <div className={styles.mobileMenu}>
        <div className={styles.mobileMenuContent}>
          <RenderMobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
