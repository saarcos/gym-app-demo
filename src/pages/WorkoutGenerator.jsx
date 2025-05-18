import { useState } from "react";
import { generateWorkout } from "../utils/functions";
import Generator from '../components/Generator'
import Workout from "../components/Workout";
const WorkoutGenerator = () => {
    const [workout, setWorkout] = useState(null);
    const [workoutSplit, setWorkoutSplit] = useState('');
    const [muscles, setMuscles] = useState([]);
    const [goal, setGoal] = useState('');

    function updateWorkout() {
        if (muscles.length < 1) {
            return
        }
        const newWorkout = generateWorkout({ workoutSplit, muscles, goal });
        console.log(newWorkout)
        setWorkout(newWorkout);
        window.location.href = '#workout'
    }
    return (
        <>
            <Generator workoutSplit={workoutSplit} setWorkoutSplit={setWorkoutSplit} muscles={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal} updateWorkout={updateWorkout} />
            {workout && (<Workout workout={workout} />)}
        </>
    )
}

export default WorkoutGenerator