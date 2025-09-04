import Modal from "./components/Modal";
import NewsletterForm from "./components/NewsletterForm";
import { useState } from "react";

export default function App() {
  const [isValue, setIsValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleChange(e) {
    setIsValue(e.target.value);
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(isValue)) {
      return;
    }
    setIsSubscribed(true);
  }

  return (
    <main className="w-full h-dvh md:min-h-dvh lg:min-h-dvh flex pb-[2.75rem] items-center flex-col lg:justify-center md:justify-center lg:bg-blue-700 md:bg-blue-700 bg-white">
      {isSubscribed === false ? (
        <NewsletterForm
          onChange={handleChange}
          value={isValue}
          onSubmit={handleSubmit}
        ></NewsletterForm>
      ) : (
        <Modal />
      )}
    </main>
  );
}
