import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { getRoutineById } from "../services/routineService";
import { Cog } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import RoutineExerciseCard from "../components/routine/RoutineExerciseCard";
const Training = () => {
    const { routineId, trainingSessionId } = useParams();
    const { data: routine, isLoading, error } = useQuery({
        queryKey: ['routine', routineId],
        queryFn: () => getRoutineById(routineId),
        enabled: !!routineId
    });
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-muted-foreground bg-gradient-to-r from-black via-slate-900 to-blue-600">
                <Cog className="w-20 h-20 animate-spin opacity-50 mb-2 text-white" />
                <p className="text-sm text-white">Cargando...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-muted-foreground bg-gradient-to-r from-black via-slate-900 to-blue-600">
                <Cog className="w-20 h-20 animate-spin opacity-50 mb-2 text-white" />
                <p className="text-sm text-white">Error while loading the routines...</p>
            </div>
        );
    }
    return (
        <SectionWrapper id="training" header={`${routine.name} – Let’s Train!`}title={['Push', 'Your', 'Limits']}>
            <div className="flex flex-col gap-8">
                {routine && routine.exercises.length > 0 ? routine.exercises.map((exercise) => {
                    return (
                        <RoutineExerciseCard key={exercise.exercise_id} exercise={exercise} trainingSessionId={trainingSessionId} exerciseId = {exercise.id}/>
                    )
                }) : <h1>Error loading the routine</h1>}
            </div>
        </SectionWrapper >
    )
}

export default Training