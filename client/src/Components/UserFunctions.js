import Axios from 'axios';

export const register = newUser => {
    return Axios.post('user/register',{
        firstName: newUser.firstName,
        lastName:newUser.lastName,
        email:newUser.email,
        password:newUser.password
    })
    .then( res => console.log('Registered!'))
} 

export const login = user => {
    return Axios.post('user/login',{
        email:user.email,
        password:user.password
    })
    .then(res =>{
        localStorage.setItem('userToken', res.data);
        return res.data;
    })
    .catch(e => console.log('Error: '+e))
}