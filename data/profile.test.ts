import { describe, expect, it } from "vitest";
import { education, experiences, highlights, profile } from "./profile";

describe("public portfolio data", () => {
  it("keeps the approved public contact channels", () => {
    expect(profile.email).toBe("alijan.official6@gmail.com");
    expect(profile.linkedin).toContain("ali-jan-034a51309");
    expect(profile).not.toHaveProperty("phone");
    expect(profile).not.toHaveProperty("address");
  });

  it("publishes the completed 2026 QatarEnergy HSE role as listed", () => {
    expect(experiences[0]).toMatchObject({
      company: "QatarEnergy",
      role: "Health Safety Environment Supervisor",
      period: "April 2026 — June 2026",
      location: "Qatar",
    });
  });

  it("uses evidence-led highlights instead of invented projects", () => {
    expect(highlights).toHaveLength(4);
    expect(highlights.every((item) => item.context.length > 0 && item.description.length > 0)).toBe(true);
  });

  it("retains all sourced education and development entries", () => {
    expect(education).toHaveLength(4);
    expect(education.map((entry) => entry.title)).toEqual(expect.arrayContaining([
      "Bachelor of Engineering, Civil Engineering",
      "Occupational Safety and Health Technology / Technician (NEBOSH)",
    ]));
  });
});
