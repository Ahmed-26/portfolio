import { useState } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const scriptURL = "https://script.google.com/macros/s/AKfycbyjHrnGopSa7lBc22mV2113uIYr2mbJkJDutFzIo-ybcCEUASvuTRFfUVmVNpgLv31I/exec";

  const emailValidation = (email: string) => {
    return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validation
    if (!username || !phone || !email || !subject || !message) {
      setErrMsg("All fields are required!");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Invalid email format!");
      return;
    }

    setErrMsg("");

    // Prepare form data
    const formData = new FormData();
    formData.append("Name", username);
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("Subject", subject);
    formData.append("Message", message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSuccessMsg(`Thank you ${username}, your message has been sent!`);
      setUsername("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");

      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
    } catch (error) {
      setErrMsg("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] bg-gradient-to-r from-[#0B1120] to-[#0B1120] rounded-lg p-4 lgl:p-8 shadow-shadowOne">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {errMsg && (
                <p className="text-red-500 text-center animate-bounce">{errMsg}</p>
              )}
              {successMsg && (
                <p className="text-green-500 text-center animate-bounce">{successMsg}</p>
              )}
              <input
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="contactInput"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="contactInput"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contactInput"
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="contactInput"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contactTextArea"
              ></textarea>
              <button
                type="submit"
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border border-designColor"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;