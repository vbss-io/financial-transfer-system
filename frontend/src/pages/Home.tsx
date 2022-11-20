import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as requests from '../utils/requests';
import UserInfo from '../components/UserInfo';
import Balance from '../components/Balance';
import NewTransaction from '../components/NewTransaction';
import Transactions from '../components/Transactions';

interface User {
  id: number;
  username: string;
  token: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as any);
    if (!user) {
      navigate('/login');
    } else {
      setUser(user);
      requests.setToken(user.token);
      setLoading(false);
    }

    const verifyToken = async () => {
      try {
        await requests.verifyToken(user.token);
      } catch (error: any) {
        console.log(error);
        navigate('/');
      }
    };
    verifyToken();

  }, []);

  return (
    <div className="
      w-screen
      h-screen
      flex
      flex-row
      items-center
      justify-center
      bg-white-smoked"
    >
      {!loading ? (
        <div className="flex flex-col py-8 px-10 w-[40rem] gap-4">
          <UserInfo username={user.username} />
          <div className="flex md:flex-row sm:flex-col flex-col gap-4">
            <Balance />
            <NewTransaction />
          </div>
          <Transactions />
        </div>
      ) : (
        <div className="flex flex-col py-8 px-10 w-[40rem] gap-4">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}