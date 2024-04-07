import Footer from "./Layout/Footer";
import AdviceMsg from "./components/AdviceMsg";

export default function App() {


  return (
    <>
      <main className='flex flex-col justify-center items-center h-screen w-screen font-family-base font-weight-base'>
        <div className="p-2 flex flex-col justify-center items-center bg-opacity-30 bg-neutral-gray-blue rounded-md max-w-md min-w-[480px] m-3 h-1/2 relative">
          <AdviceMsg />
        </div>
      </main >
      <Footer />
    </>
  )
}

