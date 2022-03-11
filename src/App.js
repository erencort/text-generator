import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import ParagraphsCount from "./components/ParagraphsCount";
import ParagraphsType from "./components/ParagraphsType";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="input-container">
          <ParagraphsCount />
          <ParagraphsType />
        </div>
        <div className="content-container">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
