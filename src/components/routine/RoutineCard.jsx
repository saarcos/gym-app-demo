import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { EllipsisVertical } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { deleteRoutineById } from '../../services/routineService';
import { useNavigate } from 'react-router-dom';
import { createWorkoutSession } from '../../services/trainingSessionService';

export const RoutineCard = ({ routine, user }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteRoutineById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines', user?.id] });
    }
  })
  const createMutation = useMutation({
    mutationFn: createWorkoutSession,
    onSuccess: (data) => {
      navigate(`/training/${routine.id}/${data?.training_session.id}`)
    }
  })
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  const handleDeleteRoutine = () => {
    deleteMutation.mutate(routine.id);
  }
  const handleCreateSession = () => {
    const payload = {
      userId: routine?.userId,
      routineId: routine?.id,
    }
    console.log(payload)
    createMutation.mutate(payload);
  }
  return (
    <div className="relative bg-gradient-to-br from-slate-950 to-slate-900 border border-cyan-600 rounded-2xl shadow-[0_0_6px_rgba(34,211,238,0.4)] p-5 transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:-translate-y-0.5 group">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-xl sm:text-2xl font-extrabold text-cyan-300 drop-shadow-[0_0_4px_rgba(34,211,238,0.7)] tracking-wider uppercase sm:truncate">
          {routine.name}
        </h1>
        <p className="text-sm text-slate-300 italic bg-slate-900/50 rounded-lg px-3 py-1 relative overflow-hidden">
          <span className="absolute inset-0 bg-cyan-500/10 animate-glitch"></span>
          Created on:{" "}
          <span className="text-cyan-400 font-medium">
            {dayjs(routine.createdAt).format("dddd, MMMM D, YYYY")}
          </span>
        </p>

        <p className="text-sm text-slate-200 capitalize transition-colors duration-300 group-hover:text-cyan-200">
          <span className="text-cyan-400 font-semibold drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]">
            Muscles:
          </span>{" "}
          {routine.muscles.join(", ")}
        </p>

        <button onClick={handleCreateSession} className="relative cursor-pointer mt-3 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-500 hover:to-cyan-700 text-white font-semibold py-2 px-6 rounded-lg shadow-[0_0_5px_rgba(34,211,238,0.6)] hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 overflow-hidden group/button">
          <span className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-200"></span>
          <span className="relative z-10">Start Workout</span>
        </button>
      </div>
      <div className="absolute top-2 right-2" ref={menuRef}>
        <button
          onClick={toggleMenu}
          className="p-1 cursor-pointer rounded-full bg-slate-800/60 border border-cyan-700 hover:bg-cyan-700/20 hover:scale-110 text-cyan-400 hover:text-cyan-200 transition-all shadow-[0_0_6px_rgba(34,211,238,0.3)]"
        >
          <EllipsisVertical size={18} />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-slate-900 border border-cyan-600 rounded-md shadow-[0_0_10px_rgba(34,211,238,0.3)] z-10">
            <button className="w-full text-left px-4 py-2 hover:bg-slate-800 text-cyan-200 transition cursor-pointer">Routine details</button>
            <button className="w-full text-left px-4 py-2 hover:bg-slate-800 text-red-400 transition cursor-pointer" onClick={handleDeleteRoutine}>Delete routine</button>
          </div>
        )}
      </div>

    </div>
  );
};