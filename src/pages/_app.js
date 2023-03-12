/* Style */
import { Roboto } from "next/font/google";
import ResetStyle from "@/styles/reset";
import GlobalStyle from "@/styles/global";
import { Layout } from "@/components";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
