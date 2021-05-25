import React from "react"
import "./expandingInfo.css"
const ExpandingInfo = (props) => {
    const { heading, info } = props;
    return (
        <div className="info">
            <div className="inner">
                <span>i</span>
                <h1>{heading}</h1>
                <p>{info}</p>
            </div>
        </div>
    )
}

export { ExpandingInfo }