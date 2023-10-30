
import  {MUIDataTable} from "mui-datatables";
import { styled } from '@mui/material/styles';


//------------

import React from 'react'

const TableP = () => {

    const columns = ["Name", "Company", "City", "Estado"];
    const data = [
        ["Jorge Adrian", "Adrian Inc.", "Morelia", "Michoacan"],
        ["Jose Hernandez", "Ricolino", "Puebla", "Puebla"],
        ["Andrea Barcenas", "Citelis", "Acapulco", "Guerrero"],
        ["Paola Garcia", "SSP", "Culiacan", "Sinaloa" ],
    ];
        const options = {filterType: 'checkbox',};



  return (
   
        <MUIDataTable 
            title= {"List of employees"}
            data = {data}
            columns={columns}
            options={options}         
        />
      
    
  )
}

export default TableP


//---------



