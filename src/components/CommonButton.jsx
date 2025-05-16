const CommonButton = ({ btnText, func }) => {
    return (
        <button onClick={func}
            className="mx-auto px-8 py-4 rounded-2xl border-3 border-cyan-400 bg-slate-950 text-[#e0f2fe]
            font-semibold shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_20px_#22d3ee] 
            transition duration-200 text-lg
            hover:translate-0.5 cursor-pointer"
        >
            <p className="font-semibold">{btnText}</p>
        </button>
    )
}

export default CommonButton