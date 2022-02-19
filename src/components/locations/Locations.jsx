import Modal from "react-modal";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Zone from "./zone/Zone";
import zones from "../../assets/objects/cities";
import "./locations.css";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
function Locations() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <section className="location">
        <div className="inside-location">
          <img
            src="./vendor/images/location.jpg"
            alt="special offers"
            className="img"
            width="460px"
            height="450px"
          />
        </div>

        <div className="col-6">
          <h2 className="section-title">Follow Us Wherever You Are</h2>
          <div className="theMap"> here we will do the map of marrakech</div>
          <div className="the-zones">
            <div>
              <i className="bi bi-pin-map-fill" style={{ color: "red" }}></i>
              <div>
                <h5>Jnane Ourad</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="zones">
        {zones.map((item) => (
          <Zone city={item.ville} key={uuid()} />
        ))}
      </div>

      <button onClick={openModal} className="" data-bs-toggle="modal" data-bs-target={Modal}>
        <i className="bi bi-pin-map-fill" style={{ color: "red" }}></i>
      </button>
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} 
            contentLabel="Example Modal">
        <div className="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="enrollLabel">Enrollment</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className="lead">
                  Fill out this form and we will get back to you
                </p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="first-name" className="col-form-label">First Name:</label>
                    <input type="text" className="form-control" id="first-name"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="last-name" className="col-form-label">Last Name:</label>
                    <input type="text" className="form-control" id="last-name"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="col-form-label">Email:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="col-form-label">Phone:</label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span> 50 Main st Boston
                  MA
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone:</span> (333) 333-3333
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email:</span> (555)
                  enroll@frontendbc.test
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email:</span>
                  student@frontendbc.test
                </li>
              </ul>
            </div>
            <div className="col-md">
              <div id="map">
                <button
                  onClick={openModal}
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target={Modal}
                >
                  <i className="bi bi-pin-map-fill" style={{ color: "red" }}></i>
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                >
                  <div
                    className="modal fade"
                    id="enroll"
                    tabindex="-1"
                    aria-labelledby="enrollLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="enrollLabel">
                            Enrollment
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p className="lead">
                            Fill out this form and we will get back to you
                          </p>
                          <form>
                            <div className="mb-3">
                              <label for="first-name" className="col-form-label">
                                First Name:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="first-name"
                              />
                            </div>
                            <div className="mb-3">
                              <label for="last-name" className="col-form-label">
                                Last Name:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="last-name"
                              />
                            </div>
                            <div className="mb-3">
                              <label for="email" className="col-form-label">
                                Email:
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                              />
                            </div>
                            <div className="mb-3">
                              <label for="phone" className="col-form-label">
                                Phone:
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                id="phone"
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Locations;
