import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/UserSlices';

const Navtodo = () => {
  const dispatch = useDispatch()
  const { isAuth } = useSelector(state => state.user)
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {isAuth ? <><Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">profile</Nav.Link>
              <Nav.Link onClick={() => { dispatch(logout()) }}>logout</Nav.Link>
            </> : <> 
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/register">register</Nav.Link></>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navtodo