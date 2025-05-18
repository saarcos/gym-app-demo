import { Menu } from 'lucide-react';
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
const CommonLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { logout } = useAuth();
    const isActive = (path) => {
        return location.pathname === path;
    }
    const linkClasses = (path) => {
        return `${isActive(path)
            ? 'text-white drop-shadow-[0_0_6px_#22d3ee] font-semibold'
            : 'text-cyan-200'} hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee] transition`
    }

    return (
        <div>
            <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur z-50 border-b border-cyan-500/20">
                <div className='flex items-center justify-between max-w-4xl mx-auto px-4 py-3'>
                    <Link to={"/"} className='text-cyan-300 drop-shadow-[0_0_5px_#22d3ee] font-bold text-xl'>
                        Gym tracker
                    </Link>

                    <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                        <Menu className='w-6 h-6 text-cyan-300' />
                    </button>

                    {/* Desktop menu*/}
                    <div className="hidden md:flex gap-6 text-cyan-200">
                        <Link to="/generator" className={linkClasses("/generator")}>Routine generator</Link>
                        <Link to="/routines" className='hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee]'>My routines</Link>
                        <Link to="/progress" className='hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee]'>Training</Link>
                        <button className='cursor-pointer' onClick={()=>logout()}>Logout</button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden bg-slate-900/90 backdrop-blur-sm px-4 py-2 text-cyan-200 flex flex-col space-y-2">
                        <Link to="/generator" onClick={() => setIsOpen(false)} className='hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee]'>Routine generator</Link>
                        <Link to="/routines" onClick={() => setIsOpen(false)} className='hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee]'>My routines</Link>
                        <Link to="/progress" onClick={() => setIsOpen(false)} className='hover:text-white hover:drop-shadow-[0_0_5px_#22d3ee]'>Training</Link>
                    </div>
                )}
            </nav>
            <div className="mt-10">
                <Outlet />
            </div>
        </div>
    )
}

export default CommonLayout