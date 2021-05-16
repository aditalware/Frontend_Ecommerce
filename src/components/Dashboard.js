import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron} from 'reactstrap';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Jumbotron className="userdiv">
                    <img className="user" height="100" width="100" src="user.png"/>
                    <h1>Welcome {localStorage.getItem('login')}!</h1>
                    <div style={{textAlign:"center"}}>
                    <p>We are very happy to server you. Surf a large variety of products and get your self some unique stuffs at your door steps!</p>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

Dashboard.propTypes = {};

export default Dashboard;
