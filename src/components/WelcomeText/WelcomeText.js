import logo from "../../assets/shell-logo.png";
import styles from "./WelcomeText.module.css";
const WelcomeText = () => {
  return (
    <>
      <div className={styles.head}>
        <img src={logo} style={{ width: "50px", height: "50px" }} alt="logo" />
        <h1>
          Welcome To <span>Aaron Dsilva</span>
        </h1>
      </div>
      <div className={styles.signup}>
        <h2>Sign Up</h2>
        <p>Create Yor Free Account Now !</p>
      </div>
    </>
  );
};
export default WelcomeText;
