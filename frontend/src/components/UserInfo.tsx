import { SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import Button from './Form/Button';

interface User {
  username: string;
}

export default function UserInfo({username}: User) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <div className="flex justify-between items-center bg-[#2A2634] py-8 px-10 text-white rounded-lg">
      <p className="font-black">
        Bem vindo, {username}
      </p>
      <Button
        type="button"
        buttonStyle='none'
        className="flex flex-row gap-2"
        onClick={logout}
      >
        <SignOut size={24} /> Sair
      </Button>
    </div>
  )
}