import React from 'react';
import { Button, IconButton, Table, TableBody, TablePagination, TextField } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import EmployeeForm from './EmployeeForm';
import './Employees.css'
import CloseIcon from '@mui/icons-material/Close';

interface Employee {
    name : string;
    lasName : string;
    birthday : Date;
}  
export default function Employees() {

    const [employees, setEmployees] = useState<any[]>([])
    const [filterEmployes, setFilterEmployes] = useState<any[]>([])

    const getBd = (bd: number) => {        
        var date = new Date(bd).toLocaleDateString("en-US")
        return date.toString()
    }
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [searched, setSearched] = useState<string>("");
    const [openForm, setOpenForm] = useState<boolean>(false)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const requestSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let searchedVal = e.target.value
        setSearched(e.target.value)
        Search(searchedVal)
    };

    const Search = (searchedVal: string) => {
        const filteredRows = employees.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
          });
          setFilterEmployes(filteredRows);
    }

    const cancelSearch = () => {
        setSearched("");
        Search(searched);
    };

    const handleAddEmploye = () => {
        setOpenForm(true)
    }

    const dataFetch =async () => {
        const data = await(
            await fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/paola_corral')
        ).json()
        setEmployees(data.data.employees)
        setFilterEmployes(data.data.employees)
    }

    useEffect(() => {
        
        dataFetch()
        
        
      },[])

    return ( 
        <div className='root'>
            <div className='header'>
                <div>
                    <TextField 
                        className='search-input'
                        value={searched}
                        onChange={requestSearch}
                    />
                    <IconButton className='cancel-button' onClick={cancelSearch}>
                        <CloseIcon/>
                    </IconButton >
                </div>
                
                <Button variant="contained" className='button' onClick={handleAddEmploye}>Add Employee</Button>
            </div>
            
            <TableContainer className='table-container' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Birthday</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {filterEmployes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.last_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {getBd(row.birthday)}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={employees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <EmployeeForm open={openForm} setOpen={setOpenForm} update={dataFetch} />
        </div>
        
      );
}
