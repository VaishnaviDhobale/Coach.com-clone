
import { Link } from "react-router-dom";
import "./Homepage.css";

const HomePage=()=>{
    
    
    return (
        <>
        <div className="purple">
           <h1>What we carry makes us stronger</h1> 
           <p>And the Tabby bag holds it-out dreams, experiences and the many sides of ourselves.</p>
           <p>#InMy Tabby</p>
        </div>
        <div className="video">
<video autoplay={true}  loop={true} width="100%" > <source src="https://assets.coach.com/na/media/web-production/202303/0315-main-video-desktop.mp4" /></video>
        </div>
        {/* <div>
        <iframe width="100%" src="https://assets.coach.com/na/media/web-production/202303/0315-main-video-desktop.mp4"></iframe>
        </div> */}

        {/* imageboxes */}
        <div className="grid">
            <div><a href=""><img  src="https://i.postimg.cc/156p9zK7/Whats-App-Image-2023-03-29-at-16-04-46.jpg"/></a></div>
            <div><a href=""><video src="https://assets.coach.com/na/media/web-production/202303/LNX_DESKTOP_LP_SLICE.mp4"/></a></div>
            <div><a href=""><video  src="https://assets.coach.com/na/media/web-production/202303/CAMI_DESKTOP_LP_SLICE.mp4"/></a></div>
            <div><a href=""></a><img  src="https://i.postimg.cc/pTTfxY0K/Whats-App-Image-2023-03-29-at-16-17-14.jpg"/></div>
            <div><a href=""></a><img src="https://i.postimg.cc/9Fpy4nvy/Whats-App-Image-2023-03-29-at-16-17-14-1.jpg"/></div>
            <div><a href=""></a><video src="https://assets.coach.com/na/media/web-production/202303/KOKI_DESKTOP_LP_SLICE.mp4"/></div>
            <div><a href=""><video src="https://assets.coach.com/na/media/web-production/202303/JINYAN_DESKTOP_LP_SLICE.mp4"></video></a></div>
            <div><a href=""></a><img src="https://i.postimg.cc/RZ2hq1Vc/Whats-App-Image-2023-03-29-at-16-17-14-2.jpg"/></div>
        </div>
            
    
      </>  
    )
    
    
}
export default HomePage