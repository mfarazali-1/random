import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button, ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { PostCard } from "@/features/blog/components/post-card";

describe("Button", () => {
  it("renders a button element with its label", () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
});

describe("ButtonLink", () => {
  it("renders an anchor pointing at href", () => {
    render(<ButtonLink href="/hire-talent">Hire</ButtonLink>);
    expect(screen.getByRole("link", { name: "Hire" })).toHaveAttribute(
      "href",
      "/hire-talent",
    );
  });
});

describe("SectionHeading", () => {
  it("renders the title as an h1 when as='h1'", () => {
    render(<SectionHeading as="h1" eyebrow="Eyebrow" title="Hello World" />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Hello World" }),
    ).toBeInTheDocument();
  });
});

describe("PostCard", () => {
  it("links to the post and shows its title", () => {
    render(
      <PostCard
        slug="my-post"
        meta={{
          title: "My Post",
          description: "Description",
          pillar: "it",
          keywords: [],
          date: "2026-01-01",
          readingTime: "2 min read",
        }}
      />,
    );
    expect(screen.getByRole("link", { name: /My Post/ })).toHaveAttribute(
      "href",
      "/blog/my-post",
    );
  });
});
