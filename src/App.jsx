import { useState } from "react"
import Generator from "./components/Generator"
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import { generateWorkout } from "./utils/functions";


function App() {
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
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-black via-slate-900 to-blue-600 text-white text-sm sm:text-base">
      <Hero />
      <Generator workoutSplit={workoutSplit} setWorkoutSplit={setWorkoutSplit} muscles={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal} updateWorkout={updateWorkout} />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
