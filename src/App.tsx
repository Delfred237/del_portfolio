import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navbar />

      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <Blog />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
    // <ThemeProvider defaultTheme="dark">
    //   <BrowserRouter>
    //     <Routes>
    //       {/* Route parente englobant le layout principal */}
    //       <Route path="/" element={<MainLayout />}>
    //         <Route index element={<Home />} />
    //         <Route path="about" element={<About />} />
    //         <Route path="projects" element={<Projects />} />
    //         <Route path="blog" element={<Blog />} />
    //         <Route path="contact" element={<Contact />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </ThemeProvider>
  );
}
