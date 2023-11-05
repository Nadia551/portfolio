import { Row, Col, Card, Container, Image } from "react-bootstrap";
import handson from "../Assets/handson.png";
import ImageModal from "./ImageModal";
import certificate from "../Assets/certificat.jpg";
import google from "../Assets/google.png";
import mongo from "../Assets/mongo.png";
import scrum from "../Assets/scrum.png";
import agilepo from "../Assets/agilepo.png";
import agilesoftware from "../Assets/agilesoftware.png";

function Certificates() {
  return (
    <div>
      <h2 className="text-center p-4">CERTIFICATIONS</h2>
      <Row className="p-0 m-0">
        <Col sm={5}>
          <Image src={handson} className="handson"></Image>
        </Col>
        <Col sm={7}>
          <Row>
            <Col sm={6} className="p-3">
              <ImageModal imageSrc={certificate} />
            </Col>
            <Col sm={6} className="p-3">
              <ImageModal imageSrc={google} />
            </Col>
            <Col sm={6} className="p-3">
              <ImageModal imageSrc={mongo} />
            </Col>
            <Col sm={6} className="p-3">
              <ImageModal imageSrc={scrum} />
            </Col>
            <Col sm={6} className="p-3">
              <ImageModal imageSrc={agilepo} />
            </Col>
            <Col sm={6} className="p-3">
              <ImageModal imageSrc={agilesoftware} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Certificates;
