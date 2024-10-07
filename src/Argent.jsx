import React, {useState, useEffect} from 'react';


export default function Argent(){


    const [i, setI] = useState(0);

    useEffect (() => {
        const interval = setInterval(()=>{
            setI((prevI) => prevI + 15);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <>Argents = {i} €</>

}