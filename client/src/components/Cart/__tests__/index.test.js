import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cart from "../";

afterEach(cleanup);

describe("Cart component", () => {
   // Renders
   it("renders", () => {
      render(<Cart />);
   });
});
