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

   // Matches Snapshot
   it("matches snapshot", () => {
      const { asFragment } = render(<Cart />);
      expect(asFragment()).toMatchSnapshot();
   });
});
