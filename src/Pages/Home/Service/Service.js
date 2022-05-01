import React from 'react';
import {useNavigate} from "react-router-dom";
const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id , name, price, description, img } = service;
    const navigateToServiceDetails = id => {
        navigate(`/servicedetails/${id}`)
    }
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <img className="rounded-t-lg w-full" src={img} alt="" />
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {description}
                    </p>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Price :${price}</h5>
                    <button onClick={()=> navigateToServiceDetails(id)} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">BOOK : {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;