import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Providers from "./providers";

import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // smsPOSTBOX
  title: "📮 SMSInbox: Allow your business go international.",
  description:
    "Receive SMS from anywhere in the world: Reserve Phone Numbers in 20+ Countries, Including US 🇺🇸, UK 🇬🇧, and EU 🇪🇺. Receive SMS/OTP with a simple flat monthly fee.",
};

const googleID = process.env.GOOGLE_TAG;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <main className="flex min-h-screen flex-col items-center justify-center p-1 font-mono bg-gray-300 background-pattern">
            <div className="">
              <div className="container">
                <div className="row">{children}</div>
              </div>
            </div>
          </main>
        </body>
      </Providers>
      <Script
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=" + googleID}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </html>
  );
}
