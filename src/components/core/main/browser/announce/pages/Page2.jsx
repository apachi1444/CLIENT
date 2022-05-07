import { Row, Button, Col, Container, Form } from "react-bootstrap";
import { ExclamationCircle } from "react-bootstrap-icons";
import { useState } from "react";
import "../css/form_css.css";

const Page2 = ({ cb, handleForm, form }) => {
  const [title, setTitle] = useState("Post");
  const [price, setPrice] = useState(1000);
  const [description, setDescription] = useState("Description");
  const [roomsNumber, setRoomsNumber] = useState(1);
  const [surface, setSurface] = useState("20-30");
  const [caution, setCaution] = useState("0-500");
  const [others, setOthers] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = document.getElementById("myform2");
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container fluid style={{ background: "#EFECEC" }}>
      <Row
        style={{
          paddingBottom: "100px",
          paddingTop: "50px",
          width: "80%",
          margin: "4px 10%",
        }}
      >
        <Col lg={3} style={{ zIndex: "1" }}>
          <div className="boule_active">1</div>
        </Col>
        <Col lg={3} style={{ zIndex: "1" }}>
          <div className="boule_active">2</div>
        </Col>
        <Col lg={3} style={{ zIndex: "1" }}>
          <div className="boule_inactive">3</div>
        </Col>
        <Col lg={3} style={{ zIndex: "1" }}>
          <div className="boule_inactive">4</div>
        </Col>
      </Row>
      <Row style={{ background: "#D2ECEF" }}>
        <Row style={{ width: "100%" }}>
          <Col lg={1} sm={1}></Col>
          <Col
            lg={16}
            sm={16}
            style={{ justifyContent: "center", margin: "2px auto" }}
          >
            <h3 style={{ marginTop: "50px" }}>General Description</h3>
            <div className="barre_sous_title"></div>
            <div style={{ display: "flex" }}>
              <ExclamationCircle color="red" size={20} />
              <h5 style={{ marginLeft: "20px", marginBottom: "10px" }}>
                Fields with (<span style={{ color: "red" }}>*</span>) are
                required!
              </h5>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "20px" }}>
              <Form id="myform2" noValidated validated={validated}>
                <Row
                  className="mb-3"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <Form.Group
                    as={Col}
                    controlId="formGridTitle"
                    style={{ minWidth: "150px" }}
                  >
                    <Form.Label style={{ fontSize: "20px" }}>
                      (<span style={{ color: "red" }}>*</span>) Title
                    </Form.Label>
                    <Form.Control
                      style={{
                        boxShadow:
                          "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                      }}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridPrice"
                    style={{ minWidth: "150px" }}
                  >
                    <Form.Label style={{ fontSize: "20px" }}>
                      (<span style={{ color: "red" }}>*</span>) Price
                    </Form.Label>
                    <Form.Control
                      style={{
                        boxShadow:
                          "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                      }}
                      inputMode="numeric"
                      onChange={(a) => {
                        setPrice(a.target.value);
                      }}
                      required
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="FormDescription">
                  <Form.Label style={{ fontSize: "20px" }}>
                    (<span style={{ color: "red" }}>*</span>) Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{
                      boxShadow:
                        "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                      resize: "none",
                    }}
                    required
                    rows={5}
                    onChange={(a) => {
                      setDescription(a.target.value);
                    }}
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridRooms">
                    <Form.Label style={{ fontSize: "15px" }}>
                      Number of
                      <br />
                      rooms
                    </Form.Label>
                    <Form.Select
                      style={{
                        boxShadow:
                          "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                      }}
                      onChange={(a) => {
                        setRoomsNumber(a.target.value);
                      }}
                    >
                      <option value="1" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridSize">
                    <Form.Label style={{ fontSize: "15px" }}>
                      Total Surface
                      <br />
                      (in m²)
                    </Form.Label>
                    <Form.Select
                      style={{
                        boxShadow:
                          "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                      }}
                      onChange={(e) => {
                        setSurface(e.target.value);
                      }}
                    >
                      <option value="10-20" selected>
                        10-20
                      </option>
                      <option value="20-30">20-30</option>
                      <option value="30-40">30-40</option>
                      <option value="40-">40-</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCaution">
                    <Form.Label style={{ fontSize: "15px" }}>
                      Caution
                      <br />
                      (in drhs)
                    </Form.Label>
                    <Form.Select
                      style={{
                        boxShadow:
                          "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                      }}
                      onChange={(a) => {
                        setCaution(a.target.value);
                      }}
                      required
                    >
                      <option value="0-500" selected>
                        0-500
                      </option>
                      <option value="500-1000">500-1000</option>
                      <option value="1000-1500">1000-1500</option>
                      <option value="1500-">1500-</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <h5
                  style={{
                    textDecoration: "underline",
                    marginBottom: "30px",
                    color: "blueviolet",
                    letterSpacing: "1px",
                  }}
                >
                  Additional
                  <br />
                  Services
                </h5>
                <Form.Group as={Col} controlId="formGridOthers">
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Wifi"
                    name="group1"
                    type="checkbox"
                    id={"wifi"}
                  />
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Climatisation"
                    name="group1"
                    type="checkbox"
                    id={"clim"}
                  />
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Chauffage"
                    type="checkbox"
                    id={"chauffage"}
                  />
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Parking"
                    type="checkbox"
                    id={"Parking"}
                  />
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Concierge"
                    type="checkbox"
                    id={"concierge"}
                  />
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Security"
                    type="checkbox"
                    id={"securite"}
                  />
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Balcony"
                    type="checkbox"
                    id={"balcon"}
                  />
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Terrace"
                    type="checkbox"
                    id={"terasse"}
                  />
                  <Form.Check
                    onChange={(e) => {
                      setOthers(others + " " + e.target.id);
                    }}
                    inline
                    label="Others"
                    type="checkbox"
                    id={"autres"}
                  />
                </Form.Group>
              </Form>
            </div>
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
                onClick={() => {
                  cb(false);
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  if (document.getElementById("myform2").checkValidity()) {
                    handleForm({
                      title: title,
                      price: price,
                      description: description,
                      roomsNumber: roomsNumber,
                      surface: surface,
                      caution: caution,
                      others: others,
                    })();
                    cb(true);
                  } else {
                    alert("Fill out the required fields please!!");
                  }
                }}
              >
                Continue
              </Button>
            </div>
          </Col>
          <Col lg={1} sm={1}></Col>
        </Row>
      </Row>
    </Container>
  );
};

Page2.defaultProps = {
  cb: () => {},
  handleForm: () => {},
  form: null,
};
export default Page2;
