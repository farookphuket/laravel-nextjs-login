import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../hooks/auth";
import moment from "moment";

const Register: NextPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { register, user, logout } = useAuth();

  const loginName = user?.name;
  const submitForm = async (e) => {
    e.preventDefault();
    register({ setError, setSuccess, name, email, password });
  };
  return (
    <div className="flex min-h-screen bg-gray-200 flex-col items-center justify-center py-2">
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full bg-white flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Register Page{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          to edit this file
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/register.tsx
          </code>
          or just click
          <span className="mr-2 ml-2 border border-gray-300">
            <Link href="/">
              <a className="text-green-400 p-4">Home</a>
            </Link>
          </span>
          to back to home page
        </p>

        {loginName ? (
          <span className="ml-2 mr-2 text-3xl text-green-600 font-semibold">
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

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-6 w-full rounded-xl border p-6 text-left">
            <h3 className="text-2xl font-bold">Register &rarr;</h3>
            <p className="mt-4 text-xl">
              this is the register page! need to join us do REGISTER
            </p>

            {/*
      start the condition 
          */}
            {user?.name ? (
              <div className="flex justify-between">
                <p className="p-2 mb-4">
                  dear
                  <span className="mr-2 ml-2 text-3xl text-green-600">
                    {user?.name}
                  </span>
                  you have register on
                  <span className="text-blue-700 ml-2 mr-2">
                    {moment(user?.created_at).format("YYYY-MM-DD")}
                  </span>{" "}
                  or
                  <span className="text-blue-700 ml-2 mr-2">
                    {moment(user?.created_at).fromNow()}
                  </span>{" "}
                  in order to register you have to logout from your session
                  first
                </p>
              </div>
            ) : (
              <div className="p-4 bg-gray-50">
                <form onSubmit={submitForm}>
                  <div className="p-4 bg-blue-200">
                    <label htmlFor="">name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      onBlur={(n) => setName(n.target.value)}
                      className="w-full text-3xl"
                      placeholder="Enter the name..."
                    />
                  </div>
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
                      placeholder="~~~~~~"
                      onBlur={(p) => setPassword(p.target.value)}
                      className="w-full text-3xl"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      {success && (
                        <div
                          dangerouslySetInnerHTML={{ __html: success }}
                        ></div>
                      )}
                      {error && (
                        <div dangerouslySetInnerHTML={{ __html: error }}></div>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="border border-slate-500 text-2xl 
                      font-medium rounded-xl p-2"
                      >
                        signup!
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

export default Register;
