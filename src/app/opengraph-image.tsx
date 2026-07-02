// Dynamically generated Open Graph preview image (1200x630) for link shares (LinkedIn, etc.)

import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/content";

export const runtime = "edge";
export const alt = "Anuj Mittal — Senior Analytics Professional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at 12% 15%, rgba(99,102,241,0.35), transparent 42%), radial-gradient(circle at 88% 85%, rgba(139,92,246,0.3), transparent 42%)",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: 28,
          }}
        >
          Digital Twin — AI Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 22,
          }}
        >
          {personalInfo.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 500,
            color: "#c7d2fe",
            marginBottom: 36,
          }}
        >
          {personalInfo.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 27,
            color: "#94a3b8",
            maxWidth: 920,
          }}
        >
          {personalInfo.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
