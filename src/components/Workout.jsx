import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"

const Workout = ({workout}) => {
    return (
        <SectionWrapper id={"workout"} header={"Workout"} title={['Start', 'Working', 'Out!']}>
            <div className="flex flex-col gap-8">
                {workout.map((exercise, index)=>(<ExerciseCard key={index} exercise={exercise} index={index}/>))}
            </div>
        </SectionWrapper>
    )
}

export default Workout