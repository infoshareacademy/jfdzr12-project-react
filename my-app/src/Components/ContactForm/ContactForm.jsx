import styles from "./ContactForm.module.css";
import classnames from "classnames";
import { validateEmail } from "../../utils/validationEmail.js";
import { useRef, useState } from "react";

export const ContactForm = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const inputEmailEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = inputEmailEl.current.value;

    setEmailMessage(validateEmail(emailValue));
    console.log(emailValue);
  };

  return (
    <div className={classnames(styles["modal"])} id="contact">
      <h1 className={classnames(styles["modal__header"])}>Contact us</h1>
      <form
        action=""
        method="get"
        className={classnames(styles["modal__form"])}
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className={classnames(styles["form__label"])}>
          Title
        </label>
        <input
          placeholder=""
          type="text"
          id="title"
          name="title"
          className={classnames(
            styles["form__input"],
            styles["form__input--text"]
          )}
          required
        />
        <label htmlFor="email" className={classnames(styles["form__label"])}>
          Email
        </label>
        <input
          ref={inputEmailEl}
          placeholder=""
          type="email"
          id="email"
          name="email"
          className={classnames(
            styles["form__input"],
            styles["form__input--email"]
          )}
          required
        />
        <p className={classnames(styles["form__error-message"])}>
          {emailMessage}
        </p>
        <label htmlFor="message" className={classnames(styles["form__label"])}>
          Message
        </label>
        <textarea
          placeholder=""
          id="message"
          className={classnames(
            styles["form__input"],
            styles["form__input--textarea"]
          )}
          minLength="20"
          name="message"
          rows="4"
          cols="50"
          required
        ></textarea>
        <input
          type="submit"
          value="Send"
          className={classnames(
            styles["form__input"],
            styles["form__input--submit"]
          )}
        />
      </form>
    </div>
  );
};