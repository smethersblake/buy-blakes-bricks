import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  // submit form (notice the async!)
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container items-center mx-auto p-36">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold">Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2 py-2">
            <label
              htmlFor="username"
              className="mb-2 text-sm font-medium text-gray-900  dark:text-gray-300 pr-3"
            >
              Username:{" "}
            </label>
            <input
              className=" form-input rounded-full"
              placeholder="New User"
              name="username"
              type="text"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-900  dark:text-gray-300 pr-10"
            >
              Email:{" "}
            </label>
            <input
              className="form-input rounded-full"
              placeholder="email@test.com"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex-row space-between my-2">
            <label
              htmlFor="password"
              className="mb-2 text-sm font-medium text-gray-900  dark:text-gray-300 pr-3"
            >
              Password:{" "}
            </label>
            <input
              className="form-input rounded-full"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="inline-flex py-2 px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-green-100 rounded-full shadow"
          >
            Submit
          </button>
        </form>
      </div>

      {error && <div className="text-red-700">Sign up failed</div>}
    </div>
  );
};

export default Signup;
