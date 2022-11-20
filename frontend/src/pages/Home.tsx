import { useEffect, useState } from 'react';
import * as requests from '../utils/requests';

interface Balance {
  balance: number;
}

interface User {
  id: number;
  username: string;
  token: string;
}

export default function Home() {
  const [balance, setBalance] = useState({} as Balance);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as any);
    setUser(user);
    requests.setToken(user.token);

    const getBalance = async () => {
      const response = await requests.getBalance();
      setBalance(response);
    };
    getBalance();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>
        {user.username}
      </p>
      <p>
        {balance.balance}
      </p>
    </div>
  );
}