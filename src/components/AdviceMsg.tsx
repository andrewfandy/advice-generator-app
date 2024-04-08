import iconDice from '../assets/icon-dice.svg'
import dividerMobile from '../assets/pattern-divider-mobile.svg'
import dividerDesktop from '../assets/pattern-divider-desktop.svg'
import { MouseEventHandler } from 'react'
import { useAdvice } from '../hooks/useAdvice'
import { Loading } from './Loading'


type ErrorProps = {
    msg: string;
}
const Error: React.FC<ErrorProps> = ({ msg }) => {
    return (
        <>
            <h1 className='text-3xl'>ERROR!!</h1>
            <p>Message: {msg}</p>
        </>
    )
};


export default function AdviceMsg() {

    const { advice, error, refetch } = useAdvice();
    const handleOnClick: MouseEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        refetch();
        return event;
    };
    return (
        <>
            {
                !advice ?
                    <Loading />
                    :
                    <div className="p-2 mt-auto flex flex-col justify-center items-center bg-opacity-30 bg-neutral-gray-blue rounded-md w-3/4 md:w-[480px] h-1/2 relative">
                        <p className="tracking-base-widest text-xs m-3 text-primary-neon">
                            ADVICE #{advice?.slip.id}
                        </p>
                        <div className="w-full h-full grow flex flex-col p-5 justify-center items-center text-center">
                            {error ?
                                <Error msg={error.message} />
                                :
                                <>
                                    <p className="opacity-50 text-md md:text-xl">"{advice?.slip.advice}"</p>
                                </>
                            }
                        </div>

                        <img className='p-5 mb-3 hidden md:block' src={dividerDesktop} alt="Divider Desktop" />
                        <img className='p-5 mb-3 md:hidden' src={dividerMobile} alt="Divider Mobile" />

                        <button onClick={handleOnClick} className='rounded-full p-3 bg-primary-neon hover:shadow-base absolute -bottom-6'>
                            <img src={iconDice} alt="Pattern Divider Desktop" />
                        </button>
                    </div>
            }
        </>
    )

}