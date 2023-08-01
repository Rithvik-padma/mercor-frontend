import './App.css';
import Fullpage, {FullPageSections, FullpageSection} from '@ap.cx/react-fullpage'
import Hero from './pages/hero'
import Payments from './pages/payments'
import Banking from './pages/banking'
import Boost from './pages/boost'
import Investing from './pages/investing'

function App() {

  return (
    <div className='snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0'>
      <Hero/>
      <Payments/>
      <Banking/>
      <Boost/>
      <Investing/>
    </div>
  );
}

export default App;
