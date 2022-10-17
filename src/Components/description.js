import React from 'react';

export default function description() {
  return (
    <>
    <div className="container">
 
 <div className="left-column">
   
   <img data-image="red" className="active" src="images/red.png" alt="" />
 </div>


 <div className="right-column">

   <div className="product-description">
     <span>Headphones</span>
     <h1>Beats EP</h1>
     <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
   </div>

   <div className="product-configuration">

     

     </div>

     <div className="cable-config">
       <span>Cable configuration</span>

       <div className="cable-choose">
         <button>Straight</button>
         <button>Coiled</button>
         <button>Long-coiled</button>
       </div>

       <a href="#">How to configurate your headphones</a>
     </div>
   </div>

   <div className="product-price">
     <span>148$</span>
     <a href="#" className="cart-btn">Add to cart</a>
   </div>
 </div>
    </>
  )
}
