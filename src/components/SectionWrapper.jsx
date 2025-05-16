const SectionWrapper = ({ children, header, title, id }) => {
    return (
        <section id={id} className="min-h-screen flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center bg-slate-950 py-10 p-4 gap-2">
                <p className="uppercase font-extrabold text-md md:text-lg py-2 ">{header}</p>
                <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl '>{title[0]} <span className='uppercase text-cyan-300 drop-shadow-[0_0_15px_#22d3ee]'>
                    {title[1]}
                </span>{" "}{title[2]}</h2>
            </div>
            <div className="max-w-[800px] flex flex-col w-full mx-auto gap-10 p-4">
                {children}

            </div>
        </section>
    )
}

export default SectionWrapper