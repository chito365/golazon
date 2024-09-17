import { render } from "@testing-library/react";
import DropDown from "./DropDown";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders without crashing", () => {
  const { getByTestId } = render(<DropDown link={["data"]} />);
  const dropdown = getByTestId("dropdown");
  expect(dropdown).toBeTruthy();
});
