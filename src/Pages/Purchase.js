import React from "react";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";


export const Purchase = () => {
  


  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Navbar />
        <div style={{ height: "100%" }}>
          <div
            style={{
              padding: "20px 5%",
              height: "calc(100% - 64px)",
              overflow: "scroll",
              background:"whitesmoke",
            }}
          >
            <div
              style={{
                display: "grid",
                background:"white",
                gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
              }}
            >
             <>

    {/* <div className="page-wrapper">
      <div className="content container-fluid">
       <div className="page-header" style={{backgroundColor:'#0b6fa1'}}>
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-sub-header">
                <h3 className="page-title">Edit Students</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="students.html">Student</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card comman-shadow">
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-12">
                      <h5 className="form-title student-info">
                        Student Information{" "}
                        <span>
                          <a href="javascript:;">
                            <i className="feather-more-vertical" />
                          </a>
                        </span>
                      </h5>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          First Name <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Last Name <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Gender <span className="login-danger">*</span>
                        </label>
                        <select className="form-control select">
                          <option>Select Gender</option>
                          <option>Female</option>
                          <option>Male</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms calendar-icon">
                        <label>
                          Date Of Birth <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control datetimepicker"
                          type="text"
                          placeholder="DD-MM-YYYY"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>Roll </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Roll Number"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Blood Group <span className="login-danger">*</span>
                        </label>
                        <select className="form-control select">
                          <option>Please Select Group </option>
                          <option>B+</option>
                          <option>A+</option>
                          <option>O+</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Religion <span className="login-danger">*</span>
                        </label>
                        <select className="form-control select">
                          <option>Please Select Religion </option>
                          <option>Hindu</option>
                          <option>Christian</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          E-Mail <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Class <span className="login-danger">*</span>
                        </label>
                        <select className="form-control select">
                          <option>Please Select Class </option>
                          <option>12</option>
                          <option>11</option>
                          <option>10</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>
                          Section <span className="login-danger">*</span>
                        </label>
                        <select className="form-control select">
                          <option>Please Select Section </option>
                          <option>B</option>
                          <option>A</option>
                          <option>C</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>Admission ID </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Admission ID"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>Phone </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4">
                      <div className="form-group students-up-files">
                        <label>Upload Student Photo (150px X 150px)</label>
                        <div className="uplod">
                          <label className="file-upload image-upbtn mb-0">
                            Choose File <input type="file" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="student-submit">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}
          {/* </div>
        </div>
      </div> */}
    {/* </div> */}

</>



            </div>
            <footer className="mx-auto my-3 text-center">
              <small>&copy; Microtech, 2023. All rights reserved.</small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Purchase;
