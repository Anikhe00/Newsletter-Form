import Modal from "./components/Modal";
import NewsletterForm from "./components/NewsletterForm";
import { useState } from "react";

export default function App() {
  const [isValue, setIsValue] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleChange(e) {
    setIsValue(e.target.value);
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setHasSubmitted(true);

    if (!validateEmail(isValue)) {
      return;
    }
    setIsSubscribed(true);
  }

  function handleDismiss() {
    setHasSubmitted(false);
    setIsSubscribed(false);
    setIsValue("");
  }

  return (
    <main className="w-full h-dvh md:min-h-dvh lg:min-h-dvh flex pb-[2.75rem] items-center flex-col lg:justify-center md:justify-center lg:bg-blue-700 md:bg-blue-700 bg-white">
      {isSubscribed === false ? (
        <NewsletterForm
          onChange={handleChange}
          value={isValue}
          onSubmit={handleSubmit}
          valid={validateEmail(isValue)}
          hasSubmitted={hasSubmitted}
        ></NewsletterForm>
      ) : (
        <Modal value={isValue} onDismiss={handleDismiss} />
      )}
    </main>
  );
}
