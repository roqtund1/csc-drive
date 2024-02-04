import { Card } from "./components/Card"
import { Header } from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
    <div className='bg-white text-black'> 
      <Header />
        {/* body  */}
      <div className="flex px-14 mt-10 pb-4 gap-5">
        <div className="w-[60%] flex flex-col gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-[35%]">
          <Sidebar />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
