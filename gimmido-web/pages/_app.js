import SideBar from "@/components/side-bar";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import LoginPage from "./login";
import SignupPage from "./signup";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Gimmido Web Application</title>
      </Head>
      {router.pathname === "/login" ? (
        <LoginPage />
      ) : router.pathname === "/signup" ? (
        <SignupPage />
      ) : ( 
        <SideBar>
          <Component {...pageProps} />
        </SideBar>
      )}
    </>
  );
}
