import { Row, Button, Col, Container, Form } from "react-bootstrap";
import { ExclamationCircle } from "react-bootstrap-icons";
import { useState } from "react";
import cities from "../../../../../../assets/objects/cities";
import "../css/form_css.css";

const Page1 = ({ cb, handleForm, form }) => {
  const [type, setType] = useState("Room");
  const [city, setCity] = useState("Marrakesh");
  const [district, setDistrict] = useState("Guéliz");
  const [address, setAddress] = useState("Unkown");
  const [urls, setUrls] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = document.getElementById("myform1");
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container fluid style={{ background: "#EFECEC" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "100px",
          paddingTop: "50px",
          width: "80%",
          margin: "4px 10%",
        }}
      >
        <Col lg={3}>
          <div className="boule_active">1</div>
        </Col>
        <Col lg={3}>
          <div className="boule_inactive">2</div>
        </Col>
        <Col lg={3}>
          <div className="boule_inactive">3</div>
        </Col>
        <Col lg={3}>
          <div className="boule_inactive">4</div>
        </Col>
      </Row>
      <Row style={{ background: "#D2ECEF" }}>
        <Row>
          <Col lg={1} sm={1}></Col>
          <Col style={{ justifyContent: "center" }}>
            <h3 style={{ marginTop: "50px" }}>General Info</h3>
            <div className="barre_sous_titre"></div>
            <div style={{ display: "flex" }}>
              <ExclamationCircle color="red" size={20} />
              <h5 style={{ marginLeft: "20px", marginBottom: "30px" }}>
                Fields with (<span style={{ color: "red" }}>*</span>) are
                required !
              </h5>
            </div>
            <Form
              encType="multipart/form-data"
              id="myform1"
              noValidate
              validated={validated}
            >
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "20px" }}>
                  (<span style={{ color: "red" }}>*</span>) Category
                </Form.Label>
                <Form.Select
                  style={{
                    boxShadow:
                      "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                  }}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="Room">Room</option>
                  <option value="Apartment" selected>
                    Apartement
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "20px" }}>
                  (<span style={{ color: "red" }}>*</span>) City
                </Form.Label>
                <Form.Select
                  style={{
                    boxShadow:
                      "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                  }}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  required
                >
                  {cities.map((city) => (
                    <option value={city["ville"]} key={city.id}>
                      {city["ville"]}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "20px" }}>
                  (<span style={{ color: "red" }}>*</span>) Region/District
                </Form.Label>
                <Form.Select
                  style={{
                    boxShadow:
                      "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                  }}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                  }}
                  required
                >
                  <option value="Guéliz" selected>
                    Guéliz
                  </option>
                  <option value="Jnane Awrad">Jnane Awrad</option>
                  <option value="Sidi Abad">Sidi Abad</option>
                  <option value="Abwab Guéliz">Abwab Guéliz</option>
                  <option value="Saada">Saada</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "20px" }}>
                  (<span style={{ color: "red" }}>*</span>) Adresse
                </Form.Label>
                <Form.Control
                  style={{
                    boxShadow:
                      "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                  }}
                  placeholder="Type the address/location"
                  onChange={(a) => {
                    setAddress(a.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "20px" }}>Url Maps</Form.Label>
                <Form.Control
                  style={{
                    boxShadow:
                      "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                  }}
                  placeholder="Type the location url"
                  onChange={(e) => {
                    setUrls(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "100px",
                marginBottom: "100px",
              }}
            >
              <Button
                type="submit"
                className="btn btn-default"
                style={{ color: "#07436b", backgroundColor: "#fff" }}
                disabled
              >
                Back
              </Button>
              <Button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  if (document.getElementById("myform1").checkValidity()) {
                    handleForm({
                      type: type,
                      city: city,
                      district: district,
                      address: address,
                      url: urls,
                    })();
                    cb(true);
                  } else {
                    alert("Ops! verify the required fields please!!");
                  }
                }}
              >
                Continue
              </Button>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
Page1.defaultProps = {
  cb: () => {},
  handleForm: () => {},
  form: null,
};
export default Page1;
