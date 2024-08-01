import type { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../packages/redux/store";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const { profileData: profile, status, error } = useSelector((state) => state.github) ?? {};

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetchProfile(username);
  };

  return (
    <div>
      <div className="max-w-md m-auto divide-slate-400">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Pesquisar
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>

        {status === "failed" ? (
          <div className="text-center text-red-400 my-10">
            <p>{"Not found!"}</p>
          </div>
        ) : (
          <div className="text-center">
            <img
              src={profile?.avatar_url}
              width="100px"
              className="rounded-full m-auto my-4 mt-8"
            />

            <h2>Name: {profile?.name}</h2>
            <p>Bio: {profile?.bio}</p>
            <p>Twitter: {profile?.twitter_username}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
