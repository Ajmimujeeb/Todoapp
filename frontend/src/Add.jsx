import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [todo, settodo] = useState({
        description: '',
        status:''
        
      });
      
    const sendData = () => {
    
        // if (location.state!=null) {      //state= null go for put operation
        //   axios.put('http://localhost:4000/todo/edit/'+location.state.course._id,course).then((res)=>{   
        //     alert('Data updated');
        //     navigate('/Home')     
        //   }).catch((error)=>{
        //     console.log(error);
        //   })
          
        // }
        // else{                                                                    //state not= go for post operation
        //   axios.post('http://localhost:4000/todo/add',course).then((res)=>{
        //     navigate('/home')
        //   }).catch((error)=>{
        //     console.log(error)
        //   })
        // }
      }
      
  return (
    
        <div>
      <h2>New List
      </h2>
      <TextField 
        
        id="standard-basic" 
        label="Description" 
        variant="standard" 
        name="todoDescription" 
         
      />  
      <br />
      <TextField 
        id="standard-basic" 
        label="Status" 
        variant="standard" 
        name="todoStatus" 
        
      /> 
      <br /> 
      <br />
      <Button 
        sx={{ backgroundColor: '#C5705D' }} 
        variant="contained" 
        onClick={sendData}
      >
        Submit
      </Button>
      
    </div>
  )
}

export default Add