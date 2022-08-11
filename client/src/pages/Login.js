import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container items-center mx-auto p-36">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold">Login</h2>
        <form onSubmit={handleFormSubmit} className="py-2">
          <div className="flex-row space-between my-2">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-900  dark:text-gray-300 pr-8"
            >
              Email:{" "}
            </label>
            <input
              className="rounded-full"
              placeholder="email@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label
              htmlFor="pwd"
              className="mb-2 text-sm font-medium text-gray-900  dark:text-gray-300 pr-2"
            >
              Password:
            </label>
            <input
              className="rounded-full"
              placeholder="*****"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="text-red-700">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className="flex-row flex-end">
            <button
              type="submit"
              className="inline-flex py-2 px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-green-100 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
