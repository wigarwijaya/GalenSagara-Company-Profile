import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import { Home, Consultants, Projects, NewsAndEvents, AboutUs, ContactUs, Career } from './pages'
import { Nav, Footer, Sidebar } from "./components";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news-and-events" element={<NewsAndEvents />} />
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