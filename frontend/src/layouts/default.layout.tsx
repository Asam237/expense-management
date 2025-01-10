import Aside from "@/components/Aside";
import Header from "@/components/Heder";

interface DefaultLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-row ${className}`} {...props}>
      <Aside />
      <main className="w-full">
        <header className="w-full">
          <Header />
          <hr />
        </header>
        {children}
      </main>
    </div>
  );
};
