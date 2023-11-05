import {
  Row,
  Col,
  Card,
  Container,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { FaLinkedinIn, FaXing, FaGithub, FaGoogle } from "react-icons/fa";
import contacts from "../Assets/contact.png";

function Contact() {
  return (
    <div className="fixedheight">
      <Row>
        <h2 className="text-center">CONTACT ME</h2>
        <Col sm={1}></Col>
        <Col sm={5} className="mx-auto">
          <div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
            <button
              onClick={() => {
                window.open("mailto:shantalyshantaly@gmail.com");
              }}
              className="socailmediabtn"
            >
              <FaGoogle className="icon" />
            </button>

            <button
              onClick={() => {
                window.open("https://github.com/Nadia551");
              }}
              className="socailmediabtn"
            >
              <FaGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/nadia551/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://www.xing.com/profile/Nadejda_Strateliuc/cv"
                );
              }}
              className="socailmediabtn"
            >
              <FaXing className="icon" />
            </button>
          </div>
        </Col>
        <Col sm={5}>
          <Image src={contacts} />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
