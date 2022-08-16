import ButtonIcon from "../../Components/ButtonIcon";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
describe("should be run button", () => {
  test("will be render", () => {
    const type = "button";
    render(<ButtonIcon></ButtonIcon>);
    const button = screen.getByRole("button");
    expect(button).toHaveProperty("type", type);
  });
});
