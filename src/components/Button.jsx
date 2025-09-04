export default function Button({ children, handleClick }) {
  return (
    <button
      className="flex h-[3.5rem] w-full justify-center items-center bg-blue-800 text-white font-semibold text-[1rem] leading-[150%] text-center px-[2rem] py-[1rem] rounded-[0.5rem] cursor-pointer hover:bg-[linear-gradient(90deg,#ff6a3a_0%,#ff527b_100%)]"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
