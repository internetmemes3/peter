import Image from "next/image";
import styles from "./Story.module.css";

const Story = () => {
  const LineStyle = {
    width: '100%',
    height: '10px',
    backgroundColor: '#ffffff', 
    borderRadius: '50%',
    margin: '10px 0',
    position: 'relative',
  };
    return (
      <section id="story" className={styles.main}>
        <div style={LineStyle} > </div>
        <h1 className={styles.heading}>
Tokenomics        </h1>
        
        <div className={styles.circleContainer}>
      <div className={styles.imageContainer}>
        <img src="assets/images/petersilver.png" alt="Peter Silver Coin" />
        <div className={styles.titleBox}>
        <h2>Total Supply</h2>
      </div>
      <div className={styles.textBox}>
        <p>1,000,000,000</p>
      </div>
      </div>
      
      <div className={styles.imageContainer}>
        <img src="assets/images/totalsupply.png" alt="Fees" />
        <div className={styles.titleBox}>
        <h2>Fees</h2>
      </div>
      <div className={styles.textBox}>
        <p>0/0</p>
      </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="assets/images/tokenaddress.png" alt="Token Address" />
        <div className={styles.titleBox}>
        <h2>Token Address</h2>
      </div>
      <div className={styles.textBox}>
        <p>0x0000</p>
      </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="assets/images/LP.png" alt="Liquidity Pool" />
        <div className={styles.titleBox}>
        <h2>Liquidity Pool</h2>
      </div>
      <div className={styles.textBox}>
        <p>100% Liquidity Burnt</p>
      </div>
      </div>
      <div className={styles.centerImageContainer}>
        <img src="assets/images/peterpc.gif" alt="Peter work" />
      </div>
    </div>
        

                </section>
  );
};

export default Story;
