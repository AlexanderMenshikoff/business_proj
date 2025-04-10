const Template = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
        <div className="flex w-[70vw]">{children}</div>
    )
}

export default Template