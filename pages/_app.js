import dynamic from "next/dynamic";
import "../styles/build/globals.css";
import '../styles/general.css'
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/bootstrap.css";

const Layout = dynamic(
  () => {
    return import("../components/Layouts/Layout");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
