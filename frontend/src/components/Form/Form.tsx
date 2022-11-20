import { FormHTMLAttributes, ButtonHTMLAttributes } from "react";
import Input from "./Input";
import Button from "./Button";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  handleSuccess: (e: React.FormEvent) => void;
  handleChangeForm: (e: React.FormEvent) => void;
  buttonTitle: string;
  modalSubtitle: string;
  errorStatus: boolean;
  error: string;
}

export default function Form({ handleSuccess, handleChangeForm, errorStatus, error, modalSubtitle, buttonTitle, ...props }: FormProps) {
  return (
    <form
      {...props}
      onSubmit={handleSuccess}
      className="mt-8 flex flex-col gap-4">
    <div className="flex flex-col gap-2">
        <label htmlFor="username">Usuário:</label>
        <Input required id="username" name="username" placeholder="Usuário"/>
    </div>
    <div className="flex flex-col gap-2">
        <label htmlFor="password">Senha:</label>
        <Input required type="password" id="password" name="password" placeholder="Senha"/>
    </div>
    <footer className="mt-4 flex flex-col justify-center gap-4">
      <Button
        type="submit"
        buttonStyle="primary"
      >
        {buttonTitle}
      </Button>
      <span className={`${!errorStatus && 'hidden'} text-center text-red-500`}>
        {error}
      </span>
      <Button
        type="button"
        buttonStyle="none"
        onClick={handleChangeForm}
      >
        {modalSubtitle}
      </Button>
    </footer>
  </form>
  );
}