// import crossBG from "./cross.jpg";

function Hero() {
    return (
        <div
            className={
                "flex items-center justify-center h-screen bg-heroBG bg-cover bg-center w-full"
            }
        >
            <div className="flex items-center justify-center h-screen bg-black/60 w-full">
                <h1 className="font-bold text-8xl text-slate-300 absolute">
                    THE LEFT BEHIND
                </h1>
            </div>
        </div>
    );
}

export default Hero;
