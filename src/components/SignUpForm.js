import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  username: yup.string().required('A username is required'),
  password: yup.string().required('A password is required'),
  confirmPw: yup.string().required('You must confirm your password').oneOf([yup.ref('password')], 'The passwords must be the same'),
  role_id: yup.string()
});

const initialFormData = {
  username: "",
  password: "",
  confirmPw: "",
  role_id: "2"
};
const initialFormErrors = {
  username: "A username is required",
  password: "A password is required",
  confirmPw: "You must confirm your password",
  role_id: ""
};

function SignUpForm(props) {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [displayError, setDisplayError] = useState(false);
  const [currentError, setCurrentError] = useState(initialFormErrors.username);
  
  const onSubmit = event => {
    event.preventDefault();
    schema.isValid(formData).then((valid) => {
      if (valid) {
        console.log(formData);
        axios.post('https://anywherefitnessbuild.herokuapp.com/api/users/register', {username:formData.username, password:formData.password, role_id:formData.role_id})
          .then(() => {
            axios.post('https://anywherefitnessbuild.herokuapp.com/api/users/login', {username:formData.username, password:formData.password})
              .then(resp => {
                localStorage.setItem('token', resp.data.token);
                localStorage.setItem('user_id', resp.data.user_id);
                localStorage.setItem('role_id', resp.data.role_id);
                localStorage.setItem('username', formData.username);
                push('/home');
            })
          })
          .catch(err => {
            console.log(err, err.response);
            setCurrentError(err.response.data.message);
            setDisplayError(true);
          })
      } else {
        setDisplayError(true);
      }
    });
  }
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if(name==='confirmPw'){
      if(formData.password===value){
        setFormErrors({ ...formErrors, [name]: ''});
        setCurrentError(formErrors.username ? formErrors.username : formErrors.role_id ? formErrors.role_id : formErrors.password);
      } else {
        setFormErrors({ ...formErrors, [name]:value ? 'The passwords must be the same' : initialFormErrors[name]});
        setCurrentError(value ? 'The passwords must be the same' : initialFormErrors[name]);
      }
    } else {
      if(name==='password'){
        if(formData.confirmPw===value){
          setFormErrors({ ...formErrors, confirmPw: ''});
          setCurrentError(formErrors.username ? formErrors.username : formErrors.role_id ? formErrors.role_id : formErrors.password);
        } else {
          setFormErrors({ ...formErrors, confirmPw:value ? 'The passwords must be the same' : initialFormErrors['confirmPw']});
          setCurrentError(value ? 'The passwords must be the same' : initialFormErrors['confirmPw']);
        }
      }
      yup
      .reach(schema, name)
      .validate(value)
      .then(() => {setFormErrors({ ...formErrors, [name]: "" }); setCurrentError(name!=='username'&&formErrors.username ? formErrors.username : name!=='role_id'&&formErrors.role_id ? formErrors.role_id : name!=='password'&&formErrors.password ? formErrors.password : formErrors.confirmPw);})
      .catch((err) => {setFormErrors({ ...formErrors, [name]: err.errors[0] }); setCurrentError(err.errors[0]);});
    }
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      {displayError && <p style={{color: 'red'}}>{currentError}</p>}
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={onChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPw"
          value={formData.confirmPw}
          onChange={onChange}
        />
      </label>
      <label>
        Role:
        <select name='role_id' onChange={onChange}>
          <option value='2'>Client</option>
          <option value='1'>Instructor</option>
        </select>
      </label>
      <button text="Log In" theme="FullColored">
        <input type="submit" />
      </button>
    </form>
  );
}

export default SignUpForm;