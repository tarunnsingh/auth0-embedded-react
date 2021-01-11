import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders home page text", () => {
  render(<Home />);
  const this_is = screen.getByText(/this is/i);
  const anim_text = screen.getByText(/just like this./i);
  expect(this_is).toBeInTheDocument();
  expect(anim_text).toBeInTheDocument();
});
