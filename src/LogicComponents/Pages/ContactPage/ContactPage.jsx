import React, { useRef } from "react";
import style from "./contact.module.scss";
import { InputContact } from "./ContactModules/InputContact";
import { SelectContact } from "./ContactModules/SelectContact";
import { SubmitBtn } from "./ContactModules/SubmitBtn";
import emailjs from "@emailjs/browser";
import { MessageContact } from "./ContactModules/MessageContact";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
  const inputsHeader = ["Name", "Email"];
  const selectsHeader = [
    {
      header: "What service are you interested in",
      options: ["Chat", "Music", "Wordle", "Another"],
      name: "service",
    },
    {
      header: "Score",
      options: ["1", "2", "3", "4", "5"],
      name: "score",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Successfully sent!");
        },
        (error) => {
          toast.error("Message not delivered");
        }
      );
    e.target.reset();
  };

  return (
    <div className={style.contactPageWrapper}>
      <div className={style.contactForm}>
        {/* Mine info section */}
        <section>
          <div className={style.mineInfoField}>
            <section className={style.talkSection}>
              <h1>Let’s Talk</h1>
              <span>
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide help. Then
                reach out we'd love to hear about your project and provide help
              </span>
            </section>
            <section className={style.emailSection}>
              <h1>Email</h1>
              <span>danilach42@gmail.com</span>
            </section>
            <section className={style.socialsSection}>
              <h1>Socials</h1>
              <a href="https://t.me/ChizhovDanila">Telegram</a>
              <a href="https://vk.com/absentnow" >Vk</a>
            </section>
          </div>
        </section>
        {/* User info section/form */}
        <section>
          <form ref={form} onSubmit={sendEmail} className={style.userInfoField}>
            {inputsHeader.map((head, ind) => {
              return (
                <section key={ind} className={style.userField}>
                  <span>{head}</span>
                  <InputContact currentHeader={head} />
                </section>
              );
            })}
            {selectsHeader.map((value, ind) => {
              return (
                <section key={ind} className={style.userField}>
                  <span>{value.header}</span>
                  <SelectContact currentValue={value} />
                </section>
              );
            })}
            <section className={style.userField} style={{ height: "201px" }}>
              <span>Message</span>
              <MessageContact />
            </section>
            <SubmitBtn />
          </form>
        </section>
      </div>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
};

export default ContactPage;
