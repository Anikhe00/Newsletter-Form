import Checkmark from "../assets/check.svg";

export default function List({ children }) {
  return (
    <li className="flex items-start gap-[1rem]">
      <img
        src={Checkmark}
        alt="Checkmark Icon"
        className="w-[1.3125rem] h-[1.3125rem] "
      />
      <span className="text-[1rem] font-normal leading-[150%] text-blue-800">
        {children}
      </span>
    </li>
  );
}
