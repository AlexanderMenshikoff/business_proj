const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-[55vw] flex-wrap justify-center">{children}</div>
  );
};

export default Template;
