import { useState } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Email validation function
  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (username === "") {
      setErrMsg("Username is required!");
      setTimeout(() => setErrMsg(""), 2000);
      setIsLoading(false);
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      setTimeout(() => setErrMsg(""), 2000);
      setIsLoading(false);
    } else if (email === "") {
      setErrMsg("Please give your Email!");
      setTimeout(() => setErrMsg(""), 2000);
      setIsLoading(false);
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
      setTimeout(() => setErrMsg(""), 2000);
      setIsLoading(false);
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
      setTimeout(() => setErrMsg(""), 2000);
      setIsLoading(false);
    } else if (message === "") {
      setErrMsg("Message is required!");
      setTimeout(() => setErrMsg(""), 2000);
      setIsLoading(false);
    } else {
      try {
        const formData = new URLSearchParams();
        formData.append("name", username);
        formData.append("phone", phoneNumber);
        formData.append("email", email);
        formData.append("subject", subject);
        formData.append("message", message);

        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxMF-XErrn1l1XrE2e0s9-R5zj_ujR-y48ix1QnUb_53uxfZ35ubeaqTlu0e6e4a0cQUA/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
          }
        );

        const result = await response.text();

        if (result === "Success") {
          setSuccessMsg(
            `Thank you dear ${username}, Your Message has been sent Successfully!`
          );
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
          setTimeout(() => setSuccessMsg(""), 2000);
        } else {
          setErrMsg("There was an error submitting the form.");
          setTimeout(() => setErrMsg(""), 2000);
        }
      } catch (error) {
        setErrMsg("Failed to send message. Try again later.");
        setTimeout(() => setErrMsg(""), 2000);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Your name
                    </p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={`${
                        errMsg === "Username is required!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Phone Number
                    </p>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={`${
                        errMsg === "Phone number is required!" &&
                        "outline-designColor"
                      } contactInput`}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${
                      errMsg === "Please give your Email!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Subject
                  </p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={`${
                      errMsg === "Please give your Subject!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${
                      errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    onClick={handleSend}
                    disabled={isLoading}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
