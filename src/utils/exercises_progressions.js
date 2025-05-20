export const exercises = [
    {
        id: "e1",
        name: "Barbell Bench Press",
        muscles: ["chest", "triceps", "shoulders"],
        type: "compound",
        categories: ["strength", "hypertrophy"],
        primaryCategory: "strength",
        requires1RM: true,
        repRange: { hypertrophy: [6, 12], strength: [1, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [80, 95] },
        incline: "flat",
        execution: "Lie flat on a bench with feet planted firmly. Grip the barbell slightly wider than shoulder-width. Unrack the bar and lower it to your mid-chest, keeping elbows at a 45-degree angle. Press the bar back up to full arm extension, engaging your chest.",
        imageUrl: "/images/barbell-bench-press.jpg"
    },
    {
        id: "e2",
        name: "Dumbbell Bench Press",
        muscles: ["chest", "triceps", "shoulders"],
        type: "compound",
        categories: ["hypertrophy", "strength"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [6, 12], strength: [1, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [75, 90] },
        incline: "flat",
        variantOf: "e1",
        execution: "Lie flat on a bench with feet planted. Hold a dumbbell in each hand at chest level, palms facing forward. Press the dumbbells upward until arms are fully extended, then lower them slowly to chest level, keeping control.",
        imageUrl: "/images/dumbbell-bench-press.jpg"
    },
    {
        id: "e3",
        name: "Incline Barbell Press",
        muscles: ["chest", "triceps", "shoulders"],
        type: "compound",
        categories: ["strength", "hypertrophy"],
        primaryCategory: "strength",
        requires1RM: true,
        repRange: { hypertrophy: [6, 12], strength: [1, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [80, 95] },
        incline: "incline",
        execution: "Set a bench to a 30-45 degree incline. Lie back, feet planted. Grip the barbell slightly wider than shoulder-width. Unrack and lower the bar to your upper chest, then press it back up to full extension, focusing on upper chest engagement.",
        imageUrl: "/images/incline-barbell-press.jpg"
    },
    {
        id: "e4",
        name: "Incline Dumbbell Press",
        muscles: ["chest", "triceps", "shoulders"],
        type: "compound",
        categories: ["hypertrophy", "strength"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [6, 12], strength: [1, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [75, 90] },
        incline: "incline",
        variantOf: "e3",
        execution: "Set a bench to a 30-45 degree incline. Lie back with a dumbbell in each hand at chest level, palms forward. Press the dumbbells up until arms are extended, then lower them slowly to chest level, maintaining control.",
        imageUrl: "/images/incline-dumbbell-press.jpg"
    },
    {
        id: "e5",
        name: "Barbell Squat",
        muscles: ["quads", "glutes", "hamstrings"],
        type: "compound",
        categories: ["strength", "hypertrophy"],
        primaryCategory: "strength",
        requires1RM: true,
        repRange: { hypertrophy: [6, 12], strength: [1, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [85, 95] },
        incline: "neutral",
        execution: "Place a barbell on your upper back, feet shoulder-width apart. Keep your chest up and core braced. Lower your body by bending knees and hips until thighs are parallel to the ground, then push through heels to stand back up.",
        imageUrl: "/images/barbell-squat.jpg"
    },
    {
        id: "e6",
        name: "Goblet Squat",
        muscles: ["quads", "glutes", "hamstrings"],
        type: "compound",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 15], strength: [3, 6] },
        cargaRange: { hypertrophy: [60, 75], strength: [70, 85] },
        incline: "neutral",
        variantOf: "e5",
        execution: "Hold a dumbbell close to your chest with both hands, elbows pointing down. Stand with feet shoulder-width apart. Squat down by bending knees and hips, keeping chest up, until thighs are parallel to the ground, then push through heels to stand.",
        imageUrl: "/images/goblet-squat.jpg"
    },
    {
        id: "e7",
        name: "Deadlift",
        muscles: ["back", "glutes", "hamstrings"],
        type: "compound",
        categories: ["strength"],
        primaryCategory: "strength",
        requires1RM: true,
        repRange: { hypertrophy: [4, 8], strength: [1, 5] },
        cargaRange: { hypertrophy: [70, 85], strength: [85, 100] },
        incline: "neutral",
        execution: "Stand with feet hip-width apart, barbell over mid-foot. Bend at hips and knees to grip the bar. Keep your back straight, chest up. Lift the bar by extending hips and knees, pulling it close to your body, then lower it with control.",
        imageUrl: "/images/deadlift.jpg"
    },
    {
        id: "e8",
        name: "Romanian Deadlift",
        muscles: ["hamstrings", "glutes", "back"],
        type: "compound",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 12], strength: [3, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [75, 90] },
        incline: "neutral",
        variantOf: "e7",
        execution: "Hold a barbell with an overhand grip, feet hip-width apart. Keep knees slightly bent. Hinge at hips to lower the bar along your legs until you feel a stretch in your hamstrings, then return to standing by engaging glutes.",
        imageUrl: "/images/romanian-deadlift.jpg"
    },
    {
        id: "e9",
        name: "Pull-Up",
        muscles: ["back", "biceps"],
        type: "compound",
        categories: ["strength", "hypertrophy"],
        primaryCategory: "strength",
        requires1RM: true,
        repRange: { hypertrophy: [6, 12], strength: [1, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [80, 95] },
        incline: "neutral",
        execution: "Hang from a pull-up bar with an overhand grip, hands shoulder-width apart. Pull your body up until your chin is above the bar, engaging your lats and biceps, then lower yourself back down with control.",
        imageUrl: "/images/pull-up.jpg"
    },
    {
        id: "e10",
        name: "Lat Pulldown",
        muscles: ["back", "biceps"],
        type: "compound",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 12], strength: [3, 6] },
        cargaRange: { hypertrophy: [60, 75], strength: [70, 85] },
        incline: "neutral",
        variantOf: "e9",
        execution: "Sit at a lat pulldown machine, grip the bar wider than shoulder-width. Pull the bar down to your upper chest, squeezing your lats, then slowly return the bar to the starting position with arms extended.",
        imageUrl: "/images/lat-pulldown.jpg"
    },
    {
        id: "e11",
        name: "Barbell Row",
        muscles: ["back", "biceps"],
        type: "compound",
        categories: ["strength", "hypertrophy"],
        primaryCategory: "strength",
        requires1RM: true,
        repRange: { hypertrophy: [6, 12], strength: [1, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [80, 95] },
        incline: "neutral",
        execution: "Stand with feet hip-width apart, holding a barbell with an overhand grip. Hinge at hips, keeping back straight. Pull the bar to your lower chest, squeezing shoulder blades, then lower it back down with control.",
        imageUrl: "/images/barbell-row.jpg"
    },
    {
        id: "e12",
        name: "Dumbbell Row",
        muscles: ["back", "biceps"],
        type: "compound",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 12], strength: [3, 6] },
        cargaRange: { hypertrophy: [60, 75], strength: [70, 85] },
        incline: "neutral",
        variantOf: "e11",
        execution: "Place one knee and hand on a bench for support, holding a dumbbell in the other hand. Pull the dumbbell toward your hip, keeping elbow close to your body, then lower it back down with control.",
        imageUrl: "/images/dumbbell-row.jpg"
    },
    {
        id: "e13",
        name: "Overhead Press",
        muscles: ["shoulders", "triceps"],
        type: "compound",
        categories: ["strength", "hypertrophy"],
        primaryCategory: "strength",
        requires1RM: true,
        repRange: { hypertrophy: [6, 12], strength: [1, 6] },
        cargaRange: { hypertrophy: [65, 80], strength: [80, 95] },
        incline: "seated",
        execution: "Sit or stand with a barbell at shoulder height, hands slightly wider than shoulder-width. Press the bar overhead until arms are fully extended, keeping core braced, then lower back to shoulder level.",
        imageUrl: "/images/overhead-press.jpg"
    },
    {
        id: "e14",
        name: "Dumbbell Shoulder Press",
        muscles: ["shoulders", "triceps"],
        type: "compound",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 12], strength: [3, 6] },
        cargaRange: { hypertrophy: [60, 75], strength: [70, 85] },
        incline: "seated",
        variantOf: "e13",
        execution: "Sit on a bench with back support, holding a dumbbell in each hand at shoulder height. Press the dumbbells overhead until arms are extended, then lower them back to shoulder level with control.",
        imageUrl: "/images/dumbbell-shoulder-press.jpg"
    },
    {
        id: "e15",
        name: "Biceps Curl",
        muscles: ["biceps"],
        type: "isolation",
        categories: ["strength", "hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 12], strength: [3, 6] },
        cargaRange: { hypertrophy: [60, 75], strength: [75, 90] },
        incline: "neutral",
        execution: "Stand with feet shoulder-width apart, holding a barbell or dumbbells with an underhand grip. Curl the weight up to shoulder level, keeping elbows close to your body, then lower it back down slowly.",
        imageUrl: "/images/biceps-curl.jpg"
    },
    {
        id: "e16",
        name: "Hammer Curl",
        muscles: ["biceps"],
        type: "isolation",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 12], strength: [3, 6] },
        cargaRange: { hypertrophy: [60, 75], strength: [70, 85] },
        incline: "neutral",
        variantOf: "e15",
        execution: "Stand with feet shoulder-width apart, holding dumbbells with a neutral grip (palms facing in). Curl the weights up to shoulder level, keeping elbows close to your body, then lower them back down with control.",
        imageUrl: "/images/hammer-curl.jpg"
    },
    {
        id: "e17",
        name: "Triceps Pushdown",
        muscles: ["triceps"],
        type: "isolation",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 15], strength: [3, 6] },
        cargaRange: { hypertrophy: [60, 75], strength: [70, 85] },
        incline: "neutral",
        execution: "Stand at a cable machine with a straight bar or rope attachment. Grip the handle and push it down until arms are fully extended, keeping elbows close to your body. Slowly return to the starting position.",
        imageUrl: "/images/triceps-pushdown.jpg"
    },
    {
        id: "e18",
        name: "Skullcrusher",
        muscles: ["triceps"],
        type: "isolation",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [8, 12], strength: [3, 6] },
        cargaRange: { hypertrophy: [60, 75], strength: [70, 85] },
        incline: "neutral",
        variantOf: "e17",
        execution: "Lie on a bench holding a barbell or EZ-bar above your chest. Bend at the elbows to lower the weight toward your forehead, keeping upper arms stationary. Extend arms back to the starting position.",
        imageUrl: "/images/skullcrusher.jpg"
    },
    {
        id: "e19",
        name: "Calf Raise",
        muscles: ["calves"],
        type: "isolation",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [12, 20], strength: [6, 12] },
        cargaRange: { hypertrophy: [50, 70], strength: [60, 80] },
        incline: "neutral",
        execution: "Stand with feet hip-width apart, holding dumbbells or on a calf raise machine. Raise your heels as high as possible, contracting calves, then lower back down slowly to the starting position.",
        imageUrl: "/images/calf-raise.jpg"
    },
    {
        id: "e20",
        name: "Seated Calf Raise",
        muscles: ["calves"],
        type: "isolation",
        categories: ["hypertrophy"],
        primaryCategory: "hypertrophy",
        requires1RM: false,
        repRange: { hypertrophy: [12, 20], strength: [6, 12] },
        cargaRange: { hypertrophy: [50, 70], strength: [60, 80] },
        incline: "seated",
        variantOf: "e19",
        execution: "Sit on a calf raise machine with knees under the pad and feet on the platform. Raise your heels by extending ankles as high as possible, then lower them below platform level for a stretch.",
        imageUrl: "/images/seated-calf-raise.jpg"
    },
];

//Strength progression template #1 / Linear progression, descendant RIR
export const strengthProgression1 = {
    goal: 'strength',
    style: 'Linear progressive overload (%1RM and downwards RIR)',
    compoundAccessoryRatio: [0.8, 0.2], // 50% compound, 50% accessory
    progression: [
        { week: 1, rm: 75, rir: 3, compound: { series: [3, 4], reps: [4, 6], }, accessory: { series: [3, 4], reps: [6, 10], }, },
        { week: 2, rm: 80, rir: 2, compound: { series: [3, 4], reps: [3, 5], }, accessory: { series: [3, 4], reps: [6, 9], }, },
        { week: 3, rm: 85, rir: 1, compound: { series: [3, 5], reps: [2, 4], }, accessory: { series: [3, 4], reps: [5, 8], }, },
        // deload
        { week: 4, rm: 65, rir: 4, compound: { series: [2, 3], reps: [6, 8], }, accessory: { series: [2, 3], reps: [8, 12], }, },
    ]
};
//Strength progression #2 / rep and rm variations to avoid muscular fatigue
export const strengthProgression2 = {
    goal: 'strength',
    style: 'Cyclic variation of repetitions and %1RM to avoid accumulated fatigue',
    compoundAccessoryRatio: [0.8, 0.2], // 50% compound, 50% accessory
    progression: [
        { week: 1, rm: 80, rir: 2, compound: { series: [3, 5], reps: [4, 6], }, accessory: { series: [3, 4], reps: [8, 10], }, },
        { week: 2, rm: 85, rir: 1, compound: { series: [3, 5], reps: [2, 4], }, accessory: { series: [3, 4], reps: [6, 9], }, },
        { week: 3, rm: 75, rir: 3, compound: { series: [4, 5], reps: [4, 6], }, accessory: { series: [3, 4], reps: [10, 12], }, },
        //deload
        { week: 4, rm: 60, rir: 4, compound: { series: [2, 3], reps: [6, 8], }, accessory: { series: [2, 3], reps: [10, 15], }, },
    ]
};

//Hypertrophy progression/ Linear progressive overload
export const hypertrophyProgression1 = {
    goal: 'hypertrophy',
    style: 'Linear progressive overload (weight & reps)',
    compoundAccessoryRatio: [0.5, 0.5], // 50% compound, 50% accessory
    progression: [
        { week: 1, rir: 2, compound: { series: [3, 4], reps: [10, 12] }, accessory: { series: [3, 4], reps: [12, 15] } },
        { week: 2, rir: 1.5, compound: { series: [3, 4], reps: [10, 12] }, accessory: { series: [3, 4], reps: [12, 15] } },
        { week: 3, rir: 1, compound: { series: [3, 4], reps: [8, 10] }, accessory: { series: [3, 4], reps: [10, 12] } },
        { week: 4, rir: 3.5, compound: { series: [2, 3], reps: [12, 15] }, accessory: { series: [2, 3], reps: [15, 20] } },
    ]
}


export const hypertrophyProgression2 = {
    goal: 'hypertrophy',
    style: 'Downwards RIR progression',
    compoundAccessoryRatio: [0.6, 0.4], // 60% compound, 40% accessory
    progression: [
        { week: 1, rir: 2, compound: { series: [3, 4], reps: [8, 12] }, accessory: { series: [3, 4], reps: [10, 15] } },
        { week: 2, rir: 1.5, compound: { series: [3, 4], reps: [8, 12] }, accessory: { series: [3, 4], reps: [10, 15] } },
        { week: 3, rir: 0.5, compound: { series: [3, 5], reps: [8, 12] }, accessory: { series: [3, 5], reps: [10, 15] } },
        { week: 4, rir: 3.5, compound: { series: [2, 3], reps: [12, 15] }, accessory: { series: [2, 3], reps: [15, 20] } },
    ]
};
