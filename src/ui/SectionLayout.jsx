function SectionLayout({ children, bg }) {
  return (
    <div className={`w-full ${bg ? bg : "bg-white"}`}>
      <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto py-8">
        {children}
      </div>
    </div>
  );
}

export default SectionLayout;
