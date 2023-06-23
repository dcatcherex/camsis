import './App.css'
import Hero from './components/Hero/Hero'
import Privacy from './pages/Privacy'
import Cye from './pages/Cye'
import Footer from './components/Footer'
import Nav from './components/Nav'





function App() {

  return (
    <>
<header>
    <Nav />
</header>
      <Cye />
    <div className='max-w-[1280px] mx-auto p-6'>
      {/* <Privacy /> */}
        {/* <Hero /> */}
    </div>

    {/* footer */}
   <Footer />

    </>
  )
}

export default App
