import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../";

afterEach(cleanup);

describe("About component", () => {
   // Renders
   it("renders", () => {
      render(<About />);
   });

   // Matches Snapshot
   it("matches snapshot", ()=> {
      const { asFragment } = render(<About />);
      expect(asFragment()).toMatchSnapshot();
   });
});
