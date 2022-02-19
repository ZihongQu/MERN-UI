import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#77ad78'
  },
  logout: {
    backgroundColor: 'white',
    color: '#77ad78'
  },
  login:{
    backgroundColor: 'white',
    color: '#77ad78'
  },
  heading: {
    color: 'white',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'end',
    width: '100%',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    color: 'white'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px',
    marginLeft: '30px'
  },
  purple: {
    color: '#77ad78',
    backgroundColor: 'white',
    marginRight: '20px'
  },
}));