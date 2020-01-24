import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Rolesoccupied from './Rolesoccupied';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(4),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
      },
}));

export default function Form() {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment" >Full Name *</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    required="true"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="CECId"
                placeholder="If Applicable"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
            <Rolesoccupied />
            <div className={classes.margin}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel >Desired Role</InputLabel>
                    <Select native>
                        <option selected>Choose...</option>
                        <option value="TMOD">TMOD</option>
                        <option value="Speaker">Speaker</option>
                        <option value="Speech Evaluator">Speech Evaluator</option>
                        <option value="Time Keeper">Time Keeper</option>
                        <option value="Ah-counter">Ah-counter</option>
                        <option value="Grammarian">Grammarian</option>
                        <option value="Table Topics Master">Table Topics Master</option>
                        <option value="General Evaluator">General Evaluator</option>
                    </Select>
                </FormControl>
            </div>

            <Box p={1} display="flex" alignItems="flex-end" justifyContent="flex-end" >  
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                      startIcon={<SaveIcon />}
                    >
                      SUBMIT
                </Button>
            </Box>

        </div>
    );
}
