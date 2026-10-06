import { createPortal } from "react-dom";

const Portal=({flag=false,children})=>{
    
   return flag ? createPortal(
        <div className="z-50 fixed bg-black/80 h-dvh w-full flex items-center justify-center">
            {children}
        </div>,
        document.getElementById('portal')
    ): " ";
}

export default Portal;