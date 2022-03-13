import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  searchButton: {
    backgroundColor: '#726953',
    color: 'white'
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  input: {
      width: "100%",
      padding: "12px 20px",
      margin: "8px 0",
      display: "inline-block",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box"
  }

}));