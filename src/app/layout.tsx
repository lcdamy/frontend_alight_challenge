"use client";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider/AuthProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
            <div>
              {children}
            </div>
        </AuthProvider>
      </body>
    </html>
  );
}