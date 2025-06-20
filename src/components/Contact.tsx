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

  const handleSend = async (e: any) => {
    e.preventDefault();

    if (!username || !phoneNumber || !email || !subject || !message) {
      setErrMsg("All fields are required.");
      setTimeout(() => setErrMsg(""), 3000);
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyjHrnGopSa7lBc22mV2113uIYr2mbJkJDutFzIo-ybcCEUASvuTRFfUVmVNpgLv31I/exec";

    const formData = new FormData();
    formData.append("username", username);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccessMsg(`Thanks ${username}, your message has been sent!`);
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setSuccessMsg(""), 3000);
      } else {
        setErrMsg("Something went wrong. Please try again.");
        setTimeout(() => setErrMsg(""), 3000);
      }
    } catch (error) {
      setErrMsg("Network error. Please check your connection.");
      console.error("Error:", error);
      setTimeout(() => setErrMsg(""), 3000);
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
                  <p className="py-3 bg-red-900 bg-opacity-30 text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-green-800 bg-opacity-30 text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}

                {/* Name & Phone */}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      type="text"
                      className={`contactInput ${errMsg.includes("name") && "outline-designColor"}`}
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      type="text"
                      className={`contactInput ${errMsg.includes("Phone") && "outline-designColor"}`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className={`contactInput ${errMsg.includes("Email") && "outline-designColor"}`}
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    type="text"
                    className={`contactInput ${errMsg.includes("Subject") && "outline-designColor"}`}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    rows={6}
                    className={`contactTextArea ${errMsg.includes("Message") && "outline-designColor"}`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <button
                    onClick={handleSend}
                    type="submit"
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border border-gray-600"
                  >
                    Send Message
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
