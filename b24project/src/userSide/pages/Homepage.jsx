
import { Link } from "react-router-dom";
import "./Homepage.css";
import { Button } from "@chakra-ui/react";

const HomePage=()=>{
    // autoplay muted controls loop autoplay

    
    return (
        <>
        {/* top section */}
        <div className="purple">
           <h1>What we carry makes us stronger</h1> 
           <p>And the Tabby bag holds it-out dreams, experiences and the many sides of ourselves.</p>
           <p>#InMy Tabby</p>
        </div>
        <div className="video">
<video  width="100%" loop muted autoplay="autoplay"  ><source src="https://assets.coach.com/na/media/web-production/202303/0315-main-video-desktop.mp4" /></video>
        </div>
        {/* <div>
        <iframe width="100%" src="https://assets.coach.com/na/media/web-production/202303/0315-main-video-desktop.mp4"></iframe>
        </div> */}

        {/* imageboxes */}
        <div className="grid">
            <div><a href=""><img width="99%" src="https://i.postimg.cc/156p9zK7/Whats-App-Image-2023-03-29-at-16-04-46.jpg"/></a></div>
            <div><a href=""><video loop muted autoplay="autoplay" src="https://assets.coach.com/na/media/web-production/202303/LNX_DESKTOP_LP_SLICE.mp4"/></a></div>
            <div><a href=""><video loop muted autoplay="autoplay" src="https://assets.coach.com/na/media/web-production/202303/CAMI_DESKTOP_LP_SLICE.mp4"/></a></div>
            <div><a href=""></a><img width="93%"  src="https://i.postimg.cc/pTTfxY0K/Whats-App-Image-2023-03-29-at-16-17-14.jpg"/></div>
            <div><a href=""></a><img width="95%" src="https://i.postimg.cc/9Fpy4nvy/Whats-App-Image-2023-03-29-at-16-17-14-1.jpg"/></div>
            <div><a href=""></a><video loop muted autoplay="autoplay" src="https://assets.coach.com/na/media/web-production/202303/KOKI_DESKTOP_LP_SLICE.mp4"/></div>
            <div><a href=""><video loop muted autoplay="autoplay" src="https://assets.coach.com/na/media/web-production/202303/JINYAN_DESKTOP_LP_SLICE.mp4"></video></a></div>
            <div><a href=""></a><img width="95%" src="https://i.postimg.cc/RZ2hq1Vc/Whats-App-Image-2023-03-29-at-16-17-14-2.jpg"/></div>
        </div>

        {/* purple section */}
        <div className="camp">
            <Button backgroundColor="black"><a href="">CAMPAIGN</a></Button>
            <h1>There is a Tabby for everyone</h1>
            <h1>(and every side of you)</h1>
            <Button><a href="">SEE TABBY BAGS</a></Button>
        </div>
        {/* FIVE BAG SECTION */}
        <div className="bagz">
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby1_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button>SHOP TABBY WRISLET</Button></div>
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby2_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button>SHOP TABBY MESSENGER</Button></div>
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby3_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button>SHOP PILLOW BABY</Button></div>
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby4_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button>SHOP TABBY BOX BAG</Button></div>
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby5_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button>SHOP TABBY 26</Button></div>
        </div>
        {/* pink section video with photo */}
        <div className="pinkz">
            <div><video loop muted autoplay="" src="https://assets.coach.com/na/media/web-production/202303/0324-metavers-desktop.mp4"/></div> 
        </div>
        <div><img src=""/></div>
        
            
    
      </>  
    )
    
    
}
export default HomePage
