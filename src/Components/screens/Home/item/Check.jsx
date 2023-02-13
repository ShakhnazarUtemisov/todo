import React from "react";

const Check = ({isCompleted}) => {
    return (
        isCompleted
        ?   <div className="check">
                <input type="checkbox" checked/>
            </div>
        : 
            <div className="check">
                <input type="checkbox"/>
            </div>
    )
}

export default Check;