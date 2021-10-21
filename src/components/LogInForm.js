import React, { useState } from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('A username is required'),
  password: yup.string().required('A password is required')
});

const initialFormData = {
  username: "",
  password: ""
};
const initialFormErrors = {
  username: "A username is required",
  password: "A password is required"
};

function LogInForm(props) {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [displayError, setDisplayError] = useState(false);
  const [currentError, setCurrentError] = useState(initialFormErrors.username);
  
  const onSubmit = event => {
    event.preventDefault();
    // More code
  }
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {setFormErrors({ ...formErrors, [name]: "" }); setCurrentError(name==='username' ? formErrors.password : formErrors.username)})
      .catch((err) => {setFormErrors({ ...formErrors, [name]: err.errors[0] }); setCurrentError(err.errors[0]);});
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