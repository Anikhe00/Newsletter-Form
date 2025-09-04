import Button from "./Button";
import EmailField from "./EmailField";

export default function Form({ onChange, value, onSubmit }) {
  return (
    <form
      action="submit"
      onSubmit={onSubmit}
      className="flex flex-col items-start gap-[1.5rem] self-stretch"
    >
      <EmailField onChange={onChange} value={value} />
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  );
}
