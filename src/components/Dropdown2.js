import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Location() {
    return (
        <Autocomplete
            disablePortal
            id="location"
            options={location}
            sx={{ width: 575 }}
            renderInput={(params) => <TextField {...params} label="Location" />}
        />
    );
}


const location = [
    { label: 'St. Louis County' },
    


];