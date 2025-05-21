import { Search } from "lucide-react"
import Exercise from "../Exercise"

const Step1SelectExercises = ({searchTerm, setSearchTerm, filteredExercises, addExercise, routineExercises, handleGoToStep2}) => {
    
    return (
        <>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 drop-shadow-[0_0_6px_#22d3ee] text-center">
                Select the exercises
            </h2>
            <div className="mt-4 relative">
                <div className="flex items-center bg-slate-950 rounded-md border border-cyan-600 shadow-[inset_0_0_10px_#22d3ee22]">
                    <input
                        value={searchTerm}
                        onChange={(event)=>setSearchTerm(event.target.value)}
                        type="text"
                        placeholder="Search for an exercise"
                        className="w-full pl-10 pr-3 py-2 rounded-md bg-slate-900 text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                    <Search className="absolute left-3 text-cyan-400 w-5 h-5 pointer-events-none drop-shadow-[0_0_3px_#22d3ee]" />
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-5 p-2">
                {filteredExercises.length > 0 ? filteredExercises.map((exercise) => (
                    <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        onClick={() => addExercise(exercise)}
                        isAdded={routineExercises.some(e => e.id === exercise.id)}
                    />
                )) : (
                    <div className="mt-1 p-2 bg-slate-900 rounded-lg shadow-[0_0_6px_#0f172b]">
                        <h1 className="text-center font-bold text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">No results found</h1>
                    </div>
                )}
            </div>

            {routineExercises.length > 0 && (
                <div className="sticky bottom-0 left-0 right-0 flex justify-center pt-4 z-10">
                    <button
                        onClick={handleGoToStep2}
                        className="bg-cyan-600/90 hover:bg-cyan-500 text-cyan-100 font-extrabold text-md px-4 py-3 rounded-md drop-shadow-[0_0_4px_#22d3ee] hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-200 cursor-pointer"
                    >
                        Continue ({routineExercises.length}) exercise{routineExercises.length > 1 ? 's' : ''}
                    </button>
                </div>
            )}
        </>
    )
}

export default Step1SelectExercises