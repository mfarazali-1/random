import { describe, it, expect } from "vitest";
import { inquirySchema } from "@/lib/validations/inquiry";
import { contactSchema } from "@/lib/validations/contact";

const validInquiry = {
  companyName: "Acme Law Group",
  hiringNeeds: "Two senior litigation associates, U.S. remote.",
  contactName: "Jordan Reeves",
  email: "jordan@acmelaw.com",
  phone: "",
};

describe("inquirySchema", () => {
  it("accepts a complete, valid inquiry", () => {
    expect(inquirySchema.safeParse(validInquiry).success).toBe(true);
  });

  it("rejects hiring needs that are too short", () => {
    const result = inquirySchema.safeParse({
      ...validInquiry,
      hiringNeeds: "x",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    expect(
      inquirySchema.safeParse({ ...validInquiry, email: "not-an-email" })
        .success,
    ).toBe(false);
  });

  it("ignores the honeypot / extra fields", () => {
    expect(
      inquirySchema.safeParse({ ...validInquiry, company_website: "spam" })
        .success,
    ).toBe(true);
  });
});

describe("contactSchema", () => {
  it("requires a reasonably-long message", () => {
    expect(
      contactSchema.safeParse({ name: "Jo", email: "a@b.com", message: "hi" })
        .success,
    ).toBe(false);
    expect(
      contactSchema.safeParse({
        name: "Jo",
        email: "a@b.com",
        message: "Hello, we need help hiring a corporate associate.",
      }).success,
    ).toBe(true);
  });
});
