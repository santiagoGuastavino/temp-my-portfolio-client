import { Section, Header, Icon } from "@/components";
import styles from "./Contact.module.scss";
import { useEffect, useState } from "react";
import { useContactForm } from "@/hooks";

export default function Contact(): JSX.Element {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const [submit, setSubmit] = useState<boolean>(false);

  useContactForm({ submit });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!nameValue || !emailValue || !messageValue) {
      setErrorMessage("Fill out the form");
    } else if (emailValue && !emailRegex.test(emailValue)) {
      setErrorMessage("Provide a valid e-mail address");
    } else if (nameValue && emailValue && messageValue) {
      setSubmit(true);
    }

    e.preventDefault();
  };

  useEffect(() => {
    if (nameValue && emailValue && messageValue) {
      if (!emailRegex.test(emailValue)) {
        setErrorMessage("Provide a valid e-mail address");
      } else {
        setErrorMessage("");
      }
    }

    if (emailRegex.test(emailValue)) {
      setErrorMessage("");
    }

    if (
      !errorMessage &&
      !!nameValue &&
      !!emailValue &&
      emailRegex.test(emailValue) &&
      !!messageValue
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [nameValue, emailValue, messageValue]);

  return (
    <Section name="Contact">
      <Header text="Contact" />
      <article>
        <header className={styles.header}>
          <p>
            Submit the form below and I&apos;ll get back to you, or send me an e-mail at&nbsp;
            <b>smguastavino@gmail.com</b>
          </p>
        </header>
      </article>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className={styles.form}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            maxLength={30}
            id="name"
            name="name"
            value={nameValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameValue(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            maxLength={30}
            id="email"
            name="email"
            value={emailValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            maxLength={200}
            id="message"
            name="message"
            value={messageValue}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessageValue(e.target.value)
            }
          />
        </div>
        <div className={`${styles.errorBox} ${errorMessage ? styles.show : ""}`}>
          {errorMessage && errorMessage !== "" && (
            <>
              <Icon className={styles.icon} icon="feedback" color="brand" size={30} />
              <span>{errorMessage}</span>
            </>
          )}
        </div>
        <div>
          <button
            type="submit"
            className={`${styles.button} ${!isFormValid ? styles.disabled : ""} `}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
          >
            Send
          </button>
        </div>
      </form>
    </Section>
  );
}
