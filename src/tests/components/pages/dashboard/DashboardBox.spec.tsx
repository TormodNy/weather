import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import DashboardBox from "../../../../components/pages/dashboard/DashboardBox";

describe("DashboardBox", () => {
    test("should render", () => {
        render(<DashboardBox>Hello world!</DashboardBox>);
        expect(screen.getByText("Hello world!")).toBeDefined();
    });
});
