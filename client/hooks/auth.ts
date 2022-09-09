import useSWR from "swr";
import { useRouter } from "next/router";
import axios from "../lib/axios";

export const useAuth = () => {
  const router = useRouter();

  const { data: user, mutate } = useSWR("/api/user", () =>
    axios.get("/api/user").then((res) => res.data)
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const login = async ({ setError, setSuccess, ...props }) => {
    await csrf();

    setError(null);
    setSuccess(null);

    axios
      .post("/api/login", props)
      .then((res) => {
        //console.log(res.data);

        setSuccess(
          `<span style="color:green;font-weight:bold;">${res.data.msg}</span>`
        );
      })
      .catch((err) => {
        if (err.response.status === 422) {
          let eM = Object.values(err.response.data.errors).join();
          setError(`<span style="color:red;font-weight:bold;">${eM}</span>`);
        }
      });
  };

  const register = async ({ setError, setSuccess, ...props }) => {
    await csrf();
    setError(null);
    setSuccess(null);

    axios
      .post("/api/register", props)
      .then((res) => {
        setSuccess(
          `<span style="color:green;font-weight:bold;">${res.data.msg}</span>`
        );
      })
      .catch((err) => {
        let eM = Object.values(err.response.data.errors).join();
        setError(`<span style="color:red;font-weight:bold;">${eM}</span>`);
      });
  };

  const logout = async () => {
    await csrf();
    axios
      .post("/api/logout")
      .then((res) => {
        //location.reload();
        mutate(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    user,
    login,
    register,
    logout,
  };
};
