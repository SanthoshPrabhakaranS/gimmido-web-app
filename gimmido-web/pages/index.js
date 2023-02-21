import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginPage from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const reDirect = () => {
    router.push("/login");
  };

  useEffect(() => {
    reDirect();
  }, []);

  return <LoginPage />;
}
