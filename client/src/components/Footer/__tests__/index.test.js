import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../";

afterEach(cleanup);

describe("Footer component", () => {
   // Renders
   it("renders", () => {
      render(<Footer />);
   });

   // Matches Snapshot
   it("matches snapshot", () => {
      const { asFragment } = render(<Footer />);
      expect(asFragment()).toMatchSnapshot();
   });
});
