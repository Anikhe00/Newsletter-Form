export default function EmailField({ valid, value, onChange, hasSubmitted }) {
  return (
    <div className="flex flex-col items-start gap-[0.5rem] w-full">
      <div className="flex justify-between items-start self-stretch">
        <label
          htmlFor="email"
          className="text-[0.75rem] font-medium leading-[150%] text-blue-800"
        >
          Email address
        </label>
        {hasSubmitted && !valid ? (
          <span className="text-[0.75rem] text-red font-medium leading-[150%]">
            Valid email required
          </span>
        ) : null}
      </div>
      <input
        value={value}
        onChange={onChange}
        id="email"
        placeholder="email@company.com"
        className="flex h-[3.5rem] px-[1.5rem] py-[1rem] justify-between items-center border-grey border-[1px] rounded-[0.5rem] focus:outline-none focus:border-blue-800 caret-blue-800 text-blue-800 text-[1rem] font-normal leading-[150%] cursor-pointer self-stretch "
      />
    </div>
  );
}
