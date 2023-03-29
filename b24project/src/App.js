import './App.css';
import MainRoutes from './MainRoutes';
import Navbar from './userSide/components/Navbar';
import TopNavbar from './userSide/components/TopNav';

function App() {
  return (
    <div className="App">
      
      <TopNavbar/>
     <Navbar/>
     <MainRoutes/>
  
    </div>
  );
}


export default App;
