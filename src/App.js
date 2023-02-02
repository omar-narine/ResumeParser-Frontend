import axios from "axios";

import Header from "./components/Header";
import Button from "./components/Button";
import FileUpload from "./components/FileUpload";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <SearchBar />
    </div>
  );
}

export default App;
