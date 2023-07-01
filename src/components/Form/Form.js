import styles from "./Form.module.css";
import WelcomeText from "../WelcomeText/WelcomeText";
import TextInput from "./TextInput";
import CountryInput from "./CountryInput";
import GenderInput from "./GenderInput";
import HobbiesInput from "./HobbiesInput";
import Button from "../UI/Button";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [visibale, setVisibale] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = () => {
    if (name !== "" && address !== "" && country !== "" && hobbies !== "") {
      setVisibale(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className={styles.form}>
        <WelcomeText />
        <TextInput
          setName={setName}
          setAddress={setAddress}
          setError={setError}
        />
        <CountryInput
          country={country}
          setCountry={setCountry}
          setError={setError}
        />
        <div className={styles.genderAndHobbies}>
          <GenderInput />
          <HobbiesInput setHobbies={setHobbies} setError={setError} />
        </div>
        <Button text="Register" onClick={submitHandler} />
        {error && <p className={styles.error}>Invalid Input</p>}
      </div>

      {visibale && (
        <>
          <div className={styles.backdrop} />
          <div className={styles.card}>
            <h1>Details</h1>
            <h2>
              Name : <span>{name}</span>
            </h2>
            <h2>
              Address : <span>{address}</span>
            </h2>
            <h2>
              Country :
              <span>
                {country === "in" && "India"}
                {country === "ca" && "Canada"}
                {country === "si" && "Singapore"}
              </span>
            </h2>
            <h2>
              Hobbies : <span>{hobbies}</span>
            </h2>
            <Button text="Close" onClick={() => setVisibale(false)} />
          </div>
        </>
      )}
    </>
  );
};
export default Form;
