import { Navbar, Container, Form, Button } from 'react-bootstrap'
import styles from './toolbar.module.css'
import Logo from '../Logo/Logo'

const Toolbar = () => {
  return (
    <Navbar className={styles[`color-nav`] + ' py-0'} fixed='top' variant="light" expand='md'>
      <Container fluid>
        <Navbar.Brand className={styles['brand-logo']}> 
          <Logo alt='toolbar-tesselo-logo' width='120' height='40'/>
        </Navbar.Brand>
          <Form className="d-flex position-fixed end-0">
            <Button variant="outline-success" className='me-3'>Search</Button>
          </Form>
      </Container>
    </Navbar>
  )
}

export default Toolbar
