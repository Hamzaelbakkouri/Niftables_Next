import "./globals.css";
import "../styles/font.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi-bold">{children}</body>
    </html>
  );
}
