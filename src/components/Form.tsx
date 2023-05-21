import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function BasicTextFields() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

const navigate = useNavigate();

  const handle = () => {

   if(name === "" || email === "" || phone === ""){
    alert('Enter the given details');    
   }
   else{
   localStorage.setItem("name", name);
   localStorage.setItem("email", email);
   localStorage.setItem("phone", phone);
   navigate('table');
   }
  };

  return (
   
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 7, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        type="text"
        name="name"
        label="Name"
        variant="standard"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="standard-basic"
        type="email"
        name="email"
        label="E-mail"
        variant="standard"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="standard-basic"
        type="number"
        name="phone"
        label="Phone No."
        variant="standard"
        onChange={(e) => setPhone(e.target.value)}
      />
        
        <Button onClick={handle} variant="contained">
        Submit
      </Button>
      
       
   
    </Box>
  
  );
}
