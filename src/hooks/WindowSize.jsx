import { useState, useEffect } from "react";

function WindowSize() {
    // on verifie qu' on est coter client est non cote server
    const isClient = typeof window === "object";

    function getSize() {
        // retourne un objet contenant la largeur et la hauteur de lecrant
        return {
            width: isClient ? window.innerWidth : undefined,
            heigth: isClient ? window.innerHeight : undefined
        };
    }


    const [windowSize, setWindowSize] = useState(getSize);

    //le hook sassure que lon est bien coter client
    useEffect(() => {
        if (!isClient) {
            return false;
        }

        // met la fonction get size a jour 
        function handleResize() {
            setWindowSize(getSize());
        }
        
        // fais appel a la fonction handle resize a chaque changement de taille d'eccrant
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // on retourne windows size qui contien la width et le height de lecrant
    return windowSize;
}

export default WindowSize;