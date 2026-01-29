const Section = ({ children, className = "", fullScreen = false }) => {
  return (
    <section className={`px-6 md:px-12
        ${fullScreen ? "min-h-screen flex items-center" : "py-20"}
        ${className}
    `}>
      {children}
    </section>
  );
};

export default Section;
