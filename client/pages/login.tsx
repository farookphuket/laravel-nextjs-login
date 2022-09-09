import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../hooks/auth";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { login, user, logout } = useAuth();

  const loginName = user?.name;

  const submitForm = async (e) => {
    e.preventDefault();
    login({ setError, setSuccess, email, password });
  };
  return (
    <div className="flex min-h-screen bg-gray-200 flex-col items-center justify-center py-2">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full bg-white flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Login Page{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          to edit this file
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/login.tsx
          </code>
          or just click
          <span className="mr-2 ml-2 border border-gray-300">
            <Link href="/">
              <a className="text-green-400 p-4">Home</a>
            </Link>
          </span>
          to back to home page
          {loginName ? (
            <span className="ml-2 mr-2 text-green-600 font-semibold">
              {user?.name}

              <button
                className="mr-2 ml-2 border border-red-400 p-2"
                onClick={logout}
              >
                logout
              </button>
            </span>
          ) : (
            <span className="text-red-600 ml-2 mr-2">guest</span>
          )}
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-6 w-full rounded-xl border p-6 text-left ">
            <h3 className="text-2xl font-bold">Login &rarr;</h3>
            <p className="mt-4 text-xl">
              this is the Login page! need to join us do{" "}
              <Link href="/register">
                <a className="text-blue-500 font-semibold underline">
                  REGISTER
                </a>
              </Link>{" "}
              !
            </p>

            {user?.name ? (
              <div>
                <h1 className="text-3xl text-green-600">{user?.name}</h1>
                <p>
                  dear
                  <span className="text-green-600 text-3xl mr-2 ml-2">
                    {loginName}
                  </span>{" "}
                  you have been login as
                  <span className="text-2xl text-green-700 p-2 bg-gray-200">
                    {loginName}
                  </span>
                  &nbsp;please log out from this session to use another account
                </p>
              </div>
            ) : (
              <div className="p-4 bg-gray-50">
                <form onSubmit={submitForm}>
                  <div className="p-4 bg-blue-200">
                    <label htmlFor="">email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter email..."
                      onBlur={(e) => setEmail(e.target.value)}
                      className="w-full text-3xl"
                    />
                  </div>

                  <div className="p-4 bg-blue-200 mb-6">
                    <label htmlFor="">password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="~~~~~"
                      onBlur={(p) => setPassword(p.target.value)}
                      className="w-full text-3xl"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      {error && (
                        <span
                          dangerouslySetInnerHTML={{ __html: error }}
                        ></span>
                      )}

                      {success && (
                        <span
                          dangerouslySetInnerHTML={{ __html: success }}
                        ></span>
                      )}
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="border border-slate-500 text-2xl 
                      font-medium rounded-xl p-2"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Login;
