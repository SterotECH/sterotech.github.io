import { Navbar } from "./components";
import { About, Header, Footer, Work, Testimonial, Skills } from "./container";
import '@/App.scss'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
