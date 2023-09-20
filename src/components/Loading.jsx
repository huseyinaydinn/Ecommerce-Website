import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress color="secondary" />
        </div>
    )
}

export default Loading