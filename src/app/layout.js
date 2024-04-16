import "./globals.css";
import Img from "../ui/image";
export const metadata = {
  title: "ABOU-Game",
  description: "game of guess",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white" ><div className="absolute inset-0 ">{children}</div></body>
    </html>
  );
}
