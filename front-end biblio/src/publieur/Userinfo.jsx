import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../pages/login';
import { axiosClient } from '../api/axios';

function Userinfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (!window.localStorage.getItem('access_token')) {
      navigate(Login);
    }

    axiosClient.get('/user').then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <>
      <h1>salam hadi blast l users</h1>
      <ul>
        {JSON.stringify(user)}
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead
            class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" class="px-6 py-4">id</th>
              <th scope="col" class="px-6 py-4">name</th>
              <th scope="col" class="px-6 py-4">email</th>
              <th scope="col" class="px-6 py-4">date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.name}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.email}</td>
              <td class="whitespace-nowrap px-6 py-4">{user.created_at}</td>
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
