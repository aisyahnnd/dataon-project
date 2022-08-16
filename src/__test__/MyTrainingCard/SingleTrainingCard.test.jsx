import { describe, test, expect, beforeEach } from "vitest";
import { screen, render, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SingleTrainingCard } from "@/Parts/MyTrainingCard/SingleTrainingCard";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ContextWrapper } from "@/Context";
import { MatchMediaConfig } from "@/Utils/MatchMediaConfig";

MatchMediaConfig();

it("Renders my training card correctly", () => {
  const { queryByTestId } = render(
    <Router>
      <SingleTrainingCard />
    </Router>
  );
  expect(queryByTestId("card")).toBeTruthy();
});

describe("SingleTrainingCard test", () => {
  it("Clicking the button give feedback", () => {
    const { queryByTestId } = render(
      <Router>
        <SingleTrainingCard />
      </Router>
    );
    userEvent.click(queryByTestId("btn-feedback"));
    expect(queryByTestId("modal")).toBeDefined();
  });
  it("Clicking the button view location", async () => {
    const { queryByTestId } = render(
      <Router>
        <SingleTrainingCard />
      </Router>
    );
    const button = queryByTestId("btn-location");
    userEvent.click(button);
    expect(button).toBeDefined();
  });
  it("Clicking my training card", async () => {
    const { queryByTestId } = render(
      <Router>
        <SingleTrainingCard />
      </Router>
    );
    const card = queryByTestId("mytraining-card");
    userEvent.click(card);
    expect(card).toBeDefined();
  });
});
