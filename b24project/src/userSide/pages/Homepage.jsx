
import { Link } from "react-router-dom";
import "./Homepage.css";
import { Button } from "@chakra-ui/react";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md"

const HomePage=(props)=>{
    // autoplay muted controls loop autoplay
// props are given for imageSlider

    
        const slides=[{image:`https://images.coach.com/is/image/Coach/225_mti_a0?$imageRec$`},
        {image:`https://images.coach.com/is/image/Coach/ca193_b4bk_a0?$imageRec$`},
        {image:`https://images.coach.com/is/image/Coach/ch813_b4bk_a0?$imageRec$https://images.coach.com/is/image/Coach/ch813_b4bk_a0?$imageRec$`},
        {image:`https://images.coach.com/is/image/Coach/5789_b4ar2_a0?$imageRec$`},
        {image:`https://images.coach.com/is/image/Coach/c3489_b4bk_a0?$imageRec$`},
        {image:`https://images.coach.com/is/image/Coach/c8568_b4nq4_a0?$imageRec$`},
        {image:`https://images.coach.com/is/image/Coach/22952_liblk_a0?$imageRec$`},
        {image:`https://images.coach.com/is/image/Coach/cg966_pog_a0?$imageRec$`},


    ]
        

    
        const slideLeft=()=>{
            var slider=document.getElementById("slider");
            slider.scrollLeft=slider.scrollLeft+500;
        }
    
        const SlideRight=()=>{
            var slider=document.getElementById("slider")
            slider.scrollLeft=slider.scrollLeft-500;
        
        }

    
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
            {/* <div><a href=""><img width="99%" src="https://i.postimg.cc/156p9zK7/Whats-App-Image-2023-03-29-at-16-04-46.jpg"/></a></div> */}
            <div><a href=""><video loop muted autoplay="autoplay" src="https://assets.coach.com/na/media/web-production/202303/LNX_DESKTOP_LP_SLICE.mp4"/></a></div>
            <div><a href=""><video loop muted autoplay="autoplay" src="https://assets.coach.com/na/media/web-production/202303/CAMI_DESKTOP_LP_SLICE.mp4"/></a></div>
            {/* <div><a href=""></a><img width="93%"  src="https://i.postimg.cc/pTTfxY0K/Whats-App-Image-2023-03-29-at-16-17-14.jpg"/></div> */}
            {/* <div><a href=""></a><img width="95%" src="https://i.postimg.cc/9Fpy4nvy/Whats-App-Image-2023-03-29-at-16-17-14-1.jpg"/></div> */}
            <div><a href=""></a><video loop muted autoplay="autoplay" src="https://assets.coach.com/na/media/web-production/202303/KOKI_DESKTOP_LP_SLICE.mp4"/></div>
            <div><a href=""><video loop muted autoplay="autoplay" src="https://assets.coach.com/na/media/web-production/202303/JINYAN_DESKTOP_LP_SLICE.mp4"></video></a></div>
            {/* <div><a href=""></a><img width="95%" src="https://i.postimg.cc/RZ2hq1Vc/Whats-App-Image-2023-03-29-at-16-17-14-2.jpg"/></div> */}
        </div>

        {/* purple section */}
        <div className="camp">
            <Button marginTop="10px"  ><a href="">CAMPAIGN</a></Button>
            <h1>There is a Tabby for everyone</h1>
            <h1>(and every side of you)</h1>
            <Button marginTop="25px"><a href="">SEE TABBY BAGS</a></Button>
        </div>
        {/* FIVE BAG SECTION */}
        <div className="bagz">
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby1_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button marginTop="70px" > SHOP TABBY WRISLET</Button></div>
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby2_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button marginTop="70px">SHOP TABBY MESSENGER</Button></div>
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby3_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button marginTop="70px">SHOP PILLOW BABY</Button></div>
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby4_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button marginTop="70px">SHOP TABBY BOX BAG</Button></div>
            <div><a href=""><img src="https://cms.coach.com/i/coach/0315-tabby5_1?&w=384&sm=aspect&aspect=1:1&fmt=webp&$qlt_med$"/></a><Button marginTop="70px">SHOP TABBY 26</Button></div>
        </div>
        {/* pink section video with photo */}
        <div className="pinkz">
            <div><video loop muted autoplay="" src="https://assets.coach.com/na/media/web-production/202303/0324-metavers-desktop.mp4"/></div> 
        </div>


        {/* textbox */}

        <div className="textbox">
            <h1>We look good together.</h1>
            
            </div>
            
    {/* slider */}
    

    <div id="main-slider-container">
        <MdKeyboardArrowLeft size={40} position="absolute" className="slide-icon left" onClick={slideLeft}/>
        
        <div id="slider">
           { 
           slides.map((slide,index)=>{
                return(
<div className="slider-card" key={index}>
    {/* <div className="slide-img" style={{backgroundImage:`url(${slide.image})`}}></div>
     */}
<img src="https://images.coach.com/is/image/Coach/ch813_b4bk_a0?$imageRec$"/>

</div>


                )
            })
        }
            </div>
        <MdKeyboardArrowRight size={40} className="slide-icon right" onClick={SlideRight}/>
    </div>
        {/*gray box  */}
        <div className="gray">
            <h1>Coach at your service</h1>
        </div>
        {/* gray box grid */}

        <div className="graygrid">
            <div><img src="https://cms.coach.com/i/coach/icon-sms.png"/><h1>Take $15 off $150+.</h1><p>Just Sign up for text updates</p>      </div>
            <div><img src="https://cms.coach.com/i/coach/coach-services-email"/><h1>Get 10% off $150+.</h1><p>Sign up for emails for your code.</p></div>
            <div><img src="https://cms.coach.com/i/coach/icon-klarna.png"/><h1>Buy Now, Pay Later</h1><p>Select stores now offer pickup and virtual shopping appointments.</p></div>
            <div><img src="https://cms.coach.com/i/coach/icon-chat.png"/><h1>24/7 Customer Care</h1><p>Questions? Ask away. We love hearing from you.</p></div>
            <div><img src="https://cms.coach.com/i/coach/icon-free-ship.png"/><h1>Free Shipping & Returns</h1><p>On all orders.</p></div>
            <div><img src="https://cms.coach.com/i/coach/icon-customize.png"/><h1>Coach Create Customization</h1><p>Our craftsmen can embellish, rivet, or digitally print your designs.</p></div>
            <div><img src="https://cms.coach.com/i/coach/icon-repairs.png"/><h1>One-Year Warranty & Repairs</h1><p>All repairs are handled with care</p></div>
            <div><img src="https://cms.coach.com/i/coach/icon-bopus.png"/><h1>More Ways to Shop</h1><p>When a friend makes their first purchase of $250. (Get $30 if you sign in or sign up to be an Insider!)</p></div>
            <div><img src="https://cms.coach.com/i/coach/icon-invite-friend.png"/><h1>Give $20, get $20.</h1><p>Instant rewards & more good things.</p></div>
            <div><img src="https://cms.coach.com/i/coach/coach-insider-hp-icon"/><h1>Coach Insider</h1><p>Complimentary gift wrap and more.</p></div>
            <div><p></p></div>
            <div><p></p></div>
            <div><img src="https://cms.coach.com/i/coach/icon-gift-services.png"/><h1>Gift Services</h1><p>Complimentary gift wrap and more.</p></div>
            <div><p></p></div>
            <div><p></p></div>
        </div>
        
        

        
            
    
      </>  
    )
    
    
}

export default HomePage
