import React, { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";



const Footer = () => {

  const LineStyle = {
    width: '100%',
    height: '10px',
    backgroundColor: '#ffffff', 
    borderRadius: '50%',
    margin: '10px 0',
    position: 'relative',
  };
  
  return (
    <section id="contact" className={styles.main}>
      <link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet"></link>
      <div style={LineStyle} > </div>
      <div className={styles.left}>

        
          
              <h3 className={styles.heading}>Wanna Join The Community ? YOLO</h3>

              <div className={styles.iconContainer}>
          
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/petercoinsol"
                title="Follow us on X/Twitter"
              >
                <Image
                  alt="Follow us on X/Twitter"
                  src="/assets/images/twitter-icon.png"
                  height={60}
                  width={60}
                />
              </a>

            
            <a
              target="_blank"
              rel="noreferrer"
              href="https://telegram.com"
              title="Join our Telegram"
            >
              <Image
                src="/assets/vectors/Telegram_logo.svg"
                alt="telegram"
                width={60}
                height={60}
              />
            </a>
            </div>
            <p className={styles.heading}>
            $peter coin has no association with FOX or the writers of Family Guy. <br></br>
This token is simply paying homage to a character/meme we all love and recognize.
<br></br><br></br>
$PETER is a memecoin with no intrinsic value or expectation of financial return.<br></br> There is no formal team. The coin is for entertainment purposes only.
            </p>
            <Image 
            src="/assets/images/Peter4.png"
            width={200}
            height={300} />
        </div>
      
    </section>
  );
};

export default Footer;
