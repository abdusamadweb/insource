import React from 'react';


const MyInput = ({ placeholder, className, type, setName, setEmail, setPhone, setOrganization, name }) => {
    return (
        <input className={`inp ${className}`} type={type} placeholder={placeholder} required name={name}/>
    );
};

export default MyInput;