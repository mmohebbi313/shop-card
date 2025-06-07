import React , {useContext} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ProductsCont from "../contex/contex";



export default function CardProduct({props,change}){

  const {setDataShopCard} = useContext(ProductsCont)
  const {dataShopCard} = useContext(ProductsCont)

  const injs = (yy)=> {

    let isThisPage = dataShopCard.some( tt => tt.name == yy)
    change()

    
    console.log(isThisPage);
    
    

    if (!isThisPage) {
      let  buyProduct = {
        name : props.name,
        price : props.price,
        cont: 1
      }
      setDataShopCard( prev => [...prev , buyProduct])
    }
    else{
      let dataShop = [...dataShopCard]

      let newData = dataShop.map( ttt => {
        if(ttt.name === yy){
          ttt.cont += 1
        } 
        return ttt
      })

      setDataShopCard(newData)
    }
}

    return (
        <Card  style={{ width: '18rem' , }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <h5 style={{textAlign:'center'}}>
                {props.price}$
            </h5>
            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
             <br />
            <Button variant="primary" onClick={()=>injs(props.name)}>buy</Button>
            </div>
          </Card.Body>
        </Card>
        
      );
    }