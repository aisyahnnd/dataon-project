import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { TrainingEditPage } from "@/Pages/TrainingEditPage/TrainingEditPage";
import MatchMediaConfig from "../../Utils/MatchMediaConfig";
import { BrowserRouter as Router } from "react-router-dom";
MatchMediaConfig();
import { ContextWrapper } from "@/Context";
describe("should be run edit page", () => {
  test("will be render", () => {
    render(
      <ContextWrapper>
        <Router>
          <TrainingEditPage />
        </Router>
      </ContextWrapper>
    );
    const form = screen.getByTestId("form");
    const isOnlineClass = screen.getByTestId("isOnlineClass");
    const date = screen.getByTestId("date");
    const status = screen.getByTestId("status");
    const trainer = screen.getByTestId("trainer");
    const additionalInfo = screen.getByTestId("additionalInfo");
    expect(form).toBeDefined;
    expect(isOnlineClass).toBeDefined;
    expect(date).toBeDefined;
    expect(status).toBeDefined;
    expect(trainer).toBeDefined;
    expect(additionalInfo).toBeDefined;
    const response = fireEvent.click(screen.getByTestId("button"));
    expect(response).toBeTruthy();
  });
});
