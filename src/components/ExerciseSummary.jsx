const ExerciseSummary = ({ exercise }) => {
    return (
        <div className="flex items-center gap-4 bg-slate-900 border border-cyan-600 rounded-lg p-3 shadow-md">
            <img
                src={exercise.imageUrl}
                alt={exercise.name}
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full border-2 border-cyan-400 shadow-[0_0_6px_#22d3ee]"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder.png"; // o cualquier imagen por defecto
                }}
            />
            <div className="flex-1">
                <p className="text-cyan-100 text-sm sm:text-base font-medium">{exercise.name}</p>
            </div>
        </div>
    );
};

export default ExerciseSummary;
