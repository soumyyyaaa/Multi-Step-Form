import React from "react";
import "../Components/sidebar.css"

function Sidebar() {
    return (
        <>
                <div className="grid-item-left">
                    <div className="left-container">
                        <div className="left-pane">
                            <button className="btn btn1 active">1</button>
                            <p>
                                <span className="step">STEP 1</span> <br />
                                <span className="form-description">YOUR INFO</span>
                            </p>         
                        </div>
                        <div className="left-pane">
                            <button className="btn btn2">2</button>
                            <p>
                                <span className="step">STEP 2</span> <br />
                                <span className="form-description">SELECT PLAN</span>
                            </p>         
                        </div>
                        <div className="left-pane">
                            <button className="btn btn3">3</button>
                            <p>
                                <span className="step">STEP 3</span> <br />
                                <span className="form-description">ADD-ONS</span> 
                            </p>         
                        </div>
                        <div className="left-pane">
                            <button className="btn btn4">4</button>
                            <p>
                                <span className="step">STEP 4</span> <br />
                                <span className="form-description">SUMMARY</span>
                            </p>         
                        </div>
                    </div>
                </div>
                
        </>
    );
}

export default Sidebar;