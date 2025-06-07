import React , {useState , useEffect, useContext} from "react";
import MainNavbar from "./navbar/navbar";
import CardProduct from "./cardProduct/card";
import products from "./data/data";
import MainToast from "./toast/toast";
import AsideBar from "./asidBar/asidBar";
import ProductsCont from "./contex/contex";


export default function App() {
  const [pruduct , setProduct] = useState(products)
  const [status , setStatus] = useState(false)
  const [showCart, setShowCart] = useState(false);
  const [dataShopCard , setDataShopCard] = useState([])



  const changeStatus =()=> {
    setStatus(true) 

  }

      useEffect( ()=>{
     if (status) {
      setTimeout(()=> {
        setStatus(false)
      }, 2000)
     }
    }, [status])
   
    const statusBag =()=>{
      setShowCart( prev => !prev)
    }
    const funStatus = ()=> {
      setStatus(false)
    }
  return (
    <div>
      <ProductsCont.Provider value={{
       dataShopCard,
       setDataShopCard
      }
      }>
      <MainNavbar bag={statusBag}/>
      <br />
      <br />
      <br />
      <br />
      <div style={{display:'absolute', zIndex:'1000'}}>
      <AsideBar show={showCart} handleClose={() => setShowCart(false)}/>
      </div>
      <div style={{display:'flex' , flexWrap:"wrap", gap:'3vw', justifyContent:'center', gap:'5vw',}}>
        {pruduct.map( data => (
      <CardProduct props={data} change={changeStatus} />
        ))}

      </div>
      {status && <MainToast funStatus={funStatus}/>}
      </ProductsCont.Provider>
    </div>
    
  );
}

