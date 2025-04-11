const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-[70vw] flex-wrap justify-center">{children}</div>
  );
};

export default Template;
