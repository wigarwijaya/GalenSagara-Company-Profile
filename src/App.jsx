import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import { Home, Construction, Consultants, NonConstruction, Projects, AboutUs, ContactUs, Career } from './pages'
import { Nav, Footer, Sidebar } from "./components";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/construction-planning" element={<Construction />} />
            <Route path="/services/non-construction-planning" element={<NonConstruction />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;