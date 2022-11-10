import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { TextField, TextFieldProps } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function EmployeeForm({open = false, setOpen, update}: {open: boolean, setOpen: any, update: any} ) {
    const [date, setDate] = useState<any>(null)
    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [mess, setMess] = useState<string>("")

    const handleClose = () => {
        update()
        setDate(null)
        setName("")
        setLastName("")
        setMess("")
        setOpen(false);
        
    };

    const handleChangeDate = (newValue: any) => {
        let newDate = `${newValue.$y}/${newValue.$M+1}/${newValue.$D}`
        console.log(newDate);
        setDate(newDate)
    };

    const handleOnChangeName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value)
    }

    const handleOnChangeLastName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastName(e.target.value)
    }

    const SaveEmployee = () => {
        if (name != "" && lastName != ""  && date != null) {
            setMess("")
            const data = {
                name: name,
                last_name: lastName,
                birthday: date
            }
    
            fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/paola_corral', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json()) 
            .then(data => {
                console.log('Success', data);
                handleClose()
            })
            .catch(err =>{
                console.log('Error: ', err )
            })
        } else {
            setMess("Complete the fields")
            console.log("Complete the fields ");
            
        }
        
    }


  return (
    <React.Fragment>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add employee</DialogTitle>
        <DialogContent>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                >
                    <TextField 
                        required 
                        margin="normal" 
                        fullWidth 
                        label="Name"  
                        inputProps={{ maxLength: 30 }}
                        value={name}
                        onChange={handleOnChangeName}
                        />
                    <TextField 
                        required 
                        margin="normal" 
                        fullWidth 
                        label="LastName"  
                        inputProps={{ maxLength: 30 }}
                        onChange={handleOnChangeLastName}
                        value={lastName} />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            disableFuture
                            openTo='year'
                            views={['year', 'month', 'day']}
                            renderInput={(props: JSX.IntrinsicAttributes & TextFieldProps) =>
                                 <TextField required margin="normal" {...props} />}
                            label="Birthday"
                            value={date}
                            inputFormat="YYYY/MM/DD"
                            onChange={(newValue: any) => {
                                handleChangeDate(newValue);
                            }}
                        />
                    </LocalizationProvider>
                </Box>
                <div>{mess}</div>
                <Button variant="outlined" onClick={SaveEmployee}>Save</Button>
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
