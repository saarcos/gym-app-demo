import { useMutation } from "@tanstack/react-query";
import { Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createNewSet, updateSet } from "../../services/trainingSeriesService";

const TrainingTable = ({ trainingSessionId, exerciseId }) => {
    // Al inicio del componente:
    const timeoutsRef = useRef({});
    const createSetMutation = useMutation({
        mutationFn: createNewSet
    });
    const updateSetMutation = useMutation({
        mutationFn: updateSet
    })

    const [sets, setSets] = useState([
        { id: null, rir: '', weight: '', reps: '', rpe: '', saved: false }
    ]);

    const handleChange = (index, field, value) => {
        const updated = [...sets];
        updated[index][field] = value;
        updated[index].saved = false;
        setSets(updated);

        // Limpiar timeout anterior si existe
        if (timeoutsRef.current[index]) {
            clearTimeout(timeoutsRef.current[index]);
        }

        // Solo si ambos campos están llenos y aún no se ha guardado
        const { reps, weight } = updated[index];
        const repsVal = field === "reps" ? value : reps;
        const weightVal = field === "weight" ? value : weight;

        if (
            repsVal !== '' &&
            weightVal !== '' &&
            updated[index].id === null &&
            !updated[index].saved
        ) {
            timeoutsRef.current[index] = setTimeout(() => {
                const payload = {
                    trainingSessionId,
                    routineExerciseId: exerciseId,
                    order: index + 1,
                    reps: Number(updated[index].reps),
                    weight: Number(updated[index].weight),
                    rir: updated[index].rir ? Number(updated[index].rir) : undefined,
                    rpe: updated[index].rpe ? Number(updated[index].rpe) : undefined,
                };

                createSetMutation.mutate(payload, {
                    onSuccess: (data) => {
                        console.log('Created set')
                        setSets(prev => {
                            const copy = [...prev];
                            copy[index].saved = true;
                            copy[index].id = data.set.id;
                            return copy;
                        });
                    }
                });
            }, 3000); // 3s debounce
        }
        else if (
            repsVal !== '' &&
            weightVal !== '' &&
            updated[index].id &&
            !updated[index].saved
        ) {
            timeoutsRef.current[index] = setTimeout(() => {
                updateSetMutation.mutate(
                    {
                        id: updated[index].id,
                        data: {
                            trainingSessionId,
                            routineExerciseId: exerciseId,
                            order: index + 1,
                            reps: Number(updated[index].reps),
                            weight: Number(updated[index].weight),
                            rir: updated[index].rir ? Number(updated[index].rir) : undefined,
                            rpe: updated[index].rpe ? Number(updated[index].rpe) : undefined,
                        },
                    },
                    {
                        onSuccess: () => {
                            console.log('Updated set');
                            setSets((prev) => {
                                const copy = [...prev];
                                copy[index].saved = true;
                                return copy;
                            });
                        },
                    }
                );
            }, 5000)
        }
    };
    useEffect(() => {
        return () => {
            Object.values(timeoutsRef.current).forEach(clearTimeout);
        };
    }, []);


    const addsets = () => {
        setSets([...sets, { id: null, rir: '', weight: '', reps: '', rpe: '', saved: false }]);
    };

    const removesets = (index) => {
        const updated = [...sets];
        updated.splice(index, 1);
        setSets(updated);
    };

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full text-sm text-white border border-cyan-500 shadow-md rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-cyan-200 uppercase text-xs tracking-wider">
                    <tr>
                        <th className="py-2 text-center drop-shadow-[0_0_3px_#22d3ee]">Set</th>
                        <th className="py-2 text-center drop-shadow-[0_0_3px_#22d3ee]">Reps</th>
                        <th className="py-2 text-center drop-shadow-[0_0_3px_#22d3ee]">Weight (KG's)</th>
                        <th className="py-2 text-center drop-shadow-[0_0_3px_#22d3ee]">RIR</th>
                        <th className="py-2 text-center drop-shadow-[0_0_3px_#22d3ee]">RPE</th>
                        <th className="py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {sets.map((serie, index) => (
                        <tr key={index} className="border-t border-cyan-500/40 bg-slate-900">
                            <td className="py-2 text-center text-slate-300  drop-shadow-[0_0_15px_#22d3ee]">{index + 1}</td>
                            <td className="py-2 text-center">
                                <input
                                    type="number"
                                    value={serie.reps}
                                    onChange={(e) => handleChange(index, 'reps', e.target.value)}
                                    className="bg-slate-950 rounded border border-cyan-600 py-1 w-10 text-center shadow-[0_0_3px_#22d3ee] appearance-none"
                                />
                            </td>
                            <td className="py-2 text-center">
                                <input
                                    type="number"
                                    value={serie.weight}
                                    onChange={(e) => handleChange(index, 'weight', e.target.value)}
                                    className="bg-slate-950 border border-cyan-600 rounded  py-1 w-14 text-center shadow-[0_0_3px_#22d3ee]"
                                />
                            </td>
                            <td className="py-2 text-center">
                                <input
                                    type="number"
                                    value={serie.rir}
                                    onChange={(e) => handleChange(index, 'rir', e.target.value)}
                                    className="bg-slate-950 border border-cyan-600 rounded  py-1 w-10 text-center shadow-[0_0_3px_#22d3ee]"
                                />
                            </td>
                            <td className="py-2 text-center">
                                <input
                                    type="number"
                                    step="0.1"
                                    value={serie.rpe}
                                    onChange={(e) => handleChange(index, 'rpe', e.target.value)}
                                    className="bg-slate-950 border border-cyan-600 rounded  py-1 w-10 text-center shadow-[0_0_3px_#22d3ee]"
                                />
                            </td>
                            <td className="py-2">
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        onClick={() => removesets(index)}
                                        className="text-red-400 hover:text-red-300 transition text-sm cursor-pointer drop-shadow-[0_0_3px_#ff0000]"
                                    >
                                        <X />
                                    </button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button
                onClick={addsets}
                className="mt-4 w-full relative flex items-center justify-center gap-2 bg-slate-900 text-cyan-300 font-semibold py-2 rounded-xl group overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-[0_0_2px_#22d3ee]"
            >
                <span className="absolute inset-0 border border-cyan-500 rounded-xl group-hover:shadow-[0_0_10px_#22d3ee] transition-all duration-200" />
                <Plus size={18} strokeWidth={2.5} className="relative z-10 drop-shadow-[0_0_4px_#22d3ee]" />
                <span className="relative z-10 drop-shadow-[0_0_3px_#22d3ee] tracking-wide">
                    Agregar serie
                </span>
            </button>
        </div>
    );
};

export default TrainingTable;
