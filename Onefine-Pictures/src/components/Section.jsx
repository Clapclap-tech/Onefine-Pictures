const Section = ({ children, className = "" }) => {
  return (
    <section className={`px-6 md:px-12 ${className}`}>
      {children}
    </section>
  );
};
  
export default Section;
