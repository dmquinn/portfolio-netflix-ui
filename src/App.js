import Header from "./Components/Header";
import Slider from "./Components/Slider";
import TopImage from "./Components/TopImage";
import Stack from "./Components/Stack";

function App() {
  return (
    <div className="App">
      <Header />
      <TopImage />
      <Slider />
      <Stack />
      <div className="morePage"></div>
    </div>
  );
}

export default App;
