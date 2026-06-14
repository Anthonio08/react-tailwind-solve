import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        
        <nav className="relative flex items-center justify-between mt-6 lg:mt-11 h-20 lg:h-25 px-6 lg:pl-12 lg:pr-4  bg-white/5 backdrop-blur-md rounded-full lg:rounded-[110px] py-4 lg:py-6 text-white w-[95%] max-w-360 mx-auto transition-all">
            {/* Brand Logo*/}
            <div className="text-[clamp(24px,2.5vw,30px)] font-bold tracking-wide cursor-pointer  ">
                SOLVE.
            </div>

            {/* Mobile Menu Toggle Button (Visible only on small screens) */}
            <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block lg:hidden text-white cursor-pointer hover:text-gray-300"
            >
                {isOpen ? (            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                )}
            </button>

            {/* Navigation links */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
                <ul className="flex items-center gap-8 xl:gap-16 text-[clamp(16px,1.2vw,16px)]">
                    <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Home</li>
                    <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Services</li>
                    <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Achievement</li>
                    <li className="text-white/75 cursor-pointer hover:text-white transition-colors">About Us</li>
                </ul>
            </div>
  
            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 xl:">
                <button className="px-6 xl:px-8 py-3 text-[clamp(14px,1vw,15px)] font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer ">
                    Sign Up
                </button>
                <button className="px-6 xl:px-8 py-3 text-[clamp(14px,1vw,15px)] font-medium text-white bg-brand rounded-full hover:bg-brand/80 transition-colors shadow-[0_0_15px_rgba(95,0,255,0.5)] cursor-pointer">
                    Log In
                </button>
            </div>

            {/* 4. Mobile Dropdown Menu (Visible only when isOpen is true) */}
                <div
                    className={`absolute top-[110%] left-0 w-full bg-white/5 backdrop-blur-md rounded-[30px] p-6 flex flex-col gap-6 lg:hidden border border-white/10 z-40 origin-top transition-all duration-300 ease-in-out ${
                        isOpen
                            ? "opacity-100 scale-y-100 pointer-events-auto"
                            : "opacity-0 scale-y-0 pointer-events-none"
                    }`}
                >
                    <ul className="flex flex-col items-center gap-6 text-[clamp(16px,1.2vw,16px)]">
                        <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Home</li>
                        <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Services</li>
                        <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Achievement</li>
                        <li className="text-white/75 cursor-pointer hover:text-white transition-colors">About Us</li>
                    </ul>
                    
                    <div className="flex flex-col gap-4 mt-2">
                        <button className="w-full py-3 text-[clamp(14px,1vw,15px)] font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                            Sign Up
                        </button>
                        <button className="w-full py-3 text-[clamp(14px,1vw,15px)] font-medium text-white bg-brand rounded-full hover:bg-brand/80 transition-colors shadow-[0_0_15px_rgba(95,0,255,0.5)] cursor-pointer">
                            Log In
                        </button>
                    </div>
                </div>
        </nav>
    );
}