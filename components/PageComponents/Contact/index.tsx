import { Section, Header, Icon, Loading } from "@/components";
import styles from "./Contact.module.scss";
import { useEffect, useState } from "react";
import { IContactData, IResponse } from "@/types";
import { AxiosResponse } from "axios";
import { http } from "@/config";

export default function Contact(): JSX.Element {
  const postContactData = async (): Promise<void> => {
    setStatus("loading");

    try {
      const contactData: IContactData = {
        name: nameValue,
        email: emailValue,
        message: messageValue,
      };

      const response: AxiosResponse<IResponse<object>> = await http.post("/mailer", contactData);

      if (response) cleanUp();

      if (response.data.statusCode === 200) {
        setStatus("ok");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      cleanUp();
    }
  };

  const cleanUp = (): void => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
    setErrorMessage("");
    setDisabled(true);
  };

  const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [disabled, setDisabled] = useState<boolean>(false);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [status, setStatus] = useState<"ok" | "error" | "loading" | "idle">("loading");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (!nameValue || !emailValue || !messageValue) {
      setErrorMessage("Fill out the form");
    } else if (emailValue && !emailRegex.test(emailValue)) {
      setErrorMessage("Provide a valid e-mail address");
    } else if (nameValue && emailValue && messageValue && emailRegex.test(emailValue)) {
      postContactData();
    }
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
      {status === "loading" && <Loading />}
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
            disabled={disabled}
            className={disabled ? styles.disabled : ""}
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
            disabled={disabled}
            className={disabled ? styles.disabled : ""}
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
            disabled={disabled}
            className={disabled ? styles.disabled : ""}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessageValue(e.target.value)
            }
          />
        </div>
        <div
          className={`${styles.messageBox} ${errorMessage ? styles.error : ""} ${
            status !== "idle" ? styles.feedback : ""
          }`}
        >
          {errorMessage && errorMessage !== "" && (
            <>
              <Icon icon="feedback" color="brand" size={20} />
              <span>{errorMessage}</span>
            </>
          )}
          {status === "ok" && (
            <>
              <Icon icon="menu" color="brand" size={20} />
              <span>Sent. Thank you!</span>
            </>
          )}
          {status === "error" && (
            <>
              <Icon icon="menu" color="brand" size={20} />
              <span>Unexpected error. Try again later.</span>
            </>
          )}
        </div>
        <div>
          <button
            type="submit"
            className={`${styles.button} ${!isFormValid ? styles.disabled : ""} `}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
            disabled={disabled}
          >
            Send
          </button>
        </div>
      </form>
    </Section>
  );
}
