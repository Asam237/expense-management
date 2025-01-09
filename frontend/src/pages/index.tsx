import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div
      className="flex bg-cover bg-center items-center justify-center relative h-screen w-screen"
      style={{
        backgroundImage: "url(./pictures/login.webp)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="flex flex-col">
        <h3 className="text-white text-2xl lg:text-4xl xl:text-6xl z-10 font-bold text-center xl:w-9/12 mx-auto ">
          Welcome to Expense Management
        </h3>
        <p className="text-gray-100 z-10 text-center leading-6 xl:leading-7 mt-4 text-xs md:text-lg xl:w-[45vw] mx-auto xl:mt-6">
          Simplify your finances effortlessly! Connect to manage your expenses,
          track spending, and set budgets with ease. Gain valuable insights into
          your habits and make smarter financial decisions. Stay organized and
          take control of your financial future today—achieving your goals has
          never been simpler!
        </p>
        <button
          className="w-1/2 lg:w-56 mx-auto text-lg py-2 xl:py-4 mt-8 cursor-pointer bg-white text-black rounded-lg hover:bg-gray-300 hover:text-black hover:border-gray-800 transition duration-300 z-10 font-medium"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
      <footer className="absolute bottom-10 left-0 right-0 text-white text-center text-base">
        Powered by Abba Sali
      </footer>
    </div>
  );
};

export default Home;
