import Modal from "./components/Modal";
import NewsletterForm from "./components/NewsletterForm";
import { useState } from "react";

export default function App() {
  const [isValue, setIsValue] = useState("");

  function handleChange(e) {
    setIsValue(e.target.value);
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  return (
    <main className="w-full h-dvh md:min-h-dvh lg:min-h-dvh flex pb-[2.75rem] items-center flex-col lg:justify-center md:justify-center lg:bg-blue-700 md:bg-blue-700 bg-white">
      <NewsletterForm
        onChange={handleChange}
        value={isValue}
        onSubmit={handleSubmit}
      ></NewsletterForm>
    </main>
  );
}
