import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const apivalue = createContext();

function AllData({children}) {
const [text,setText] = useState([]);
useEffect(()=>{
    axios.get("/assets/js/apl.json")
    .then((eleament)=>{
        setText(eleament.data.products);
    })
},[]
)


  return (
    <apivalue.Provider value={text}>
         {children}
    </apivalue.Provider>
  )
}

export  {AllData, apivalue};