import React from "react";
import Toast from 'react-bootstrap/Toast';



 

function MainToast({funStatus}) {
    return (
      <>
        {[
          'Primary',



        ].map((variant, idx) => (
          <Toast
            className="d-inline-block m-1 fixed-bottom"
            bg={variant.toLowerCase()}
            key={idx}
          >
            <Toast.Header onClick={funStatus}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
                
              />
              <strong className="me-auto">Registration conditions</strong>
              
            </Toast.Header>
            <Toast.Body className={variant === 'Dark' && 'text-white'}>
            The product has been successfully added to your cart.
            </Toast.Body>
          </Toast>
        ))}
      </>
    );
  }
  
  export default MainToast;