import { Cog, Dumbbell, PlusCircle, Search } from "lucide-react"
import Modal from "../components/Modal";
import { useContext, useState } from "react";
import { exercises } from "../utils/exercises_progressions";
import Exercise from "../components/Exercise";
import ExerciseSummary from "../components/ExerciseSummary";
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createRoutine, getRoutinesByUserId } from "../services/routineService";
import { RoutineCard } from "../components/routine/RoutineCard";
import Step1SelectExercises from "../components/routine/Step1SelectExercises";
const MyRoutines = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [routineExercises, setRoutineExercises] = useState([]);
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);
    const queryClient = useQueryClient();

    const { data: routines, isLoading, error } = useQuery({
        queryKey: ['routines', user?.id],
        queryFn: () => getRoutinesByUserId(user?.id),
        enabled: !!user?.id,  // Para evitar que corra antes de tener user.id
    });

    const mutation = useMutation({
        mutationFn: createRoutine,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['routines', user?.id] });
        }
    })
    const handleModalState = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setRoutineExercises([]);
            setSearchTerm("");
            setStep(1);
            reset();
        }
    };

    const filteredExercises = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addExercise = (exercise) => {
        const alreadyAdded = routineExercises.some(e => e.id === exercise.id);
        if (alreadyAdded) {
            setRoutineExercises(routineExercises.filter((e) => e.id !== exercise.id));
        } else {
            setRoutineExercises([...routineExercises, exercise]);
        }
    };

    const handleGoToStep2 = () => {
        if (routineExercises.length === 0) return;
        setStep(2);
    };

    const handleSaveRoutine = (data) => {
        const exercises = routineExercises.map((exercise, index) => ({
            exercise_id: exercise.id,
            order: index + 1
        }));
        //Flatmap aplana un nivel de profundidad y map devuelve un array, entonces esto me va a devolver ['chest', 'tricep', 'bicep']
        const muscles = routineExercises.flatMap((exercise) => exercise.muscles || []);
        const musclesTargeted = Array.from(new Set(muscles));

        const payload = {
            userId: user?.id,
            name: data.name,
            muscles: musclesTargeted,
            isTemplate: false,
            exercises
        };

        mutation.mutate(payload);
        handleModalState();
    };
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
                {routines && routines.length > 0 ?
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {routines.map((routine) => (
                            <RoutineCard key={routine.id} routine={routine} user={user} />
                        ))}
                    </div> : (
                        < div className="flex flex-grow border border-cyan-300 border-dashed rounded-lg items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
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
                    )}

            </div >

            <Modal isOpen={isOpen} onClose={handleModalState}>
                {step === 1 && (
                   <Step1SelectExercises searchTerm={searchTerm} setSearchTerm={setSearchTerm} addExercise={addExercise} filteredExercises={filteredExercises} handleGoToStep2={handleGoToStep2} routineExercises={routineExercises}/>
                )}

                {step === 2 && (
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 drop-shadow-[0_0_6px_#22d3ee] text-center">
                            Name your routine
                        </h2>

                        <div className="bg-slate-950 border border-cyan-700 rounded-xl p-4 shadow-[0_0_12px_#22d3ee33]">
                            <form onSubmit={handleSubmit(handleSaveRoutine)}>
                                <label className="block text-sm font-bold text-cyan-300 mb-2">Routine name</label>
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: "A routine name is required",
                                        minLength: {
                                            value: 3,
                                            message: "The name must be at least 3 characters",
                                        },
                                    })}
                                    placeholder="e.g., Push Day, Full Body Routine"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-900 text-cyan-100 border border-cyan-600 shadow-[inset_0_0_6px_#22d3ee22] placeholder:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                                />
                                {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}

                                <button
                                    type="submit"
                                    className="cursor-pointer mt-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg w-full shadow-[0_0_8px_#22d3ee] hover:shadow-[0_0_14px_#22d3ee] transition"
                                >
                                    Save Routine
                                </button>
                            </form>
                        </div>

                        <div>
                            <h3 className="text-sm text-cyan-300 font-semibold mb-2">Selected exercises</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-h-56 overflow-y-auto bg-slate-950 p-2">
                                {routineExercises.map((exercise) => (
                                    <ExerciseSummary
                                        key={exercise.id}
                                        exercise={exercise}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default MyRoutines;
