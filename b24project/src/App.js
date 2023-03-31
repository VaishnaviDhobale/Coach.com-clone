
import Navbar from './userSide/components/Navbar';
import './App.css';
import MainRoutes from './MainRoutes';

import Footer from './userSide/components/FooterSection';
import TopNavbar from './userSide/components/TopNav';



function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <Navbar />
     <MainRoutes/>
     {/* <Footer/> */}

    </div>
  );
}


export default App;
