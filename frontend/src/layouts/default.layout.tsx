import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import Inner, { anim } from "@/components/Curve";

interface DefaultLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const navs: { name: string; path: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const slide = {
  initial: {
    top: "100vh",
  },
  enter: {
    top: "100vh",
  },
  exit: {
    top: "0",
  },
};

export const DefaultLayout = ({
  children,
  className,
  ...props
}: DefaultLayoutProps) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <header className="bg-blue-800 py-4">
          <div className="container mx-auto">
            <div className="flex space-x-4 items-center">
              {navs.map((i) => (
                <Link
                  key={i.path}
                  className="text-white font-normal"
                  href={i.path}
                >
                  {i.name}
                </Link>
              ))}
            </div>
          </div>
        </header>
        <main className={className} {...props}>
          <Inner>{children}</Inner>
        </main>
      </AnimatePresence>
    </>
  );
};
