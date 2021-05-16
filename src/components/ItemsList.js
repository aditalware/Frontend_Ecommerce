import React from 'react'
import Item from './Item';
import {Col,Row,Container} from 'react-bootstrap';
import items from '../data/lands'


const ItemsList = ({items, updateItem,login }) => (
    <Container>

   <Row>

    <ul className={'item-list'} style={{display:"inline-flex"}}>
      
        {items.map((item,k) => (k<3)&&(
            <Item key={ item.id } {...item} login={login}/>
        ))}
    </ul>
   </Row>

   <Row>

    <ul className={'item-list'} style={{display:"inline-flex"}}>
      
        {items.map((item,k) => (k>=3)&&(
            <Item key={ item.id } {...item} updateItem={updateItem} login={login}/>
        ))}
    </ul>
   </Row>


    </Container>
)

export default (ItemsList)