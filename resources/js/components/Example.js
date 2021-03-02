import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

function Example() {
    return (
        <form  noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
    );
}

ReactDOM.render(<Example />, document.querySelector('#example'));