import { useEffect } from "react";
import { useRouter } from "next/router";
import { DefaultLayout } from "@/layouts/default.layout";

const Home = () => {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/login");
  // }, [router]);

  return <DefaultLayout></DefaultLayout>;
};

export default Home;
