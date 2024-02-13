import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  const LineStyle = {
    width: '100%',
    height: '10px',
    backgroundColor: '#ffffff', 
    borderRadius: '50%',
    margin: '10px 0',
    position: 'relative',
  };


  
  return (
    <section id="about" className={styles.main}>
      <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Sriracha&display=swap" rel="stylesheet"></link>
      <div style={LineStyle}>
     
      </div>
      <h1 className={styles.title}>
         About
        </h1>
      <div className={styles.container}>
        
          <div className={styles.rightPanel}>
            <h2 className={styles.heading}>LET'S RIDE THE BULL RUN
            <Image
        src="/assets/images/Peter3.png"
        width={100}
        height={100}
        /></h2> 
            <h3 className={styles.subHeading}>
            Once upon a time in the digital realm... ! 🤪
            </h3>
            <p className={styles.paragraph}>
            Peter Coin is a project that channels the irreverent spirit of Peter Griffin from the iconic TV show "Family Guy.” It is here to shake up the crypto world with it's comical charm and a mission to reign supreme.
<br></br><br></br>
Led by the one and only patriarch himself, Peter Coin promises to bring laughter and levity to the crypto space while taking the reins from other memecoins. <br></br> With Peter's legendary signature wit and charm, $PETER is more than just a digital currency—it's a cultural phenomenon.
<br></br><br></br>
Join Peter Coin as it takes the crypto meme world by storm, making waves with laughter for the community and establishing itself as the king of memecoins. <br></br> Get ready to ride the wave and experience the joy of dominance!            </p>
          </div>
        
          <div className={styles.imgContainer}>
        
            <Image className={styles.img}
              src="/assets/images/peter-bull.gif"
              alt="Discord"
              width={600}
              height={400}
            />
          
        </div>
      </div>
    </section>
  );
};

export default About;