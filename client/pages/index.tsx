import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../hooks/auth";
const Home: NextPage = () => {
  const { user, logout } = useAuth();
  const loginName = user?.name;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome
          {loginName ? (
            <span className="text-green-600 mr-2 ml-2">{user?.name}</span>
          ) : (
            <span className="text-red-600 mr-2 ml-2">Guest</span>
          )}
          nextjs
        </h1>

        <p className="mt-3 text-2xl">
          version 1.0{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            auth system 1.0 created on 8 aug 2022
          </code>
        </p>
        <div className="text-center">
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
            <span className="text-red-600 ml-2 mr-2"> as guest</span>
          )}
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/login">
            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Login Page &rarr;</h3>
              <p className="mt-4 text-xl">test the login baby!</p>
            </a>
          </Link>

          <Link href="/register">
            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Register Baby &rarr;</h3>
              <p className="mt-4 text-xl">go to register my dear</p>
            </a>
          </Link>
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

export default Home;
