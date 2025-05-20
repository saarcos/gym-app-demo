import { Dumbbell, PlusCircle, Search } from "lucide-react"
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { exercises } from "../utils/exercises_progressions";
import Exercise from "../components/Exercise";

const MyRoutines = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [routineExercises, setRoutineExercises] = useState([]);

    useEffect(()=>{
        console.log(routineExercises)
    },[routineExercises])
    const handleModalState = () => {
        setIsOpen(!isOpen)
    }
    const onChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    }
    const filteredExercises = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const addExercise = (exercise) => {
        setRoutineExercises([...routineExercises, exercise])
    }
    return (
        <>
            <div className="w-full max-w-7xl mx-auto p-5 bg-slate-950 border border-cyan-400 shadow-[0_0_20px_#22d3ee44] rounded-xl flex flex-col gap-6 transition duration-300 min-h-[calc(100vh-6rem)] mt-18">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-extrabold text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">
                            My Routines
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base">
                            View, manage or create your personalized workout routines.
                        </p>
                    </div>
                    <button
                        className="w-fit bg-slate-900 px-4 py-2 rounded-lg flex gap-2 items-center border border-cyan-400 text-cyan-200 shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_14px_#22d3ee] transition cursor-pointer"
                        onClick={handleModalState}>
                        <PlusCircle className="w-5 h-5" />
                        <span className="text-sm sm:text-base">New Routine</span>
                    </button>
                </div>

                <hr className="border-cyan-300 shadow-[0_0_6px_#22d3ee]" />

                {/* Empty state */}
                <div className="flex flex-grow border border-cyan-300 border-dashed rounded-lg items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
                    <div className="relative z-10 text-center flex flex-col gap-6 items-center">
                        <Dumbbell className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" />
                        <h2 className="text-lg sm:text-xl text-white font-semibold drop-shadow-[0_0_4px_#22d3ee]">
                            You have not added any routine yet.
                        </h2>
                        <button
                            className="w-fit bg-slate-900 px-4 py-2 rounded-lg flex gap-2 items-center border border-cyan-400 text-cyan-200 shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_14px_#22d3ee] transition cursor-pointer"
                            onClick={handleModalState}>
                            <PlusCircle className="w-5 h-5" />
                            <span className="text-sm sm:text-base">New Routine</span>
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={handleModalState}>
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400  drop-shadow-[0_0_6px_#22d3ee] text-center">Select the exercises</h2>
                <div className="mt-4 relative">
                    <div className="flex items-center bg-slate-950 rounded-md border border-cyan-600 shadow-[inset_0_0_10px_#22d3ee22]">
                        <input
                            value={searchTerm}
                            onChange={onChangeHandler}
                            type="text"
                            placeholder="Search for an exercise"
                            className="w-full pl-10 pr-3 py-2 rounded-md bg-slate-900 text-cyan-100 placeholder:text-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                        />
                        <Search className="absolute left-3 text-cyan-400 w-5 h-5 pointer-events-none drop-shadow-[0_0_3px_#22d3ee]" />
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-5 p-2">
                    {filteredExercises.length > 0 ? filteredExercises.map((exercise) => (
                        <Exercise key={exercise.id} exercise={exercise} onClick={() => addExercise(exercise)} isAdded={routineExercises.some(e => e.id === exercise.id)} />
                    )) :
                        <div className="mt-1 p-2 bg-slate-900 rounded-lg shadow-[0_0_6px_#0f172b]">
                            <h1 className="text-center font-bold text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">No results found</h1>
                        </div>}
                </div>
                {routineExercises.length > 0 && (
                    <div className="sticky bottom-0 left-0 right-0 flex justify-center pt-4 z-10">
                        <button className="bg-cyan-600/90 hover:bg-cyan-500 text-cyan-100 font-extrabold text-md px-4 py-3 rounded-md drop-shadow-[0_0_4px_#22d3ee] hover:drop-shadow-[0_0_8px_#22d3ee] transition-all duration-200 cursor-pointer">
                            Add ({routineExercises.length}) exercise{routineExercises.length  > 1 ? 's' : ''}
                        </button>
                    </div>)
                }


            </Modal>
        </>

    )
}

export default MyRoutines