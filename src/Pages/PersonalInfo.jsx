import React , { useState } from "react";
import "../Pages/personalinfo.css"

function PersonalInfo() {
    return (
        <>
            <div className="grid-item-right">
                    <h1 className="form-heading">
                        Personal info
                    </h1>
                    <p className = "step">
                        Please provide your name, email address, and phone number.
                    </p>
                    <form>
                        <label className="form-label">Name</label> <br />
                        <input type="text" placeholder="e.g. Stephen King" className="form-input" /> <br />
                        <label className="form-label">Email Address</label> <br />
                        <input type="email" placeholder="e.g. stephenking@lorem.com" className="form-input" /> <br />
                        <label className="form-label">Phone Number</label> <br />
                        <input type="number" placeholder="e.g. +1 234 567 890" className="form-input" /><br />
                        <button className="submit"> <a style={{color: "hsl(231, 100%, 99%)", textDecoration: "none"}} href="/selectplan">Next Step </a></button>
                    </form>
                </div>
        </>
    );
}

export default PersonalInfo;