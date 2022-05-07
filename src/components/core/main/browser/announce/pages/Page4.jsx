import {
  Row,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { ExclamationCircle, Phone } from "react-bootstrap-icons";
import { useState } from "react";
import "../css/form_css.css";
import { getUrl, isProduction } from "../../../../../../logic/utils/urls";
import axios from "axios";
import { useSelector } from "react-redux";

const Page4 = ({ cb, handleForm, form }) => {
  const { token } = useSelector((state) => state.user);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const newForm = new FormData();
    handleForm({ token })();
    Object.keys(form).forEach((key) => {
      newForm.append(`${key}`, form[key]);
    });
    const pushPost = async () => {
      for (let pair of newForm.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      try {
        const { data } = await axios.post(
          getUrl(isProduction, "api/posts/new-post"),
          newForm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(data);
        if (data.error) {
          alert(data.message);
        } else {
          cb(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const formItem = document.getElementById("myform4");
    if (!formItem.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      alert("Ops! verify the required fields please!!");
      return;
    }
    pushPost();
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
          <div className="boule_active">3</div>
        </Col>
        <Col lg={3} style={{ zIndex: "1" }}>
          <div className="boule_active">4</div>
        </Col>
      </Row>
      <Row style={{ background: "#D2ECEF" }}>
        <Row>
          <Col lg={1} sm={1}></Col>
          <Col style={{ justifyContent: "center" }}>
            <h3 style={{ marginTop: "50px" }}>Personal Info</h3>
            <div className="barre_sous_titre"></div>
            <div style={{ display: "flex" }}>
              <ExclamationCircle color="red" size={20} />
              <h5 style={{ marginLeft: "20px", marginBottom: "10px" }}>
                The fields with (<span style={{ color: "red" }}>*</span>) are
                required !!
              </h5>
            </div>
            <div
              style={{ backgroundColor: "#fff", padding: "20px", zIndex: "0" }}
            >
              <Form
                encType="multipart/form-data"
                id="myform4"
                noValidated
                validated={validated}
              >
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Phone color="black" size={20} />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Phone Number"
                    aria-label="phoneNumberephone"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      // setPhoneNumber(e.target.value);
                      handleForm({ phoneNumber: e.target.value })();
                    }}
                  />
                </InputGroup>
              </Form>
            </div>
            <div
              style={{
                zIndex: "1",
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
              <Button type="submit" onClick={handleSubmit}>
                Finish
              </Button>
            </div>
          </Col>
          <Col lg={1} sm={1}></Col>
        </Row>
      </Row>
    </Container>
  );
};
Page4.defaultProps = {
  cb: (page) => {},
  handleForm: () => {},
  form: null,
};
export default Page4;
