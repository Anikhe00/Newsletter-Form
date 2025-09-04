import List from "./List";
import Form from "./Form";
import Illustration from "../assets/newsletter-illustration.png";

export default function NewsletterForm() {
  return (
    <section className="flex w-full md:w-[38rem] lg:w-[56.5rem] md:h-[54.875rem] lg:h-[40.063rem] md:p-[2.5rem] h-dvh md:rounded-[2.25rem] md:bg-white md:shadow-[0_15px_60px_0_rgba(0,0,0,0.25)]">
      <div className="flex flex-col lg:flex-row-reverse w-full items-center lg:items-center lg:justify-center gap-[2.5rem] ">
        <img
          src={Illustration}
          alt="Newsletter Illustration"
          className="w-full lg:w-[25rem] h-[17.75rem] md:h-[22.39288rem] lg:h-full md:rounded-[1rem] rounded-b-[1rem] object-cover "
        />
        <div className="flex flex-col items-start gap-[2.5em] md:gap-[1.5rem] md:self-stretch lg:h-fit px-[1.5rem] lg:px-0">
          <div className="flex flex-col items-start gap-[1.5rem]">
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[100%] text-blue-800">
              Stay updated!
            </h1>
            <p className="text-[1rem] font-normal leading-[150%] text-blue-800">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="flex flex-col items-start gap-[0.5rem]">
              <List>Product discovery and building what matters</List>
              <List>Measuring to ensure updates are a success</List>
              <List>And much more!</List>
            </ul>
          </div>
          <Form></Form>
        </div>
      </div>
    </section>
  );
}
