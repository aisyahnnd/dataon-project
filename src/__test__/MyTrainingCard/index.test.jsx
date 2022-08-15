import React from "react";
import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MyTrainingCard } from "@/Parts";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("MyTrainingCard test", () => {
  test("Carousel", () => {
    beforeEach(() => {
      render(
        <Router>
          <MyTrainingCard />
        </Router>
      );
    });

    userEvent.click(screen.queryByTestId("carousel"));
    expect(screen.queryByTestId("site-card-wrapper")).toBeDefined();
  });
});
