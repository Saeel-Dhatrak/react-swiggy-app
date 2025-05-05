import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        window.addEventListener("online", () => setIsOnline(true));
        window.addEventListener("offline", () => setIsOnline(false));
    
        // Clean up listeners on unmount
        return () => {
            window.removeEventListener("online", () => setIsOnline(true));
            window.removeEventListener("offline", () => setIsOnline(false));
        };
    }, []);

     return isOnline;

}

export default useOnline;


    // useEffect(() => {
    //     addEventListener("online", (event) => {
    //         setIsOnline(true)
    //     });
    //     addEventListener("offline", (event) => {
    //         setIsOnline(false)
    //     });
    // }, [])

