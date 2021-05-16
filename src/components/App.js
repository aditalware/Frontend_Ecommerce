import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
import ItemsList from './ItemsList';
import CarouselComponent from './CarouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Dashboard from './Dashboard';
import axios from 'axios';
import items from '../data/lands'

const App = (props) => {
    const[login,setLogin]=React.useState(false);

    const handleSubmit = async(data) => {

         const user= {
             username:data.username,
             password:data.password
         }
//     axios.post(`https://localhost:8080/login`,user)
//   .then(response => response.json())
//   .then(data => {console.log(data);if(data.login){localStorage.setItem('login',{'token':data.username}); setLogin(true)}});
      if(localStorage.getItem(user.username)===user.password){
        setLogin(true);
        localStorage.setItem('login',user.username);
      }
      else{
          alert('User not registered')
      }

    
    };
   
    const handleSSubmit = async(data) => {

        const user= {
            username:data.username,
            password:data.password,
            fullname:data.name,
            email:data.email
        }
        localStorage.setItem(user.username,user.password);
        alert('Registered Successfully')

        // alert(JSON.stringify(user))
//    axios.post(`https://localhost:8080/signup`,user)
//    .then((data)=>alert(JSON.stringify(data)))
//    .catch((err)=>alert(err));


            };
           
    React.useEffect(()=>{
        if(localStorage.getItem('login'))
        {
            
            setLogin(true);
        }
    })
    

    return (
        <div className={'wrapper'}>
            <Header
            login={login}
            setLogin={setLogin}
            handleSubmit={handleSubmit}
            handleSSubmit={handleSSubmit}

            />
             
              
              {
            !login?
            <Jumbotron>
           <CarouselComponent/>
           </Jumbotron>:
           <Dashboard/>

              }
         

            <h1 >Products</h1>
            
            <ItemsList login={login} items={items}/>
        </div>
    )
}

export default (App)