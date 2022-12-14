import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-lalezar">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
