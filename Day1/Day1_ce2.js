import React from 'react';
function obj()
{
    let myobject={name:"Madras"};
    let newobject=myobject;
    myobject.name="chennai";
    alert("Check Console Output");
    console.log(myobject);
    console.log(newobject);
    

    let myarray=["a","e","i","o"];
    let newarray=myarray;
    myarray.push("u");
    for(var i=0;i<myarray.length;i++)
    {
        console.log(myarray[i]);
    }
}
function ce2 (){
    return(
        <div className='ce2'>
            <button onClick={obj}>CE2</button>
        </div>
    )
}
export dault ce2;
