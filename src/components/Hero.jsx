import CommonButton from "./CommonButton"

const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col items-center gap-10 justify-center text-center max-w-[900px] w-full mx-auto p-3">
            <div className="flex flex-col gap-8">
                <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="text-cyan-300 drop-shadow-[0_0_15px_#22d3ee]">Transform your body</span>{" "}
                    <span className="text-[#e0f2fe] drop-shadow-[0_0_15px_#e0f2fe]">Break your limits</span>
                </h1>
                <p className="text-base md:text-lg font-light text-slate-200">The app that keeps you on track—plan workouts, monitor your progress, and stay motivated every step of the way.</p>
            </div>
            <CommonButton func={() => { window.location.href = '#generate' }} btnText={"Get Started"} />
        </div>
    )
}

export default Hero