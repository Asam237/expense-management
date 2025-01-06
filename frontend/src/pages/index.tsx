import { useEffect } from "react";
import { useRouter } from "next/router";
import { DefaultLayout } from "@/layouts/default.layout";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <DefaultLayout>
      <div className="container mx-auto p-4"></div>
    </DefaultLayout>
  );
};

export default Home;
