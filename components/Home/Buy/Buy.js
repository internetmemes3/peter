import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from "./Buy.module.css";
const Buy = () => {

  
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
    <div id="Buy" className={styles.main}>
        <div style={LineStyle} > </div>
      <div className={styles.headingHolder}>
        <h1 className={styles.heading}>
          How to buy
        </h1>
      </div>
      
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.top}></h2>

            <div className={styles.card}>
              <div className={`${styles.cardContent} ${styles.leftAlign}`}>
                <div>
                  <h3>Get Some SOL</h3>
                  <motion.p 
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                   >
                  Make sure to have SOL in your wallet to swap to $PETER. <br></br> You can buy directly on Phantom Wallet, transfer from another wallet, or buy on another exchange and send it to your wallet
                  </motion.p>
                </div>

                
              </div>
            </div>

            <h2 className={styles.leftSpacer}></h2>

            <div className={styles.card}>
              <div className={`${styles.cardContent} ${styles.leftAlign}`}>
                <div>
                  <h3>Swap SOL for $PETER </h3>

                  <motion.p  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 0.5 }}>
                  You can select to swap $PETER with $SOL or any other coin. <br></br> After selecting the two swap coins, confirm and enjoy the ride. <br></br> We don't have any tax fees or any hidden fees
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.right}>
            <div className={styles.card}>
              <div className={`${styles.cardContent} ${styles.rightAlign}`}>
                <div>
                  
                </div>

                <div>
                  <h3>Create a Wallet</h3>
                  <motion.p  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 0.5 }}>
                    
                  For desktop users, download the Phantom Wallet extension or a wallet of your choice. <br></br> For mobile users, download the Phantom wallet or a wallet of your choice from the App Store or Google Play Store for free.<br></br> After that, create your wallet address.
                  </motion.p>
                </div>
              </div>
            </div>

            <div className={styles.rightSpacer}></div>

            <div className={styles.card}>
              <div className={`${styles.cardContent} ${styles.rightAlign}`}>
                <div>
                  
                </div>

                <div>
                  <h3>Go to Decentralized Exchange ( DEX ) </h3>
                  <motion.p 
                   ref={ref}
                   initial={{ opacity: 0, y: 20 }}
                   animate={controls}
                   transition={{ duration: 0.5 }}>
                  Go to your favorite Decentralized Exchange in Google Chrome or on the browser inside your Wallet app. <br></br>
                  Connect your wallet, paste the $PETER token address into the swap section. <br></br> 
                  <br></br>
                  
           
                  </motion.p>
                  
         
          
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Buy;
