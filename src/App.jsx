import './App.css';
import Header from './Components/Header';
import Main from './Sections/Main';
import About from './Sections/About';
import Experience from './Sections/Experince';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

function App() {
  return (
    <div className=' px-10 md:px-20 lg:px-[100px] bg-custom-gradient text-white py-5'>
      <div className='grid grid-cols-1 gap-10'>
        <Header />
        <div className='md:mt-20 lg:mt-20'>
          <section id="home"><Main /></section>
          <div className='mt-10'><section id="about"><About /></section></div>
          <div className='flex justify-center mt-10'>
            <section id="experience"><Experience /></section>
          </div>
          <div className='flex justify-centermt-10'>
            <section id="project"><Projects /></section>
          </div>
          <div className='mt-10'>
            <section id="contact" className='flex justify-center'><Contact /></section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
