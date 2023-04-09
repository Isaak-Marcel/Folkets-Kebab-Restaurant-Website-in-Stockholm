import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
    const {pathName} = useLocation();

    useEffect(()=>{
        
        

        // Mabey add so that links on mobile retracts
        window.scroll(0,0);
       
    }, [pathName] )


}

export default ScrollToTop