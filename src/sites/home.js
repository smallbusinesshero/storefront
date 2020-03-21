import React, {useState} from "react";

export default function Home() {
    const [kiez, setKiez] = useState('');
    const kiezs=[
        'neukölln',
        'kreuzberg',
        'mitte',
        'prenzlauerberg'
    ]

   async function onSubmit(value){
       alert(`${value}`)
       setKiez('')  // just for now to clear the field
    let response = await fetch ('endpoint');
    let data = await response.json();
    return data;
    }

    return (<>
    <h2>Home</h2>
    
    <input type="text" value={kiez} onChange={e=>setKiez(e.target.value)}></input>
    <button onClick={()=>onSubmit(kiez)}> submit</button>
    
    </>)
}