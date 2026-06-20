
export default function Hero() {

    return (
        <section className="flex flex-col items-center justify-center text-center gap-6 lg:gap-5 mt-12 lg:mt-52  px-6">
        <div>
            <span className=" text-[16px]  lg:tracking-[4px] text-white">Welcome to Solve.</span>
        </div>
        <div>
            <h1 className="text-[clamp(30px,5vw,50px)] font-bold tracking-wide leading-[1.2]">
                Manage Your Task<br />
                    Efficiently
            </h1>
        </div>
        <p className= "text-[clamp(14px,1.1vw,15px)] text-white">
            Solve Your Project Management Problems<br />
                    For Your Satisfaction
        </p>
        {/* <div>
           <span className="flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                <img src="/Mouse.svg" alt="Mouse" className="w-9 h-9" />
            </span> 
        </div> */}
        <div className="mt-8 flex flex-col items-center gap-2 cursor-pointer">
                {/* The Mouse Body */}
                <div className="w-7 h-11 border-2 border-white/30 rounded-[20px] flex justify-center pt-2">
                    {/* The Scrolling Wheel (Animated) */}
                    <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce"></div>
                </div>
            </div>
        <div>
           <span className="flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                <img src="/Arrow.svg" alt="Arrow" className="w-14 h-14" />
            </span> 
        </div>
        
        </section>
    );
}