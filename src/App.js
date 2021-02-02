import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './componenets/Footer';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'CHUDIER',
      headerLinks: [
          {title: 'home', path:'/'},
          {title: 'contact', path:'/contact'},
      ],
      home: {

      },
      contact: {

      }  
    }
  }


  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand className='display-1 font-weight-bolder'>CHUDIER</Navbar.Brand>
            
            <Navbar.Toggle aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>HOME</Link>
                <Link className='nav-link' to='/contact'>CONTACT</Link>  
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer/>


        </Container>
      </Router>
    )
  }
  
    
}

export default App;
