import { useEffect, useState } from "react"


interface Advice {
    slip: {
        id: number,
        advice: string
    }
}

export default function adviceHooks () {
    const [advice, setAdvice] = useState<Advice | null>(null);
    const [error, setError] = useState<Error | null> (null);


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchApi = async () => {
            try{
                const response = await fetch("https://api.adviceslip.com/advice", {signal});
                const advices = await response.json();
        
                setAdvice(advices)
            }catch(e){
                if(error instanceof Error){
                    setError(error);
                    console.log(e);
                }
            }
    
        }
        fetchApi()
        return () => {
            controller.abort();
          };
    }, [])
    return {advice, error} 
}