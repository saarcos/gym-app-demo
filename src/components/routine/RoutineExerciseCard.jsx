import { Dumbbell } from 'lucide-react';
import { exercises } from '../../utils/exercises_progressions'
import TrainingTable from './TrainingTable';

const RoutineExerciseCard = ({ exercise, trainingSessionId, exerciseId }) => {

    const exerciseDb = exercises.find((e) => e.id === exercise.exercise_id);
    if (!exerciseDb) {
        return (
            <div className="p-4 rounded-xl bg-red-900 border border-red-500 text-red-100">
                Exercise not found (id: {exercise.exercise_id})
            </div>
        );
    }
    return (
        <div className='p-4 rounded-xl flex flex-col gap-3 bg-slate-950 border border-cyan-400 shadow-[0_0_20px_#22d3ee44] transition duration-300'>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:flex-wrap">
                <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">0{exercise?.order}</h4>
                <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center text-slate-100">{(exerciseDb.name).replaceAll('_', ' ')}</h2>
                <p className="text-sm text-sky-300 capitalize">{exerciseDb.type}</p>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-cyan-300 text-sm drop-shadow-[0_0_4px_#22d3ee] flex gap-1 items-center"><Dumbbell className="w-5 h-5" /> Muscle groups </h3>
                <p className="capitalize text-white">{exerciseDb.muscles.join(', ')}</p>
            </div>
            <TrainingTable trainingSessionId = {trainingSessionId} exerciseId = {exerciseId}/>
        </div>
    )
}

export default RoutineExerciseCard