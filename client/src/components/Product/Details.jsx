import React, { useState}from 'react'

export default function DetailsThumb () {
    
        const [images, tab, myRef] = useState(0);
        return (
            <div className="thumb" ref={myRef}>
                {
                images.map((img, index) =>(
                    <img src={img} alt="" key={index} 
                    onClick={() => tab(index)}
                    />
                ))
                }
            </div>
        )
    
}

