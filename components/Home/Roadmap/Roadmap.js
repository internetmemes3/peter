import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from "./Roadmap.module.css";
import Image from 'next/image';
const Roadmap = () => {

  
    const LineStyle = {
        width: '100%',
        height: '10px',
        backgroundColor: '#ffffff', 
        borderRadius: '50%',
        margin: '10px 0',
        position: 'relative',
      };

      const controls = useAnimation();
      const [ref, inView] = useInView();
    
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
        });
      }

  return (
    <div id="Roadmap" className={styles.main}>
      
        <div style={LineStyle} > </div>
      <div className={styles.headingHolder}>
        
        <h1 className={styles.heading}>
          Roadmap
        </h1>

      </div>
     
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
          <Image
              src="/assets/images/Peter2.png" 
              alt="let's make peter great again"
              width={400} 
              height={400}
            />
          </div>
          <div className={`${styles.card} ${styles.center}`}>
            <div className={`${styles.cardContent} ${styles.leftAlign}`}>
              <div>
              <motion.p 
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                   > 
- Phase 1: $PETER Announcement & Presale <br></br>
- Phase 2: Listing, Vibe & HODL<br></br>
- Phase 3: $PETER Coin Takeover                  </motion.p>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
          <Image
              src="/assets/images/Peter1.png" 
              alt="let's make peter great again"
              width={400} 
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
