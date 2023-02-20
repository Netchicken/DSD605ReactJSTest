import CityGame, { CheckForWinnerLoser } from "../components/CityGame";
import React, { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import AppHeader from "../components/AppHeader";

describe("AppHeader", () => {
  it("AppHeader component rendered", () => {
    render(<AppHeader />);
  });
});

//https://www.robinwieruch.de/react-testing-library/
//In modern React, developers will not get around Jest for testing, because its the most popular testing framework out there for JavaScript applications. Apart from being a test runner -- which you can run with npm run test once you have set up your package.json with a test script -- Jest offers you the following functions for your tests:

//Whereas the describe-block is the test suite, the it-block (which also can be named test instead of it) is the test case.
describe("true is truthy and false is falsy", () => {
  it("true is truthy", () => {
    expect(true).toBe(true); //assertion
  });

  it("false is falsy", () => {
    expect(false).toBe(false);
  });
});

//https://akoskm.com/how-to-test-props-in-react-testing-library
// describe("Footer", () => {
//   it("renders Footer component", () => {
//     render(<Footer />);
//   });
// });

//https://robertmarshall.dev/blog/react-component-props-passed-to-child-jest-unit-test/
// Set up a Jest mock function to check any props.
const mockFooterComponent = jest.fn();
// Mock the child component file, and grab all props passed to it and pass them to the Jest mock function so it can listen.
jest.mock("../components/Footer", () => (props) => {
  mockFooterComponent(props);
  // Return something for React to render.
  return <mock-FooterComponent />;
});

//Then the test block can be set up to check if the child component is called with the correct props and then an expect is put in place for checking the passed props.
test("Footer is called with prop data", () => {
  render(<CityGame />);

  expect(mockFooterComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      props: {
        Components: "ahu: mound; roa: long",
        Meaning: "Long mound",
        Placename: "Ahuroa",
      },
    })
  );
});

//  1: {"props": {"Components": "Start", "Meaning": "Start", "Placename": "Start"}}
//   2: {"props": {"Components": "ahu: mound; roa: long", "Meaning": "Long mound", "Placename": "Ahuroa"}}

describe("CheckForWinnerLoser", () => {
  it("CheckForWinnerLoser function", () => {
    expect(
     CheckForWinnerLoser({
        yourCity: "Auckland",
        gameCity: "Auckland",
      })
    ).toBe("Winner");
    expect(
      CityGame.CheckForWinnerLoser({
        yourCity: "Auckland",
        gameCity: "Hamilton",
      })
    ).toBe("Loser");
    expect(CityGame.CheckForWinnerLoser({})).toBe("Bzzz");
  });
});

// test("Footer Google Link", () => {
//   render(<Footer />);

//   const linkElement = screen.toHaveTextContent();
//   expect(linkElement).toBeInTheDocument();
// });
