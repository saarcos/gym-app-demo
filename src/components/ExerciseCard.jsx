import {  Check, Dumbbell, Plus } from "lucide-react";
import { useState } from "react"

const ExerciseCard = ({ exercise, index }) => {
    const [setsCompleted, setSetsCompleted] = useState(0);
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="p-4 rounded-xl flex flex-col gap-5 bg-slate-950 border border-cyan-400 shadow-[0_0_20px_#22d3ee44] transition duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:flex-wrap">
                <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">0{index + 1}</h4>
                <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center text-slate-100">{(exercise.name).replaceAll('_', ' ')}</h2>
                <p className="text-sm text-sky-300 capitalize">{exercise.type}</p>
            </div>

            <div className="flex flex-col">
                <h3 className="text-cyan-300 text-sm drop-shadow-[0_0_4px_#22d3ee] flex gap-1 items-center"><Dumbbell className="w-5 h-5"/> Muscle groups </h3>
                <p className="capitalize text-white">{exercise.muscles.join(' & ')}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
                {['reps', 'rest', 'tempo'].map((info) => (
                    <div key={info} className="flex flex-col gap-1 p-2 rounded-lg border border-slate-800 bg-slate-900 text-white shadow-inner w-full">
                        <h3 className="capitalize text-cyan-300 text-sm">{info === 'reps' ? `${exercise.unit}` : info}</h3>
                        <p className="font-semibold text-slate-100">{exercise[info]}</p>
                    </div>
                ))}

                <button
                    onClick={() => {
                        setSetsCompleted(prev => (prev + 1) % 6)
                    }}
                    className="flex flex-col p-2 rounded-lg border border-cyan-400 text-white shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_14px_#22d3ee] transition w-full cursor-pointer">
                    <h3 className="text-cyan-300 capitalize text-sm">Sets completed</h3>
                    <p className="font-medium">{setsCompleted}/5</p>
                </button>
            </div>

            <div className="flex flex-col bg-slate-900 border border-slate-800 rounded p-2 gap-2 shadow-inner">
                <button
                    className="flex justify-between items-center gap-2 p-1 cursor-pointer hover:text-cyan-300 transition"
                    onClick={() => setShowModal(!showModal)}
                >
                    <p className="font-medium">Description</p>
                    <Plus className="w-4 h-4 text-cyan-400" />
                </button>

                {showModal && (
                    <>
                        <div className="h-[1px] bg-cyan-300 drop-shadow-[0_0_4px_#22d3ee]" />
                        <ul className="flex flex-col gap-2 text-white">
                            {exercise.description.split('___').map((val) => (
                                <li key={val} className="text-sm flex gap-2 items-start">
                                    <span className="text-cyan-400 drop-shadow-[0_0_5px_#22d3ee]"><Check className="w-5 h-5"/></span>
                                    {val}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>

    )
}

export default ExerciseCard