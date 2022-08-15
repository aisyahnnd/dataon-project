import ButtonIcon from "../../Components/ButtonIcon";
import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
describe("should be run button", () => {
  test("will be render", () => {
    const type = "button";
    render(<ButtonIcon></ButtonIcon>);
    const button = screen.getByRole("button");
    expect(button).toHaveProperty("type", type);
  });
});
