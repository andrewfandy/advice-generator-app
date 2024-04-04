import iconDice from './assets/icon-dice.svg'
import dividerMobile from './assets/pattern-divider-mobile.svg'
import dividerDesktop from './assets/pattern-divider-desktop.svg'
import AdviceHooks from "./hooks/AdviceHooks"

function Error() {
  return (
    <>
      <h1>ERROR!!!</h1>
    </>
  )
}
export default function App() {
  const {advice, error} = AdviceHooks();

  return (
    <>
      <main className='flex flex-col justify-center items-center h-screen w-screen font-family-base font-weight-base'>
        <div className="p-2 flex flex-col justify-center items-center bg-opacity-30 bg-neutral-gray-blue rounded-md sm:w-full w-1/2 m-3 h-1/2 relative">

          {error && <Error/>}

          <div className="w-2/3 bg-red-500 flex flex-col text-center">
          {
            !advice ?     
              <h1 className="text-3xl underline">Loading...</h1>
              :
              <>
              <div className="tracking-base-widest text-xs mb-4 text-primary-neon">
                ADVICE #{advice?.slip.id}
              </div>
              <p className="opacity-50 text-size-base">"{advice?.slip.advice}"</p>
              <img className='mt-10 md:hidden' src={dividerDesktop} alt="Divider Desktop" />
              <img className='mt-10 hidden md:visible' src={dividerMobile} alt="Divider Mobile" />
              </>
          }
          </div>
          <button className='rounded-full p-3 bg-primary-neon hover:shadow-base absolute -bottom-5'>
            <img src={iconDice} alt="Pattern Divider Desktop" />
          </button>


        </div>
      </main>
    </>
  )
}

