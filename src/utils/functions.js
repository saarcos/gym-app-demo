import { EXERCISES, SCHEMES, TEMPOS, WORKOUTS } from "./exercises.js"
const exercises = exercisesFlattener(EXERCISES)

export function generateWorkout(args) {
    const { muscles, workoutSplit: workout, goal } = args
    //Me permite extraer solo las keys de los objects de ejercicios, solo devuelve dumbbell_bench_press, etc.
    let exer = Object.keys(exercises);
    //Excluyo los ejercicios caseros
    exer = exer.filter((key) => exercises[key].meta.environment !== "home");
    let includedTracker = [];
    let listOfMuscles;

    if (workout === "individual") {
        listOfMuscles = muscles;
    } else {
        //Encuentro, por ejemplo, si es bro_split WORKOUTS['bro_split']['push'] y me devuelve = ['chest', 'triceps', 'shoulders']
        listOfMuscles = WORKOUTS[workout][muscles[0]];
    }
    //Randomiza el orden de los grupos musculares
    listOfMuscles = new Set(shuffleArray(listOfMuscles));
    let arrOfMuscles = Array.from(listOfMuscles);
    let scheme = goal
    let sets = SCHEMES[scheme].ratio
        //Extrae los tipos de ejercicios a atacar con su frecuencia, da como resultado, ejemplo, con ratio[3,2] = ["compound", "compound", "compound", "accessory",  "accessory"]
        .reduce((acc, curr, index) => {
            //make this compound and exercise muscle -> array of objects and destructure in loop
            return [
                ...acc,
                ...[...Array(parseInt(curr)).keys()].map(() =>
                    index === 0 ? "compound" : "accessory"
                ),
            ];
        }, [])
        //Asigna los músculos a cada set, ejemplo con lo de antes 
        /*
            sets = [
            { setType: 'compound', muscleGroup: 'triceps' },   // index 0
            { setType: 'compound', muscleGroup: 'shoulders' }, // index 1
            { setType: 'accessory', muscleGroup: 'chest' },    // index 2
            { setType: 'accessory', muscleGroup: 'triceps' },  // index 3
            { setType: 'accessory', muscleGroup: 'shoulders' } // index 4
            ]
        */
        .reduce((acc, curr, index) => {
            const muscleGroupToUse =
                index < arrOfMuscles.length
                    ? arrOfMuscles[index]
                    : arrOfMuscles[index % arrOfMuscles.length];
            return [
                ...acc,
                {
                    setType: curr,
                    muscleGroup: muscleGroupToUse,
                },
            ];
        }, []);

    const { compound: compoundExercises, accessory: accessoryExercises } =
        exer.reduce(
            (acc, curr) => {
                let exerciseHasRequiredMuscle = false;
                for (const musc of exercises[curr].muscles) {
                    if (listOfMuscles.has(musc)) {
                        exerciseHasRequiredMuscle = true;
                    }
                }
                return exerciseHasRequiredMuscle
                    ? {
                        ...acc,
                        [exercises[curr].type]: {
                            ...acc[exercises[curr].type],
                            [curr]: exercises[curr],
                        },
                    }
                    : acc;
            },
            { compound: {}, accessory: {} }
        );

    const genWOD = sets.map(({ setType, muscleGroup }) => {
        const data =
            setType === "compound" ? compoundExercises : accessoryExercises;
        const filteredObj = Object.keys(data).reduce((acc, curr) => {
            if (
                includedTracker.includes(curr) ||
                !data[curr].muscles.includes(muscleGroup)
            ) {
                // if (includedTracker.includes(curr)) { console.log('banana', curr) }
                return acc;
            }
            return { ...acc, [curr]: exercises[curr] };
        }, {});
        const filteredDataList = Object.keys(filteredObj);
        const filteredOppList = Object.keys(
            setType === "compound" ? accessoryExercises : compoundExercises
        ).filter((val) => !includedTracker.includes(val));

        let randomExercise =
            filteredDataList[
            Math.floor(Math.random() * filteredDataList.length)
            ] ||
            filteredOppList[
            Math.floor(Math.random() * filteredOppList.length)
            ];

        // console.log(randomExercise)

        if (!randomExercise) {
            return {};
        }

        let repsOrDuraction =
            exercises[randomExercise].unit === "reps"
                ? Math.min(...SCHEMES[scheme].repRanges) +
                Math.floor(
                    Math.random() *
                    (Math.max(...SCHEMES[scheme].repRanges) -
                        Math.min(...SCHEMES[scheme].repRanges))
                ) +
                (setType === "accessory" ? 4 : 0)
                : Math.floor(Math.random() * 40) + 20;
        const tempo = TEMPOS[Math.floor(Math.random() * TEMPOS.length)];

        if (exercises[randomExercise].unit === "reps") {
            const tempoSum = tempo
                .split(" ")
                .reduce((acc, curr) => acc + parseInt(curr), 0);
            if (tempoSum * parseInt(repsOrDuraction) > 85) {
                repsOrDuraction = Math.floor(85 / tempoSum);
            }
        } else {
            //set to nearest 5 seconds
            repsOrDuraction = Math.ceil(parseInt(repsOrDuraction) / 5) * 5;
        }
        includedTracker.push(randomExercise);

        return {
            name: randomExercise,
            tempo,
            rest: SCHEMES[scheme]["rest"][setType === "compound" ? 0 : 1],
            reps: repsOrDuraction,
            ...exercises[randomExercise],
        };
    });

    return genWOD.filter(
        (element) => Object.keys(element).length > 0
    );
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

function exercisesFlattener(exercisesObj) {
    const flattenedObj = {}

    for (const [key, val] of Object.entries(exercisesObj)) {
        if (!("variants" in val)) {
            flattenedObj[key] = val
        } else {
            for (const variant in val.variants) {
                let variantName = variant + "_" + key
                let variantSubstitutes = Object.keys(val.variants).map((element) => {
                    return element + ' ' + key
                }).filter(element => element.replaceAll(' ', '_') !== variantName)

                flattenedObj[variantName] = {
                    ...val,
                    description: val.description + '___' + val.variants[variant],
                    substitutes: [
                        ...val.substitutes, variantSubstitutes
                    ].slice(0, 5)
                }
            }
        }
    }
    return flattenedObj
}