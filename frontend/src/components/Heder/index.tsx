import { Text } from "@radix-ui/themes";
import { FaBars, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="text-blue-950 bg-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <FaBars className="text-2xl cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2 text-blue-950 font-medium cursor-pointer">
          <FaSignOutAlt size={24} />
          <Text size={"4"}>Logout</Text>
        </div>
      </div>
    </header>
  );
};

export default Header;
