import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { AllTrainingEventTable, MyTrainingEventTable } from "@/Parts";
import MatchMediaConfig from "../../Utils/MatchMediaConfig";
import TableData from "@/Components/TableData";
import LabelSection from "@/Components/LabelSection";
MatchMediaConfig();

describe("should be run all training event", () => {
  test("shoul be can render all event table", () => {
    render(<AllTrainingEventTable></AllTrainingEventTable>);
  });
  test("should be can render my event table", () => {
    render(<MyTrainingEventTable></MyTrainingEventTable>);
  });
  test("shoul be can render table antd", () => {
    render(<TableData></TableData>);
    const table = screen.getByTestId("table");
    expect(table).toHaveProperty("style");
    expect(table).toHaveProperty("className");
    expect(table).toHaveProperty("children");
    expect(table).toBeDefined;
  });
  test("should be can render label section", () => {
    render(<LabelSection></LabelSection>);
    const label = screen.getByTestId("label");
    expect(label).toBeDefined;
  });
});
