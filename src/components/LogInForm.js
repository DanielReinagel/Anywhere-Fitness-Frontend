import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialFormData = {
  username: "",
  password: ""
};

function LogInForm(props) {
  const [formData, setFormData] = useState(initialFormData);
  const [displayError, setDisplayError] = useState(false);
  const [currentError, setCurrentError] = useState("");

  const { push } = useHistory();
  
  const onSubmit = event => {
    event.preventDefault();
    axios.post('https://anywherefitnessbuild.herokuapp.com/api/users/login', {...formData})
      .then(resp => {
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('user_id', resp.data.user_id);
        localStorage.setItem('role_id', resp.data.role_id);
        localStorage.setItem('username', formData.username);
        push('/home');
      })
      .catch(err => {
        setCurrentError(err.response.data.message);
        setDisplayError(true);
      })
  }
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
      <button text="Log In" theme="FullColored">
        <input type="submit" />
      </button>
    </form>
  );
}

export default LogInForm;