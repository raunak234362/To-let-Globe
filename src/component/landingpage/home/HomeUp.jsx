import './style/home.css';
import './style/home3.css';
import { Col, Container, Row } from "react-bootstrap"
import { TopBg } from './TopBg';

export const HomeUp = () =>{
    return(
        <Container fluid className="top-home">
        <Row className="justify-content-center align-items-center h-20">
          <Col xs={12} md={8} lg={6}>
            <h1 className="tagline text-center">Welcome to To-Let Globe</h1>
            <h6 className="headline text-center">
              NO BROKERAGE ON PGS | FLATS | HOUSES | OFFICES
            </h6>
              <TopBg />
          </Col>
        </Row>
      </Container>
    )
}