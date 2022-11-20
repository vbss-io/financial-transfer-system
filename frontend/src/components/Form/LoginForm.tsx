import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent } from "react";
import Form from "./Form";
import * as requests from "../../utils/requests";

export default function LoginForm() {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState<"login" | "create">("login");
  const [modalTitle, setModalTitle] = useState("Entre na sua conta!");
  const [buttonTitle, setButtonTitle] = useState("Entrar");
  const [modalSubtitle, setModalSubtitle] = useState("Ainda não tem uma conta? Cadastre-se!");
  const [error, setError] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    console.log('modalType', modalType);
    console.log('modalTitle', modalTitle);
    console.log('modalSub', modalSubtitle);
    console.log('error', error);
    console.log('errorStatus', errorStatus);
  }, [modalType, modalTitle, modalSubtitle, error, errorStatus]);

  const handleSuccess = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const user = await requests.postUser(modalType, data);
      setErrorStatus(false);
      requests.setToken(user.token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } catch (error: any) {
      console.log(error);
      setErrorStatus(true);
      setError(error.response.data.message);
    }
  }

  const handleChangeForm = (e: FormEvent) => {
    e.preventDefault();
    if (modalType === "login") {
      setModalType("create");
      setModalTitle("Crie sua conta!");
      setModalSubtitle("Já tem uma conta? Entre!");
      setButtonTitle("Cadastrar");
    } else {
      setModalType("login");
      setModalTitle("Entre na sua conta!");
      setModalSubtitle("Ainda não tem uma conta? Cadastre-se!");
      setButtonTitle("Entrar");
    }
  }

  return(
    <Dialog.Root open>
      <Dialog.Content className="flex flex-col bg-[#2A2634] py-8 px-10 text-white rounded-lg w-[25rem] shadow-lg shadow-black/25">
      <Dialog.Title className="text-3xl font-black text-center">{modalTitle}</Dialog.Title>
      <Form
        handleSuccess={handleSuccess}
        handleChangeForm={handleChangeForm}
        errorStatus={errorStatus}
        error={error}
        modalSubtitle={modalSubtitle}
        buttonTitle={buttonTitle}
      />
      </Dialog.Content>
    </Dialog.Root>
  )
}