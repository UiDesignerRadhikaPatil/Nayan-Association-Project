import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { Calculate } from "@mui/icons-material";


export default function SalaryCalculator() {

    const [salaryforthemonth, setSalaryforthemonth] = useState();
    const [year, setYear] = useState("");
    const [customer, setCustomer] = useState("")


    const postAPI = (e) => {

        let config = {
            method: 'post',
            mode: "cors",
            maxBodyLength: Infinity,
            url: "https://truecodeapi.microtechsolutions.co.in/api/MonthlySalary",

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                // 'CityId': CityId,


                "EmployeeId": 4,
                "MonthDays": 31,
                "TotalDays": 31.00,
                "Basic": 13.00,
                "HRA": 8.00,
                "Tea": 89.00,
                "Conveyance": 7.00,
                "CCA": 8.00,
                "OCC": 9.00,
                "GrossSalary": 30000.00,
                "PF": 7.00,
                "PT": 7.00,
                "LabourWelfare": 45.00,
                "TotalDeduction": 78.00,
                "ESI": 7.00,
                "Salary": 788.00,

            },

        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("Saved Successfully");
                window.location.reload();
                // console.log(Name, StateId)

            })
            .catch((error) => {
                console.log(error);

            });

    }

    const [states, setStates] = useState([]);

    const getStateData = async () => {
        const url = "https://truecodeapi.microtechsolutions.co.in/api/State";
        let result = await fetch(url);
        result = await result.json();
        setStates(result);
        console.log("fetch Data Successfully");
        console.log(states);
    }

    useEffect(() => {
        setTimeout(() => {
            getStateData();
        }, 1000);
    }, []);

    const navigate = useNavigate();

    const calculator = () => {
        navigate('/calculatorapi');
    };

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
                            background: "whitesmoke",
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                background: "white",
                                gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
                            }}
                        >

                            <>
                                <div className="page-wrapper">
                                    <div className="content container-fluid">
                                        <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                            <div className="row align-items-center">
                                                <div class="col">
                                                    <h3 class="page-title" style={{ color: "#00308F", textAlign: 'center' }}> Salary Calculator </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-body" style={{ backgroundColor: '#AFDBF5' }}>
                                                        <form>
                                                            <div className="row">

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Salary For The Month
                                                                        </label>
                                                                        <input required value={salaryforthemonth}
                                                                            onChange={e => setSalaryforthemonth(e.target.value)}
                                                                            className="form-control"
                                                                            type="date"

                                                                        />
                                                                    </div>
                                                                </div>


                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Year
                                                                        </label>
                                                                        <input className="form-control" type="date" value={year} onChange={(e) => setYear(e.target.value)} />


                                                                        {/* <select value={StateId} onChange={e => Statechange(e.target.value)}

                                                                            className="form-control select">

                                                                            {states
                                                                                ? states.map((state) => {

                                                                                    return <option key={state.Id} value={state.Id}>{state.StateName}</option>
                                                                                })
                                                                                : null}
                                                                        </select> */}



                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Customer
                                                                        </label>

                                                                        <input className="form-control" type="text" value={customer} onChange={(e) => setYear(e.target.value)} />



                                                                        {/* <select value={StateId} onChange={e => Statechange(e.target.value)}

                                                                            className="form-control select">

                                                                            {states
                                                                                ? states.map((state) => {

                                                                                    return <option key={state.Id} value={state.Id}>{state.StateName}</option>
                                                                                })
                                                                                : null}
                                                                        </select> */}



                                                                    </div>
                                                                </div>


                                                                <hr className="my-3" />

                                                                <div className="row">
                                                                    <div className="col-12 col-sm-4">
                                                                        <div className="supplier-submit">
                                                                            <button className="btn btn-primary" type="button" onClick={postAPI}>
                                                                                Submit
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12 col-sm-4">
                                                                        <div className="supplier-clear">
                                                                            <button type="button" className="btn btn-warning" onClick={calculator}>
                                                                                List
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}