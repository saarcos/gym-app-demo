import { SCHEMES, WORKOUTS } from "../utils/exercises"
import SectionWrapper from "./SectionWrapper"
import { ChevronDown } from 'lucide-react'
import CommonButton from "./CommonButton"
import { Fragment, useState } from "react"
function Header({ index, title, description }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 gap-x-3 justify-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-cyan-300 drop-shadow-[0_0_5px_#22d3ee]">{index}</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl text-[#e0f2fe] drop-shadow-[0_0_5px_#94a3b8]">{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}
const Generator = ({ workoutSplit, setWorkoutSplit, muscles, setMuscles, goal, setGoal, updateWorkout }) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    }
    const updateMuscles = (muscleGroup) => {
        if (muscles.length > 2 && !muscles.includes(muscleGroup)) {
            return;
        }
        if (workoutSplit !== 'individual') {
            setMuscles([muscleGroup]);
            setShowModal(false);
            return;
        }
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter((muscle) => muscle !== muscleGroup))
            return;
        }
        if (muscles.length === 2) {
            setShowModal(false);
        }
        setMuscles([...muscles, muscleGroup]);

    }
    return (
        <SectionWrapper id={"generate"} header="Generation" title={['Generate', 'Your', 'Workout']}>
            <Header index={'01'} title={'Pick your poison'} description={"Select the workout you want to endure"} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.keys(WORKOUTS).map((workoutType, index) => (
                    <button
                        onClick={() => {
                            setWorkoutSplit(workoutType);
                            setMuscles([])
                        }}
                        className={`bg-slate-950 border-2 border-solid py-3 px-4 text-white rounded-lg duration-200 hover:border-cyan-400 hover:shadow-[0_0_10px_#22d3ee] cursor-pointer ${workoutType === workoutSplit ? 'border-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'border-transparent shadow-sm'}`}
                        key={index}><p className="capitalize font-semibold text-sm md:text-base">{workoutType.replaceAll("_", " ")}</p>
                    </button>
                ))}
            </div>
            <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation"} />
            <div className={`bg-slate-950 rounded-lg border-2 border-solid duration-200 hover:border-cyan-400 hover:shadow-[0_0_10px_#22d3ee] transition flex flex-col ${muscles.length>0 ? 'border-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'border-transparent'}`}>
                <button className="group cursor-pointer flex items-center p-3 justify-center relative text-gray-300 disabled:cursor-not-allowed" disabled={workoutSplit === ''} onClick={toggleModal}>
                    <p className={`capitalize`}>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' & ')}</p>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-300" />
                </button>
                {showModal &&
                    (<div
                        className="flex flex-col px-3 pb-3">
                        {(workoutSplit === 'individual' ? WORKOUTS[workoutSplit] : Object.keys(WORKOUTS[workoutSplit]))
                            .map((muscleGroup, index) => {
                                return (
                                    <Fragment key={index}>
                                        <button onClick={() => updateMuscles(muscleGroup)} key={index} className={`group flex flex-col cursor-pointer items-center py-3  duration-200 transition-colors text-sm font-medium hover:font-semibold opacity-90 ${muscles.includes(muscleGroup) ? 'text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]' : 'text-white'} `}>
                                            <p className="capitalize group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_10px_#22d3ee] font-semibold text-sm sm:text-base">
                                                {muscleGroup}
                                            </p>
                                        </button>
                                        <div className="h-[1px] w-[95%] mx-auto my-2 bg-cyan-200 drop-shadow-[0_0_6px_#22d3ee]" />
                                    </Fragment>
                                )
                            }
                            )}
                    </div>)}
            </div>
            <Header index={'03'} title={'Select your ultimate objective'} description={"Become Juggernaut"} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.keys(SCHEMES).map((scheme, index) => (
                    <button
                        onClick={() => {
                            setGoal(scheme);
                        }}
                        className={`bg-slate-950 border-2 border-solid py-3 px-4 text-white rounded-lg duration-200 hover:border-cyan-400 hover:shadow-[0_0_10px_#22d3ee] cursor-pointer ${scheme === goal ? 'border-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'border-transparent shadow-sm'}`}
                        key={index}>
                        <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
                    </button>
                ))}
            </div>
            <CommonButton btnText={"Formulate"} func={updateWorkout} />

        </SectionWrapper>
    )
}

export default Generator