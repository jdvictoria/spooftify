import React from 'react';

import {LinearProgress} from "@mui/joy";

export function ProgressBar(){
    return(
        <LinearProgress determinate color='neutral' value={75} size='sm'/>
    )
}