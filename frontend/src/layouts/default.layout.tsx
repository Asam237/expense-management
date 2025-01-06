interface DefaultLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DefaultLayout = ({
  children,
  className,
  ...props
}: DefaultLayoutProps) => {
  return (
    <>
      <main className={className} {...props}>
        {children}
      </main>
    </>
  );
};
