import UserNavbar from "./userSide/components/UserNavbar";
import "./App.css";
import MainRoutes from "./MainRoutes";
import Footer from "./userSide/components/FooterSection";
import TopNavbar from "./userSide/components/TopNav";


function App() {
  return (
    <div className="App">
     
      <MainRoutes />
      <Footer />
      
    </div>
  );
}

export default App;
