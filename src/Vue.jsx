import React, {useState, useEffect} from 'react';


export default function Vue(){


    const [i, setI] = useState(0);

    useEffect (() => {
        const interval = setInterval(()=>{
            setI((prevI) => prevI + 10);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <>Vues = {i}</>

}