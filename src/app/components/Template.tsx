const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-wrap justify-center sm:w-[100vw] 2xl:w-[55vw] ">{children}</div>
  );
};

export default Template;
