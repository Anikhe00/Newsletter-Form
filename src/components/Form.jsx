import Button from "./Button";
import EmailField from "./EmailField";

export default function Form() {
  return (
    <form
      action="submit"
      className="flex flex-col items-start gap-[1.5rem] self-stretch"
    >
      <EmailField />
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  );
}
