import objects from "../assets/objects.jpg";
import Form from "../components/Form/Form";
import styles from "./Registration.module.css";
const Registration = () => {
  return (
    <div className={styles.registration}>
      <img src={objects} alt="" />
      <div className={styles.registrationForm}>
        <Form />
      </div>
    </div>
  );
};
export default Registration;
