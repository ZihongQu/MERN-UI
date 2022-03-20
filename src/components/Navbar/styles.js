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
    backgroundColor: '#524e4e'
  },
  logout: {
    backgroundColor: 'white',
    color: '#F0A500'
  },
  login:{
    backgroundColor: 'white',
    color: '#F0A500'
  },
  heading: {
    color: '#F0A500',
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
    marginRight:'30px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    color: '#F0A500'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px',
    marginLeft: '30px'
  },
  avatar: {
    color: '#F0A500',
    backgroundColor: 'white',
    marginRight: '20px'
  },
}));