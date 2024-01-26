import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import PublieurApi from '../service/api/PublieurApi';

function Userinfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (!window.localStorage.getItem('access_token')) {
      navigate(Login);
    }
    PublieurApi.getUser().then(response => {
      setUser(response.data);
    }).catch(error => {
      console.error('User API Error:', error);
    });
  }, []);

  return (
    <>
      <h1>hey {user.name}</h1>
      <ul>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <tr>
                      <th scope="col" className="px-6 py-4">id</th>
                      <th scope="col" className="px-6 py-4">name</th>
                      <th scope="col" className="px-6 py-4">email</th>
                      <th scope="col" className="px-6 py-4">date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.created_at}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}

export default Userinfo;
