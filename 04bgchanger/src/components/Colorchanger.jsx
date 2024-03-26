import { useState } from 'react';
import   './colorchanger.css'

const Colorchanger = () => {
    const [color, setColor] = useState("blue");

    return (
        <div className='w-screen h-screen absolute'
         style={{ background:color }}
        >
             <div className='but w-auto h-auto   flex  text-center bg-white relative bottom-0 top-10 rounded-xl' >
                <button onClick={()=>(setColor("#556B2F"))} className=' h-10 w-40 rounded-lg m-5 ' style={{ background:"#556B2F "}}>DarkGreen</button>
                <button onClick={()=>(setColor("#00008B"))} className=' h-10 w-40 rounded-lg m-5 ' style={{ background:"#00008B"}}>DarkBlue</button>
                <button onClick={()=>(setColor("#6495ED"))} className=' h-10 w-40 rounded-lg m-5 ' style={{ background:"#6495ED "}}>CornBlue</button>
                <button onClick={()=>(setColor("#B8860B"))} className=' h-10 w-40 rounded-lg m-5 ' style={{ background:"#B8860B "}}>DarkGoldenRod</button>
                <button onClick={()=>(setColor("#8B008B"))} className=' h-10 w-40 rounded-lg m-5 ' style={{ background:"#8B008B "}}>DarkMagenta</button>
                <button onClick={()=>(setColor("#fde047"))} className=' h-10 w-40 rounded-lg m-5 ' style={{ background:"#fde047 "}}>Yellow</button>
                <button onClick={()=>(setColor("#db2777"))} className=' h-10 w-40 rounded-lg m-5 ' style={{ background:"#db2777 "}}>Pink</button>
                
                 
             </div>
        </div>
    );
};

export default Colorchanger;
