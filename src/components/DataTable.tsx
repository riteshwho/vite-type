import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import axios from "axios";
import IndeterminateCheckbox from './Department';
import IndeterminateCheckbox1 from './SubDepartment';

const columns = [ 
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'Title', width:400},
    {field: 'body', headerName: 'Body', width: 600}
  ]

const DataTable = () => {
    

  const [myData,setMyData] = useState([]);

useEffect(()=> {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((res)=>
 setMyData(res.data)
  
  );
},[])
    return(
      <>
        <div style={{height:700, width:'100%'}}>
     <DataGrid
     rows={myData}
     columns={columns}
    //  pageSize={12}
     checkboxSelection
     />
   </div>
   <IndeterminateCheckbox/>
   <IndeterminateCheckbox1/>
   </>
    )
}
export default DataTable;