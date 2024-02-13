import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    
    <section id="hero" className={styles.main}>
      <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Rubik+Doodle+Shadow&display=swap" rel="stylesheet"></link>
      <div className={styles.content}>
      <p className={styles.ptext} >$PETER</p>
      <p className={styles.pdescription}> The most legendary memecoin in existence! <br></br> The dogs & frogs had their days, <br></br> now it's time for Peter to take reign.</p>
      </div>
      <div className={styles.peter}>
      <Image src="/assets/images/peter.gif" width={500} height={400}  >
        
      </Image>
      </div>
    </section>
  );
};

export default Hero;
