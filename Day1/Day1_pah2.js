import React from "react";
function primitive()
{
   let age=18;
   let name="kiran";
   var setstatus=false;
   let userdefault=undefined;
   let responsevalue=null;
   alert("Check the console output!");
   console.log(age);
   console.log(name);
   console.log(setstatus);
   console.log(userdefault);
   console.log(responsevalue);
   let newage=age;
    age=25;
   let status=setstatus;
   setstatus=true;
   console.log(newage);
   console.log(status);

}
function pah2(){
    return(
        <div className='pah2'>
            <button onClick={primitive}>PAH2</button>
        </div>
    )
}

export default pah2;