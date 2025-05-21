import { Check, Plus, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Exercise = ({ exercise, onClick, isAdded }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div
      className={`flex flex-col gap-2 border rounded-lg p-3 transition shadow-[0_0_6px_#22d3ee] ${
        isAdded
          ? "bg-cyan-800/30 border-cyan-500 shadow-[0_0_6px_#00ffd855]"
          : "bg-slate-950 border-cyan-400 hover:bg-slate-900"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-900 rounded-lg p-3 shadow-[0_0_8px_#22d3ee22]">
        <img
          src={exercise.imageUrl}
          alt={exercise.name}
          className="w-18 h-18 sm:w-20 sm:h-20 object-cover rounded-full border-2 border-cyan-400 shadow-[0_0_6px_#22d3ee]"
        />
        <div className="flex flex-col flex-grow text-center sm:text-start">
          <p className="text-md sm:text-xl font-semibold text-cyan-300 drop-shadow-[0_0_4px_#22d3ee] truncate">
            {exercise.name}
          </p>
          <p className="capitalize text-sm sm:text-md text-slate-400 truncate">
            {exercise.muscles.join(", ")}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className={`text-sm flex items-center gap-1 px-3 py-1 rounded-lg transition-all duration-300 font-medium
            ${
              isAdded
                ? "bg-cyan-700/30 text-cyan-300 cursor-pointer shadow-[0_0_6px_#22d3ee55] scale-100 animate-[pulse_1s_ease-in-out]"
                : "border border-cyan-400 text-cyan-100 hover:bg-cyan-600 hover:text-white shadow-[0_0_6px_#22d3ee] cursor-pointer active:scale-95"
            }`}
        >
          {isAdded ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Added
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              Add
            </>
          )}
        </button>
      </div>

      <div className="bg-slate-900 p-2 rounded-lg shadow-[inset_0_0_8px_#22d3ee33]">
        <button
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className="flex items-center justify-between w-full text-md text-slate-200 cursor-pointer select-none"
          aria-expanded={isDescriptionOpen}
        >
          <span className="drop-shadow-[0_0_2px_#22d3ee99]">Description</span>
          {isDescriptionOpen ? (
            <Check className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_2px_#22d3ee]" />
          ) : (
            <Plus className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_2px_#22d3ee]" />
          )}
        </button>

        {isDescriptionOpen && (
          <div className="mt-2 max-h-40 overflow-y-auto border-t border-cyan-700 pt-2 text-sm text-slate-300">
            {exercise.execution}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;
