import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import {Row,Col,Container,Button} from 'react-bootstrap';



    
  
function Item(props){ 
  
  

  
  return(


            <>
         <Col xs={1} md={6} lg={4}>
          <Card height="300" width="200" className="mycard">
            <CardImg  src={`/prod${props.id}.jpg`||`/prod${props.id}.png`} name={props.name} height="320" width="390" />
            <CardBody>

               <div style={{textAlign:"center",margin:"20px 0px"}}>
                 {props.name} 
               </div>
               <div style={{textAlign:"center",margin:"20px 0px"}}>
                 Rs {props.price} /- 
               </div>
              


               <div style={{textAlign:"center",cursor:"pointer"}} >
                 <Button variant="primary" className="but-update" disabled={!props.login}>Add to Cart</Button>
               </div>
              
               


            </CardBody>
            </Card>
         </Col>
         
         </>
)
}



export default Item