import { ImageResponse } from "next/og";

export const alt = "AJ — Civil Engineering and HSE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#091820", color: "#f1f0ea", padding: "70px", position: "relative", fontFamily: "sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.16, backgroundImage: "linear-gradient(#7a96a2 1px,transparent 1px),linear-gradient(90deg,#7a96a2 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23, letterSpacing: 5, textTransform: "uppercase" }}><span>Civil Engineering</span><span style={{ color: "#f2b843" }}>HSE / 2026</span></div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 190, fontWeight: 800, lineHeight: 0.75, letterSpacing: -10 }}>AJ</span><span style={{ marginTop: 42, fontSize: 46, textTransform: "uppercase", letterSpacing: 8 }}>Ali Jan</span></div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", fontSize: 25, lineHeight: 1.55 }}><span>Construction</span><span>Safety</span><span>Project execution</span></div>
        </div>
      </div>
    </div>, size,
  );
}
