import { Route, Routes } from "react-router-dom";
import StyleHome from "./pages/styledComponent/Home";
import Ex1 from "./pages/styledComponent/Ex1";
import Ex2 from "./pages/styledComponent/Ex2";
import Nav from "./components/Nav";
import Theme from "./pages/styledComponent/Theme";
import Section from "./components/Section";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Nav />
      <Section>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/styled" element={<StyleHome />} />
          <Route path="/styled/ex1" element={<Ex1 />} />
          <Route path="/styled/ex2" element={<Ex2 />} />
          <Route path="/styled/theme" element={<Theme />} />
        </Routes>
      </Section>
    </div>
  );
}

export default App;
