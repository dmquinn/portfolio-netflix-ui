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
    <div className="App h-full flex flex-col w-full bg-netflix-black">
      <Header />
      <TopImage />
      <div className="divider" />

      <div className="z-40">
        <Popular setIsOpen={setIsOpen} setModalData={setModalData} />
      </div>
      <div className="z-30 -mt-20">
        <Fun setIsOpen={setIsOpen} setModalData={setModalData} />
      </div>
      <div className="z-20 -mt-20">
        <Stack />
      </div>

      <TModal isOpen={isOpen} setIsOpen={setIsOpen} modalData={modalData} />
      <div className="w-100 h-40 bg-netflix-black"></div>
    </div>
  );
}

export default App;
