import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import ScrollProvider from './context/ScrollProvider'

function App() {
  return (
   <ScrollProvider>
      <main>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </main>
   </ScrollProvider>
  )
}

export default App
