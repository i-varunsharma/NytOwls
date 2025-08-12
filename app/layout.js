import LandingPage from "./Landingpage/page";
import "./globals.css";  // sirf import karna hai
import Home from "./page";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Home />
        <landingpage/>
      </body>
    </html>
  );
}
