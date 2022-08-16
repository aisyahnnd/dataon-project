import { describe, expect } from "vitest";
import SelectBox from "../../Components/Select";
import { fireEvent, render, screen } from "@testing-library/react";
import MatchMediaConfig from "../../Utils/MatchMediaConfig";
MatchMediaConfig();
describe("select box should be render", () => {
  test("should render selectBox event and set value is true", () => {
    render(<SelectBox type="event"></SelectBox>);
    const value = "true";
    const select = screen.getByRole("combobox");
    fireEvent.select(select, {
      target: { value },
    });
    expect(select).toHaveProperty("value", value);
  });
  test("should render selectBox status and set value is false", () => {
    render(<SelectBox type="status"></SelectBox>);
    const value = "false";
    const select = screen.getByRole("combobox");
    fireEvent.select(select, {
      target: { value },
    });
    expect(select).toHaveProperty("value", value);
  });
});
