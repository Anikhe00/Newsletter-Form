import Modal from "./components/Modal";
import NewsletterForm from "./components/NewsletterForm";

export default function App() {
  return (
    <main className="w-full h-dvh md:min-h-dvh lg:min-h-dvh flex pb-[2.75rem] items-center flex-col lg:justify-center md:justify-center lg:bg-blue-700 md:bg-blue-700 bg-white">
      <NewsletterForm></NewsletterForm>
    </main>
  );
}
