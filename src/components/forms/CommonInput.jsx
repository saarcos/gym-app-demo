
const CommonInput = ({ id, label, autocomplete, error, ...rest }) => {
    return (
        <div className="flex flex-col gap-2 mb-2">
            <label htmlFor={id} className="text-cyan-200">{label}</label>
            <input
                autoComplete={autocomplete}
                className="bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 rounded-lg p-3 text-white placeholder:text-slate-500"
                {...rest}
            />
            {error && <span className="text-red-400 text-xs">{error}</span>}

        </div>

    )
}

export default CommonInput