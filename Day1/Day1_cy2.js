import React from 'react';
function array1()
{
     let myarray=["North","South","East","West"];
     for(let i=0;i<myarray.length;i++)
     {
        console.log(myarray[i]+" News");
     }

}
function array2()
{
     let myarray=["North","South","East","West"];
     for(let i=0;i<myarray.length;i++)
     {
        console.log("• "+myarray[i]);
     }

}

function D2cy2()
{
    return(
        <div>
            <button onClick={array1}>Array</button>
            <button onClick={array2}>Referesh Array</button>
        </div>
    )
}
export default D2cy2;