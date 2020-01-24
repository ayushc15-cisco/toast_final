import React from "react"
import axios from "axios"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

;

const useStyles = makeStyles(theme =>({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,

  },
  
}));


export default class PersonList extends React.Component{

    state = {
        person: [],
    }
   


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({ person: res.data })
            }

            )



    }


    render(){
        
        return (
            
            <Paper className={useStyles.root}>
              <Table className={useStyles.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ToastMasters</StyledTableCell>
                    <StyledTableCell align="right">Level</StyledTableCell>
                    <StyledTableCell align="right">Pathway</StyledTableCell>
                    <StyledTableCell align="right">Total Score</StyledTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.person.map(person => (
                    <StyledTableRow key={person.name}>
                      <StyledTableCell component="th" scope="row">
                        {person.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{}</StyledTableCell>
                      <StyledTableCell align="right">{}</StyledTableCell>
                      <StyledTableCell align="right">{}</StyledTableCell>
                      
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          );
        }
    }
