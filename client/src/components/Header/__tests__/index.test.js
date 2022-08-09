import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../";

afterEach(cleanup);

describe("Header component", () => {
   // Renders
   it("renders", () => {
      render(<Header />);
   });

   // Matches Snapshot
   it("matches snapshot", () => {
      const { asFragment } = render(<Header />);
      expect(asFragment()).toMatchSnapshot();
   })
});
