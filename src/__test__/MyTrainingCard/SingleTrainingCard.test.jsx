import { describe, test, expect, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SingleTrainingCard test", () => {
  test("Button feedback clicked", () => {
    userEvent.click(screen.queryByTestId("btn-feedback"));
    expect(screen.queryByTestId("modal")).toBeDefined();
  });
  test("Button location clicked", async () => {
    userEvent.click(screen.queryByTestId("btn-location"));
    expect(screen.queryByTestId("card")).toBeDefined();
  });
  test("My training card clicked", async () => {
    userEvent.click(screen.queryByTestId("mytraining-card"));
    expect(screen.queryByTestId("card")).toBeDefined();
  });
});
