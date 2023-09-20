import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Sorting({ setSort }) {

    return (
        <div className="Sorting-Container">
            <FormControl sx={{ width: "20vw" }}>
                <InputLabel id="demo-simple-select-label">Order</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Order By"
                    onChange={(e) => setSort(e.target.value)}
                >
                    <MenuItem disabled value="">Select</MenuItem>
                    <MenuItem value="inc">Price Increment</MenuItem>
                    <MenuItem value="desc">Price Decrement</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}


export default Sorting;