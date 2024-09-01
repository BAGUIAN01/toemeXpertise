import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Styles/App.css'
import Home from "./Routes/home/Home";
import About from "./Routes/about/About";
import Project from "./Routes/products/Project";
import WebSiteSolution from "./Routes/solutions/website";
import DesktopAppSolution from "./Routes/solutions/desktopApp";
import MobileAppSolution from "./Routes/solutions/mobileApp";
import ContactUs from "./Routes/contact/ContactUs";
import AISolution from "./Routes/solutions/AI";
import ConsultingSolution from "./Routes/solutions/Consulting";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'  Component={Home}/>
          <Route path='/websiteSolution'  Component={WebSiteSolution} />
          <Route path='/desktopAppSolution'  Component={DesktopAppSolution} />
          <Route path='/mobileAppSolution'  Component={MobileAppSolution} />
          <Route path='/AISolution'  Component={AISolution} />
          <Route path='/ConsultinSolution'  Component={ConsultingSolution} />
          <Route path='/products'  Component={Project} />
          <Route path='/about'  Component={About} />
          <Route path='/contact'  Component={ContactUs}/>
          <Route path='*' element={<NotFoundPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
