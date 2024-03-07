import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {

  return (
    
    <section id="hero" className={styles.main}>
<link href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
      <div data-aos="fade-right" data-aos-duration="1000" className={styles.content}>
      <p  className={styles.ptext} >$PETER</p>
      <p className={styles.pdescription}> The most legendary memecoin in existence! <br></br> The dogs & frogs had their days, <br></br> now it's time for Peter to take reign.</p>

      <div  className={styles.iconContainer}>
              <a data-aos="flip-right" data-aos-duration="1000"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/petercoinsol"
                title="Follow us on X/Twitter"
              >
                <Image className={styles.circleButton}
                  alt="Follow us on X/Twitter"
                  src="/assets/images/x-twitter-icon.png"
                  height={60}
                  width={60}
                />
              </a>
            <a data-aos="flip-right" data-aos-duration="1000"
              target="_blank"
              rel="noreferrer"
              href="https://t.me/petercoinsol"
              title="Join our Telegram"
            >
              <Image className={styles.circleButton}
                src="/assets/images/telegram-icon.png"
                alt="telegram"
                width={60}
                height={60}
              />
            </a>
            <a data-aos="flip-right" data-aos-duration="1000"
                target="_blank"
                rel="noreferrer"
                href="https://solscan.io/address/5ojwpsvCUZ3CNkYNfR5Dn16EXrMRYfU5ZoLiLND9Eac6"
                title="Solscan"
              >
                <Image className={styles.circleButton}
                  alt="Solscan"
                  src="/assets/images/Solscan.png"
                  height={60}
                  width={60}
                />
              </a>
              <a data-aos="flip-right" data-aos-duration="1000"
                target="_blank"
                rel="noreferrer"
                href="https://beta.pinksale.finance/solana/launchpad/61Fdd5gzrZYdoEXV8Fwpmk9bptAMqmYe6Rv5AUJ4EfAa"
                title="Pinksale"
              >
                <Image className={styles.circleButton}
                  alt="Pinksale"
                  src="/assets/images/Pinksale.png"
                  height={60}
                  width={60}
                />
              </a>
            </div>
      </div>
      
      <div data-aos="fade-left" data-aos-duration="1000" className={styles.peter}>
      <Image src="/assets/images/peterlogo.png" width={400} height={400}       style={{
            width: '100%', 
            height: 'auto', 
          }}
           >
        
      </Image>
      </div>

    </section>
  );
};

export default Hero;
