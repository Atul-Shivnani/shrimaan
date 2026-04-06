import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export async function GET() {
  const logoData = await readFile(join(process.cwd(), "public", "Only logo- without bg.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c4a6e",
          gap: "28px",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <img
          src={logoSrc}
          width="180"
          height="180"
          style={{ objectFit: "contain" }}
        />

        {/* Company name */}
        <div
          style={{
            color: "white",
            fontSize: "72px",
            fontWeight: "800",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          Shrimaan Uniforms
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#bae6fd",
            fontSize: "30px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Premium Corporate Uniforms · Vadodara, Gujarat
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            color: "#7dd3fc",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Authorized Mafatlal &amp; Raymond Distributor
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
