import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartItem from "../";

afterEach(cleanup);

describe("CartItem component", () => {
   // Renders
   it("renders", () => {
      render(<CartItem />);
   });
});
