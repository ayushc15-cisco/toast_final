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
        roles: ['TMOD','General Evaluator','Speaker 1', 'Evaluator 1', 'Speaker 2', 'Evaluator 2', 'Speaker 3','Evaluator 3', 'Time-Keeper','Ah-Counter','TTM'],
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
              <Table className={useStyles.table} stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow>
                    <StyledTableCell>Roles</StyledTableCell>
                    <StyledTableCell align="right">Members Applied</StyledTableCell>
                   
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.roles.map(roles => (
                    <StyledTableRow key={roles}>
                      <StyledTableCell component="th" scope="row">
                        {roles}
                      </StyledTableCell>
                      <StyledTableCell align="right">{}</StyledTableCell>
                      
                      
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          );
        }
    }
