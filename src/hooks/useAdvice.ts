import { useEffect, useState } from "react"


interface Advice {
    slip: {
        id: number,
        advice: string
    }
}



function useAdvice() {
    const [advice, setAdvice] = useState<Advice | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch("https://api.adviceslip.com/advice", { signal })
            .then(response => response.json())
            .then(data => {
                setAdvice(data)
            })
            .catch(err => {
                setError(err)
                console.log(err)
            })
        console.log(advice)
        return () => { controller.abort() }
    }, [trigger])

    const refetch = () => { setTrigger(t => t + 1) }
    return { advice, error, refetch }
}

export { useAdvice }