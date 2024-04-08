import Footer from "./Layout/Footer";
import AdviceMsg from "./components/AdviceMsg";

export default function App() {


  return (
    <>
      <main className='flex flex-col justify-center items-center h-screen w-screen font-family-base font-weight-base'>
      <AdviceMsg />
      <Footer />
      </main >
    </>
  )
}

