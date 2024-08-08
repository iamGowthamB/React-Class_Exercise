import React from 'react';
const D2ce2 =()=>{
    const a1={
        color:'green',
    }
    const a2={
        backgroundColor:'lightblue',
        padding :'10px',
        border :'1px solid blue',
        borderRadius:'5px',
        
    }
    const a3={
        color : 'darkblue',
        FontSize :'16px',
    }
    return(
        <div>
             <h1 style={a1}> Inline Style in JSX Example. </h1>
             <div style={a2}>
                 <p style={a3}>This is a paragraph with inline styles applied.</p>
             </div>
        </div>
    )
}
export default D2ce2;