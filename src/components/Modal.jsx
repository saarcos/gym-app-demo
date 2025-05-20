import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen])
    if (!isOpen) return null
    return createPortal(
        //Overlay
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center" onClick={onClose}>
            <div
                className="relative bg-slate-950 rounded-xl p-4 max-w-4xl w-full max-h-[80vh] border border-cyan-400 shadow-[0_0_20px_#22d3ee44]  overflow-y-auto"
                onClick={(event) => event.stopPropagation()}
            >
                {children}
                <button className="absolute top-1 right-1 cursor-pointer p-1 text-cyan-400 drop-shadow-[0_0_6px_#22d3ee] hover:drop-shadow-[0_0_14px_#22d3ee]" onClick={onClose}><X className="w-5 h-5" /></button>
            </div>
        </div>, document.getElementById("modal-exercises")
    )
}

export default Modal