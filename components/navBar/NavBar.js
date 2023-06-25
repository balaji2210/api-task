import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
const NavBar = () => {
  const router = useRouter();

  const logout = () => {
    localStorage?.clear();
    toast.success("Logout Success", {
      autoClose: 1000,
    });
    router?.push("/");
  };

  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Ecom</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a
                class="nav-link active btn btn-dark text-white"
                aria-current="page"
                onClick={logout}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
