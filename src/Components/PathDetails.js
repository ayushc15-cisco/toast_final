
import axios from 'axios'
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
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import { withStyles } from '@material-ui/core/styles';

const labels = {

    1: 'Started',

    2: 'Lv.1',

    3: 'Lv.2',

    4: 'Lv.3',

    5: 'Lv.4',

    6: 'Lv.5',
};

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

function IconContainer(props) {
    const { value, ...other } = props;
    return (
        <Tooltip title={labels[value] || ''}>
            <span {...other} />
        </Tooltip>
    );
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(4),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
    },
    rating1: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
}));

export default function PathDetails() {
    const classes = useStyles();
    var init='Click!'
    const [value, setValue] = React.useState(-1);


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

            <Box display="flex" alignItems="center" justifyContent="center" paddingTop="10px" flexWrap="nowrap">
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography variant="h4" component="legend" >Choose Level: </Typography>
                    <br/>
                    <div className={classes.rating1}>
                        <StyledRating
                            size="large"
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            max={6}
                            icon={<LanguageIcon fontSize="inherit" />}
                        />
                        <Box ml={5}><h2>{labels[value !== -1 ? value : init]}</h2></Box>
                    </div>
                </Box>

            </Box>




            <div className={classes.margin}>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel >Choose your PathWay</InputLabel>
                    <Select native>
                        <option selected>Pathway Selection</option>
                        <option value="Dynamic Leadership">Dynamic Leadership</option>
                        <option value="Effective Coaching">Effective Coaching</option>
                        <option value="Engaging Humor">Engaging Humor</option>
                        <option value="Innovative Planning">Innovative Planning</option>
                        <option value="Leadership Development">Leadership Development</option>
                        <option value="Motivational Strategies">Motivational Strategies</option>
                        <option value="Persuasive Influence">Persuasive Influence</option>
                        <option value="Presentation Mastery">Presentation Mastery</option>
                        <option value="Strategic Relationships">Strategic Relationships</option>
                        <option value="Team Collaboration">Team Collaboration</option>
                        <option value="Visionary Communication">Visionary Communication</option>
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
