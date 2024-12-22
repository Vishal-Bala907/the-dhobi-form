import style from "./first.module.css";
import logo from "../public/images/logo.png";
import "./common.css";
import ContactForm from "./ContactForm";
import { useState } from "react";
// import { VscCircleLargeFilled } from "react-icons/vsc";

const FirstForm = () => {
  const [formNumber, setFormNumber] = useState(0);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });
  const contactDetails = (data) => {
    setDetails({
      name: data.name,
      email: data.email,
      number: data.number,
      address: data.address,
    });
    console.log(details);
  };
  return (
    <>
      <div className={`${formNumber === 0 ? style.bgImage1 : style.bgImage2}`}>
        <div className="left">
          <img className={`${style.logo}`} src={logo} alt="logo" />
          {formNumber === 0 ? (
            <ContactForm
              contactDetails={contactDetails}
              setFormNumber={setFormNumber}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default FirstForm;
