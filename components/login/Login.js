import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !password) {
      toast.error("UserName and Password is Required", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }
    const response = await fetch(`https://dummyjson.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON?.stringify({
        username: userName,
        password,
      }),
    });
    const data = await response?.json();

    if (data?.token) {
      if (typeof window !== "undefined") {
        localStorage?.setItem("token", data?.token);
        localStorage?.setItem("id", data?.id);
      }
      toast?.success("Login Success", {
        autoClose: 1000,
      });
      router?.push("/products");
    }

    if (data?.message === "Invalid credentials") {
      toast?.error(data?.message, {
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage?.getItem("token")) {
      router?.replace("/products");
    }
  }, []);

  return (
    <div
      className="row w-100  mx-auto  d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container col-md-5 p-5 ">
        <form onSubmit={handleSubmit}>
          <div className="card p-5">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                User Name
              </label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                class="form-control"
                placeholder="User Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                value={password}
                type="password"
                class="form-control"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-md btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
