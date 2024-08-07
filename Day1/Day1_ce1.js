import React from 'react';
function alertMsg()
{
    alert("MSG from javascript alert");
    console.log("Msg to developer");
}
function Ap(){
  return(
    <div className="Ap">
    <h1>Let we see the output of JAVASCRIPT</h1>
    <button onClick={alertMsg}>CE1</button>
    </div>
  )
}

export default App;