export default function Navbar() {
    return (
        <nav className="flex items-center mt-11.75  h-25.25 pl-16 pr-13 bg-white/5 rounded-[110px] py-6 text-white w-max mx-auto">
            {/* Logo*/}
            <div className="text-[32px] font-bold tracking-wide cursor-pointer">
                SOLVE.
            </div>
            {/* Navigation links */}
            <ul className="flex items-center gap-19 text-[22px] ml-88">
                <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Home</li>
                <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Services</li>
                <li className="text-white/75 cursor-pointer hover:text-white transition-colors">Achievement</li>
                <li className="text-white/75 cursor-pointer hover:text-white transition-colors">About Us</li>
            </ul>

        <div className="flex items-center space-x-6 ml-46">
        <button className="px-8 py-4 text-lg font-medium text-white bg-white/10 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
          Sign Up
        </button>
        <button className="px-8 py-4 text-lg font-medium text-white bg-brand rounded-full hover:bg-violet-700 transition-colors shadow-[0_0_15px_rgba(124,58,237,0.5)] cursor-pointer">
          Log In
        </button>
        </div>
        </nav>
    );
}