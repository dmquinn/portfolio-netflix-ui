import { useState } from "react";
import Header from "./Components/Header";
import Popular from "./Components/Popular";
import Stack from "./Components/Stack";
import Fun from "./Components/Fun";
import TopImage from "./Components/TopImage";
import TModal from "./Components/TModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  return (
    <div className="App h-screen flex flex-col w-full bg-netflix-black">
      <Header />
      <TopImage />
      <div className="z-50  from-netflix-black">
        <Popular setIsOpen={setIsOpen} setModalData={setModalData} />
      </div>
      <div className="z-40 -mt-20 bg-netflix-black">
        <Fun />
      </div>
      <div className="z-30 -mt-20 bg-netflix-black">
        <Stack />
      </div>
      <TModal isOpen={isOpen} setIsOpen={setIsOpen} modalData={modalData} />
    </div>
  );
}

export default App;
