import React from "react";
function compare()
{
    const name1="kabil";
    const name2="kabil";
    const object1={name:"kabil"};
    const object2={name:"kabil"};
    if(name1==name2)
    {
        alert("True");
        alert("primitive Data Type");
    }
    if(object1===object2)
    {
        alert("True");
        alert("Reference Data Type");
    }
}

function cy1(){
    return(
        <div className="cy1">
            <button onClick={compare}>CY1</button>
        </div>
    )
}

export default cy1;