import styles from "./Landing.module.scss";
import infoData from "./info.json";
import { useMediaQuery } from "../../Hooks";
import { DeveloperCard } from "../../Components";

const Landing = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div>
      <div className={styles.firstbox}>
        <div className={styles.leftbox}>
          <span className={styles.mainheading}>GUIDANCE GRID</span>
          <p>
            Lorem consequat eiusmod ex sunt sint amet excepteur. Et elit id ipsum ut amet
            est amet. Voluptate do dolore eiusmod enim. Quis nostrud ad adipisicing
            proident dolore labore. Deserunt sunt occaecat id labore reprehenderit ullamco
            ipsum quis consectetur sunt ad proident et esse. Sit laboris nisi et commodo
            ad nostrud cillum tempor in. Tempor aute occaecat pariatur id cillum. Commodo
            veniam elit officia aliquip consequat sunt. Sit aute sit dolor et in Lorem.
          </p>
        </div>
        {isDesktop && (
          <div className={styles.rightbox}>
            <img src="/images/landingimg.png" height={300} alt="The landing logo" />
          </div>
        )}
      </div>
      <div className={styles.secondbox}>
        <span className={styles.mainheading}>ABOUT GUIDANCE GRID</span>
        <p>
          Lorem consequat eiusmod ex sunt sint amet excepteur. Et elit id ipsum ut amet
          est amet. Voluptate do dolore eiusmod enim. Quis nostrud ad adipisicing proident
          dolore labore. Deserunt sunt occaecat id labore reprehenderit ullamco ipsum quis
          consectetur sunt ad proident et esse. Sit laboris nisi et commodo ad nostrud
          cillum tempor in. Tempor aute occaecat pariatur id cillum. Commodo veniam elit
          officia aliquip consequat sunt. Sit aute sit dolor et in Lorem. Lorem consequat
          eiusmod ex sunt sint amet excepteur. Et elit id ipsum ut amet est amet.
          Voluptate do dolore eiusmod enim. Quis nostrud ad adipisicing proident dolore
          labore. Deserunt sunt occaecat id labore reprehenderit ullamco ipsum quis
          consectetur sunt ad proident et esse. Sit laboris nisi et commodo ad nostrud
          cillum tempor in. Tempor aute occaecat pariatur id cillum. Commodo veniam elit
          officia aliquip consequat sunt. Sit aute sit dolor et in Lorem. Lorem consequat
          eiusmod ex sunt sint amet excepteur. Et elit id ipsum ut amet
        </p>
      </div>
      <div className={styles.thirdbox}>
        <span className={styles.mainheading}>ABOUT GDSC NITS</span>
        <p>
          Lorem consequat eiusmod ex sunt sint amet excepteur. Et elit id ipsum ut amet
          est amet. Voluptate do dolore eiusmod enim. Quis nostrud ad adipisicing proident
          dolore labore. Deserunt sunt occaecat id labore reprehenderit ullamco ipsum quis
          consectetur sunt ad proident et esse. Sit laboris nisi et commodo ad nostrud
          cillum tempor in. Tempor aute occaecat pariatur id cillum. Commodo veniam elit
          officia aliquip consequat sunt. Sit aute sit dolor et in Lorem. Lorem consequat
          eiusmod ex sunt sint amet excepteur. Et elit id ipsum ut amet est amet.
          Voluptate do dolore eiusmod enim. Quis nostrud ad adipisicing proident dolore
          labore. Deserunt sunt occaecat id labore reprehenderit ullamco ipsum quis
          consectetur sunt ad proident et esse. Sit laboris nisi et commodo ad nostrud
          cillum tempor in. Tempor aute occaecat pariatur id cillum. Commodo veniam elit
          officia aliquip consequat sunt. Sit aute sit dolor et in Lorem. Lorem consequat
          eiusmod ex sunt sint amet excepteur. Et elit id ipsum ut amet
        </p>
      </div>
      <div className={styles.fourthbox}>
        <span className={styles.mainheading}>MEET THE TEAM</span>
        <div className={styles.devcards}>
          <div className={styles.ultraanimefanboys}>
            {infoData[0].map((data) => (
              <DeveloperCard data={data} />
            ))}
          </div>
          <div className={styles.juniors}>
            {infoData[1].map((data) => (
              <DeveloperCard data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
