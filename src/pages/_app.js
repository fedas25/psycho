import "@/styles/globals.css";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="dropdown-root"></div>
    </>
  );
}
