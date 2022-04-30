import { Navbar, Container, Form } from 'react-bootstrap'
import styles from './toolbar.module.css'
import Logo from '../Logo/Logo'

const Toolbar = (props: any) => {
  return (
    <Navbar className={styles[`color-nav`] + ' py-0'} fixed='top' variant="light" expand='md'>
      <Container fluid>
        <Navbar.Brand className={styles['brand-logo']}> 
          <Logo alt='toolbar-tesselo-logo' width='120' height='40'/>
        </Navbar.Brand>
        <Form className="d-flex position-fixed end-0">
          <Form.Check
            isValid
            type="switch"
            className={styles['label-color'] + ' mt-1 fs-5 pe-4'}
            label='NDVI'
            onChange={props.mapTypeSelected}
          />
        </Form>
      </Container>
    </Navbar>
  )
}

export default Toolbar
