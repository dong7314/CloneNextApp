import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthSession from "@/app/_component/AuthSession";
import { MSWProvider } from "./_component/MSWcomponent";

if (
  process.env.NEXT_RUNTIME === "nodejs" &&
  process.env.NODE_ENV !== "production" &&
  process.env.MSW_ENABLED !== "false"
) {
  const { server } = require("@/mocks/http");
  server.listen();
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z. 무슨 일이 일어나고 있나요? / Z",
  description: "Z.com inspired by X.com",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.MSW_ENABLED !== "false" && (
          <MSWProvider>
            <AuthSession>{children}</AuthSession>
          </MSWProvider>
        )}
        {process.env.MSW_ENABLED === "false" && (
          <AuthSession>{children}</AuthSession>
        )}
      </body>
    </html>
  );
}
