import "./globals.css";
export const metadata = {
  title: "رعاة",
  description: "منصة رعاة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white" ><div className="absolute inset-0 ">{children}</div></body>
    </html>
  );
}

