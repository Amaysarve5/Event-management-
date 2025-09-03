import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6puz4sl",      // ✅ Your Service ID
        "template_ytqwfgr",     // ✅ Your Template ID
        form.current,
        "_MEXwWCHcZkN1UIyi"     // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          toast.error("Failed to send message. Please try again!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-white"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Fill out the form below, and I’ll get back to you shortly!
          </p>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Send a Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default Contact;
