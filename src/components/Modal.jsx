import Button from "./Button";
import Checkmark from "../assets/check.svg";

export default function Modal() {
  return (
    <div className="flex flex-col justify-end items-center bg-white px-[1.5rem] pt-[9.31rem] pb-[4.38rem] h-dvh lg:w-[31.5rem] md:w-[31.5rem] lg:h-[32.5rem] md:h-[32.5rem] lg:p-[4rem] md:p-[4rem] lg:rounded-[2.25rem] md:rounded-[2.25rem] ">
      <div className="flex flex-col justify-between lg:justify-center md:justify-center lg:gap-[2rem] md:gap-[2rem] h-dvh w-full items-start">
        <div className="flex flex-col items-start gap-[2rem]">
          <img src={Checkmark} alt="checkmark for success" />

          <h1 className="text-[2.5rem] lg:text-[3.5rem] md:text-[3.5rem] font-bold leading-[100%] text-blue-800 ">
            Thanks for subscribing!
          </h1>

          <p className="text-[1rem] font-normal leading-[150%] text-blue-800">
            A confirmation email has been sent to{" "}
            <strong>ash@loremcompany.com</strong>. Please open it and click the
            button inside to confirm your subscription.
          </p>
        </div>

        <Button>Dismiss message</Button>
      </div>
    </div>
  );
}
