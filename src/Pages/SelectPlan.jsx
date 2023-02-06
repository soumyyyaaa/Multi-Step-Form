import React from "react";
import "../Pages/selectplan.css"
import arcade from "../images/icon-arcade.svg"
import advanced from "../images/icon-advanced.svg"
import pro from "../images/icon-pro.svg"

function SelectPlan() {
    return (
        <>
            <div className="grid-item-right">
                <h1 className="form-heading">
                    Select your plan
                </h1>
                <p className="step">
                    You have the option of monthly or yearly billing.
                </p>
                <div className="card">
                    <button className="plan">
                        <img src={arcade} alt="arcade"/>
                        <p className="plan-name">Arcade</p>
                        <p className="plan-price">$9/mo</p>
                    </button>
                    <div className="plan">
                        <img src={advanced} alt="arcade"/>
                        <p className="plan-name">Advanced</p>
                        <p className="plan-price">$12/mo</p>
                    </div>
                    <div className="plan">
                        <img src={pro} alt="arcade"/>   
                        <p className="plan-name">Pro</p>
                        <p className="plan-price">$15/mo</p>
                    </div>
                </div>
                <br />
                <div className="grid">
                    <span className="plan-name">Monthly</span>
                    <label className="switch">
                        <input type={"checkbox"} />
                            <span className="slider round"></span>
                    </label>
                    <span className="plan-name">Yearly</span>
                </div>
                <button className="go-back"><a href="/" className="go-back">Go Back</a></button>
                <button className="submit" style={{marginTop: "15%",}}> <a style={{color: "hsl(231, 100%, 99%)", textDecoration: "none"}} href="/selectplan">Next Step </a></button>
            </div>
        </>
    );
}

export default SelectPlan;