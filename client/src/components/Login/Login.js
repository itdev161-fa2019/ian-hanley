import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = ({ authenticateUser }) => {
  let history = useHistory();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errorData, setErrorData] = useState({ errors: null });
  const { email, password } = userData;
  const { errors } = errorData;

  const onChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData, [name]: value
    })
  }
}

export default Login
