import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function SchoolDistrict() {
    return (
        <Autocomplete
            disablePortal
            id="school-district"
            options={schoolDistricts}
            sx={{ width: 575 }}
            renderInput={(params) => <TextField {...params} label="School District" />}
        />
    );
}



const schoolDistricts = [
    { label: 'Hazelwood West' },
    { label: 'Hazelwood Central' },
    { label: 'Hazelwood East' },
    { label: 'Pattonville' },
    { label: 'Ferguson' },
    { label: 'Riverview Gardens' },
    { label: 'Parkway North' },
    { label: 'Ritenour' },
    { label: 'Normandy' },
    { label: 'Parkway Central' },
    { label: 'Ladue' },
    { label: 'University City' },
    { label: 'Rockwood' },
    { label: 'Clayton' },
    { label: 'Parkway South' },
    { label: 'Kirkwood' },
    { label: 'Webster Groves' },
    { label: 'Brentwood' },
    { label: 'Maplewood Richmond Heights' },
    { label: 'Valley Park' },
    { label: 'Affton' },
    { label: 'Bayless' },
    { label: 'Lindberg' },
    { label: 'Hancock Place' },
    { label: 'Mehlville' },


];