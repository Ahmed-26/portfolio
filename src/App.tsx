import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText overflow-x-hidden">
      <Navbar />
      <div className="px-3 sm:px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Feature />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <ScrollToTopButton />
        </div>
      </div>
    </main>
  );
}

export default App;