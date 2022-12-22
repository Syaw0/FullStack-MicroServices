import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-environment-jsdom";
import getTodo from "../util/getTodo";
import postTodo from "../util/postTodo";

jest.mock("../util/getTodo.ts");
jest.mock("../util/postTodo.ts");

const get = getTodo as jest.Mock;
const post = postTodo as jest.Mock;

it("app render correctly", () => {
  render(<App />);
  expect(screen.getByTestId("holder")).toBeInTheDocument();
});
