import "./globals.css";
export const metadata = {
  title: "ABOU-Game",
  description: "game of guess",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head ><script src="https://cdn.lordicon.com/lordicon.js"/></head>
      <body className="bg-white" ><div className="absolute inset-0 ">{children}</div></body>
    </html>
  );
}
