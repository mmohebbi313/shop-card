import React , {useContext, useEffect} from "react";
import './asidBar.css'
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ProductsCont from "../contex/contex";


export default function AsideBar({ show, handleClose }){
  
  const {dataShopCard} = useContext(ProductsCont)
  const {setDataShopCard} = useContext(ProductsCont)

  const deletin = (uu)=>{
    let newData = dataShopCard.filter( rr => rr.name !== uu)
    setDataShopCard(newData)
  }

  const deletAll = ()=> {
    setDataShopCard([])
  }

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>سبد خرید</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <div className="divMain">
                <p style={{marginLeft:'-2vw'}}>name product</p>
                <p style={{marginLeft:'5vw'}}>price</p>
                <p style={{marginLeft:'5vw'}}>cont</p>
            </div> */}
 {/* <div className="divMain" >
               <table style={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
                <tr>
                  <td style={{padding: '2vw'}}>name product</td>
                  <td style={{padding: '2vw'}}>price</td>
                  <td style={{padding: '2vw'}}>cont</td>
                  <td style={{padding: '2vw'}}>status</td>
                </tr>
               </table>
            </div>            */}


            {dataShopCard.map( tt => (
               <div className="div">
               <p style={{marginLeft:'-1vw'}}>{tt.name}</p>
               <p style={{marginLeft:'5vw'}}>{tt.price}$</p>
               <p style={{marginLeft:'5vw'}}>cont: {tt.cont}</p>
               <p onClick={() => deletin(tt.name)} style={{padding:'0.1vw',marginLeft:'3vw' , cursor:'pointer', backgroundColor:'white', borderRadius:'0.3vw', color:'black'}}>delet</p>
               <hr  className="hr"/>
               </div>
              ////////////////
          //     <div className="divMain" >
          //     <table style={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
          //      <tr>
          //        <td style={{padding: '2vw'}}>{tt.name}</td>
          //        <td style={{padding: '2vw'}}>{tt.price}$</td>
          //        <td style={{padding: '2vw'}}>{tt.cont}</td>
          //        <td style={{padding: '2vw'}}><p onClick={() => deletin(tt.name)} style={{padding:'0.1vw',marginLeft:'1vw' , cursor:'pointer', backgroundColor:'white', borderRadius:'0.3vw', color:'black'}}>delet</p></td>
          //      </tr>
          //     </table>
          //  </div> 
            ))}
            <button onClick={()=> deletAll()} style={{marginLeft:'13vw' , cursor:'pointer', backgroundColor:'red', borderRadius:'0.3vw', alignItems:'center', marginTop:'2vw'}}>delet All</button>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose} >close</button>
          </Modal.Footer>
        </Modal>
      );
    
}