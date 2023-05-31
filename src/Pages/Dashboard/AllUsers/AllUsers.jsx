/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleDelete = (user) => {
        console.log(user);
    }
    const  handleMakeAdmin = user =>{
         fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
         })
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h2 className='text-3xl font-semibold my-4'>Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? 'admin' :

                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-orange-600 text-white"><FaUserShield></FaUserShield></button>

                            }</td>
                            <td> <button onClick={() => handleDelete(user)} className="btn btn-ghost  bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button> </td>
                        </tr>
                        )}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;