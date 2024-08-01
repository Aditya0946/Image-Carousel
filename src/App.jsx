import "./App.css";
import Carousel from "./Components/Carousel";

import { slides } from "./data/carouselData.json";

function App() {
  return (
    <div className="App">
      <Carousel data={slides} />
    </div>
  );
}

export default App;
