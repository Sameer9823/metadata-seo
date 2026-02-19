import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "Chai aur Code";
  const description =
    searchParams.get("description") ||
    "Chai aur Code is a blog about chai and code";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          color: "black",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: "normal",
            maxWidth: "900px",
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
