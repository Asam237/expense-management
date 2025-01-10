import { Text } from "@radix-ui/themes";
import Link from "next/link";
import {
  FaMoneyBillWave,
  FaListAlt,
  FaChartBar,
  FaWallet,
} from "react-icons/fa";

type NavsProp = {
  name: string;
  path: string;
};

const navs: NavsProp[] = [
  {
    path: "#",
    name: "Expenses",
  },
  {
    path: "#",
    name: "Categories",
  },
  {
    path: "#",
    name: "Reports",
  },
];

const Aside = () => {
  return (
    <aside className="w-full md:w-72 h-screen bg-slate-800 text-white shadow-lg">
      <div className="bg-slate-950 p-6 flex items-center justify-center">
        <FaWallet className="text-3xl mr-3" />
        <Text size={"3"} className="font-bold">
          Expense Management
        </Text>
      </div>
      <hr className="border-gray-600" />
      <div className="mt-4 p-6">
        {navs.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex items-center py-3 px-4 rounded transition duration-200 hover:bg-gray-950 hover:shadow-lg"
          >
            {index === 0 && <FaMoneyBillWave className="mr-3" />}
            {index === 1 && <FaListAlt className="mr-3" />}
            {index === 2 && <FaChartBar className="mr-3" />}
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
