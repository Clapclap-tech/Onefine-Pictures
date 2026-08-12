const FeedbackSection = () => {
    return (
        <section className="flex w-full h-full bg-white overflow-hidden mt-[-5rem] py-50 px-40">
            <div className="w-full">

                <img src='/Test.svg' alt="Feedbacks Section" className="w-15 h-auto relative h-auto translate-x-[-60px] translate-y-[10px]" />   
                
                <p className="text-black text-6xl text-left tracking-wider font-noto-serif-kr font-normal">
                    We care about your <br /> <span className="font-extrabold ">experiences</span>
                </p> 

                <p className="text-black text-lg text-left mt-16 font-outfit font-normal tracking-widest">
                    OneF1ne has helped students <br /> across universities and industries
                    <br /> capture their memories through
                </p>
            </div>
        </section>
    );
};

export default FeedbackSection;
