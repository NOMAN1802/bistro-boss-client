/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const {user, googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

     const from = location.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
             
            const saveInfo = {name: loggedInUser.displayName, email: loggedInUser.email, photoURL: loggedInUser.photoURL }
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers: {
                 'content-type': 'application/json'
                },
                body: JSON.stringify(saveInfo)
             })
             .then(res => res.json())
             .then(() =>{
                
                  navigate(from, {replace: true});
               
             })

            
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;