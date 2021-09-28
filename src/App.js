import { useState } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import TopImage from "./Components/TopImage";
import Stack from "./Components/Stack";
import TModal from "./Components/TModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  // const [video, setVideo] = useState({})
  return (
    <div className="App">
      <Header />
      <TopImage />
      <Slider setIsOpen={setIsOpen} setModalData={setModalData} />
      <Stack />
      <TModal isOpen={isOpen} setIsOpen={setIsOpen} modalData={modalData} />

      <div className="morePage"></div>
    </div>
  );
}

export default App;
