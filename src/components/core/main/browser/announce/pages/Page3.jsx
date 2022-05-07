import {
  Row,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { ExclamationCircle, Phone, Camera } from "react-bootstrap-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUrl, isProduction } from "../../../../../../logic/utils/urls";
import axios from "axios";
import "../css/form_css.css";
import Processing from "../../../../../home/main/sign/signUp/Processing";

const Page3 = ({ cb, handleForm, form }) => {
  const { token } = useSelector((state) => state.user);
  const [validated, setValidated] = useState(true);
  const [posting, setPosting] = useState(false);
  const checkSize = (elems) => {
    let maxSize = elems[0].size;
    for (let i = 1; i < elems.length; i++) {
      if (maxSize < elems[i].size) {
        maxSize = elems[i].size;
      }
    }
    return maxSize;
  };

  const handleSubmit = (event) => {
    setPosting(true);
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
        setPosting(false);
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
    const formItem = document.getElementById("myform3");
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
          <div className="boule_inactive">4</div>
        </Col>
      </Row>
      <Row style={{ background: "#D2ECEF" }}>
        <Row>
          <Col lg={1} sm={1}></Col>
          <Col lg={10} sm={10} style={{ justifyContent: "center" }}>
            <h3 style={{ marginTop: "50px" }}>IMAGES</h3>
            <div className="barre_sous_titre"></div>
            <div style={{ display: "flex" }}>
              <ExclamationCircle color="red" size={20} />
              <h5 style={{ marginLeft: "20px", marginBottom: "10px" }}>
                The fields with (<span style={{ color: "red" }}>*</span>) are
                required
              </h5>
            </div>
            <div
              style={{ backgroundColor: "#fff", padding: "20px", zIndex: "0" }}
            >
              <Form
                encType="multipart/form-data"
                id="myform3"
                noValidated
                validated={validated}
              >
                <Row className="mb-3">
                  <Col lg={6}>
                    <h4 style={{ textDecoration: "underline" }}>
                      Images
                      <br />
                      (you can upload at most 8, maximal size 3Mb each)
                    </h4>
                  </Col>
                  <div
                    style={{
                      width: "400px",
                      border: "2px dashed blueviolet",
                      height: "400px",
                      background: "white",
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Form.Group
                      as={Col}
                      controlId="formGridPrice"
                      style={{ display: "grid", placeItems: "center" }}
                    >
                      <Camera
                        color="blue"
                        style={{
                          width: "60%",
                          height: "auto",
                          margin: "2px auto",
                        }}
                      />
                      <Form.Control
                        type="file"
                        accept="image/*"
                        name="image"
                        style={{
                          boxShadow:
                            "0 3px 6px rgb(0 0 0 / 6%), 0 1px 2px rgb(0 0 0 / 13%)",
                          borderRadius: 10,
                        }}
                        required
                        multiple
                        onChange={(img) => {
                          if (img.target.files.length > 8) {
                            alert(
                              "Vous ne pouvez pas depasser plus de 8 images"
                            );
                            document.getElementById("formGridPrice").value =
                              null;
                            setValidated(false);
                          } else if (
                            checkSize(img.target.files) >
                            3 * 1024 * 1024
                          ) {
                            alert("Images can't have more than 3Mb");
                            document.getElementById("formGridPrice").value =
                              null;
                            setValidated(false);
                          } else {
                            handleForm({
                              images: [...form.images, ...img.target.files],
                            })();
                            setValidated(true);
                          }
                        }}
                      />
                    </Form.Group>

                    <InputGroup className="mb-3 mt-4">
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
                  </div>
                </Row>
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
              <Button
                type="submit"
                onClick={(e) => {
                  if (validated) {
                    handleSubmit(e);
                  } else {
                    alert("Plz, validate the form first!");
                  }
                }}
              >
                Finish
              </Button>
              <Processing
                absolute={true}
                msg={"Posting..."}
                width={100}
                flag={posting}
              />
            </div>
          </Col>
          <Col lg={1} sm={1}></Col>
        </Row>
      </Row>
    </Container>
  );
};

Page3.defaultProps = {
  cb: (page) => {},
  handleForm: () => {},
  form: null,
};
export default Page3;
