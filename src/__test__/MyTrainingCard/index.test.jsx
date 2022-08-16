import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MyTrainingCard } from "@/Parts";
import { ContextWrapper } from "@/Context";
import userEvent from "@testing-library/user-event";

it("Renders my training card correctly", () => {
  const { queryByTestId } = render(
    <ContextWrapper>
      <MyTrainingCard />
    </ContextWrapper>
  );
  expect(queryByTestId("site-card-wrapper")).toBeTruthy();
  expect(queryByTestId("badge-mytraining")).toBeTruthy();
  expect(queryByTestId("carousel")).toBeDefined();
});

describe("MyTrainingCard test", () => {
  it("Should display carousel", () => {
    const { queryByTestId } = render(
      <ContextWrapper>
        <MyTrainingCard />
      </ContextWrapper>
    );

    userEvent.click(queryByTestId("carousel"));
    expect(queryByTestId("site-card-wrapper")).toBeDefined();
  });
});
