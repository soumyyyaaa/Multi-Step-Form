import React from "react";
import "../Pages/selectplan.css"
import arcade from "../images/icon-arcade.svg"
import advanced from "../images/icon-advanced.svg"
import pro from "../images/icon-pro.svg"
import { useState } from "react";
import $ from 'jquery'

function SelectPlan() {
    const handleClick = () => {
        setTextArcade("$90/yr")
        setTextAdvanced("$120/yr")
        setTextPro("$150/yr")
        $(".free").removeClass("plan-free")
        $(".free").addClass("show")
    }

    const[textArcade, setTextArcade] = useState("$9/mo")
    const[textAdvanced, setTextAdvanced] = useState("$12/mo")
    const[textPro, setTextPro] = useState("$15/mo")

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
                    <div className="plan">
                        <img src={arcade} alt="arcade"/>
                        <p className="plan-name">Arcade</p>
                        <p className="plan-price">{textArcade}</p>
                        <p className="free plan-free">2 months free</p>
                    </div>
                    <div className="plan">
                        <img src={advanced} alt="arcade"/>
                        <p className="plan-name">Advanced</p>
                        <p className="plan-price">{textAdvanced}</p>
                        <p className="free plan-free">2 months free</p>
                    </div>
                    <div className="plan">
                        <img src={pro} alt="arcade"/>   
                        <p className="plan-name">Pro</p>
                        <p className="plan-price">{textPro}</p>
                        <p className="free plan-free">2 months free</p>
                    </div>
                </div>
                <br />
                <div className="grid">
                    <span className="plan-name">Monthly</span>
                    <button className="slider-btn" onClick={handleClick}>
                        <label className="switch">
                            <input type={"checkbox"} />
                                <span className="slider round"></span>
                        </label>
                    </button>
                    <span className="plan-name">Yearly</span>
                </div>
                <button className="go-back"><a href="/" className="go-back">Go Back</a></button>
                <button className="submit" style={{marginTop: "15%",}}> <a style={{color: "hsl(231, 100%, 99%)", textDecoration: "none"}} href="/addons">Next Step </a></button>
            </div>
        </>
    );
}

export default SelectPlan;