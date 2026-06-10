import { describe, it, expect } from "vitest";
import { cn, formatDate } from "@/lib/utils";

describe("cn", () => {
  it("dedupes conflicting Tailwind utilities (last wins)", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("drops falsey values", () => {
    expect(cn("text-sm", false && "hidden", "font-bold")).toBe(
      "text-sm font-bold",
    );
  });
});

describe("formatDate", () => {
  it("formats an ISO date as US long form", () => {
    // Noon UTC keeps the calendar day stable across timezones.
    expect(formatDate("2026-05-20T12:00:00Z")).toBe("May 20, 2026");
  });
});
