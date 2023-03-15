import React from 'react';

function HomeMainVideo(){
        return(
            <div className = "main-video">
                {/* <img src = "womensCover.jpg" alt = "Mobile Cover" /> */}
                <video autoPlay = "autoplay" muted loop className = "video">
                    <source src = "z.1742585b.mp4" type = "video/mp4" />
                </video>
                
            </div>
        );
}

export default HomeMainVideo;