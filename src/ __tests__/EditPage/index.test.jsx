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
    expect(form).toBeDefined;
  });
});
