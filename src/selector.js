// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// //import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import {useForm} from 'react-hook-form';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(0),
//       minWidth: 200,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(0),
//     },
//   }));
  
  // export default function SimpleSelect(props) {
  //    const classes = useStyles();
  //    const [age, setAge] = React.useState('');
  
  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  //   return (

  //              <FormControl>
  //                 <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
  //                 <Select
  //                  labelId="demo-simple-select-label"
  //                  id="demo-simple-select"
  //                  value={age}
  //                  onChange={handleChange}
  //                 >
  //                {
  //                  props.data.map((Element)=><MenuItem key={Element} value={Element}>{Element}</MenuItem>)
  //                }
  //                 </Select>
  //              </FormControl>
  //     );
  //   }  



  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import InputLabel from '@material-ui/core/InputLabel';
  //import FormHelperText from '@material-ui/core/FormHelperText';
  import FormControl from '@material-ui/core/FormControl';
  import Select from '@material-ui/core/Select';
  import {useForm} from 'react-hook-form';
  //import NativeSelect from '@material-ui/core/NativeSelect';
  
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(0),
    },
  }));
  export default function NativeSelects(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
  
    return (
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">{props.title}</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label={props.title}
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
           {
          props.data.map((Element)=><option key={Element} value={Element}>{Element}</option>)
           }
        </Select>
      </FormControl>  
      </div>
    );
        }