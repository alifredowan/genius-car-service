import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {servicedetailsId} = useParams()
    return (
        <div>
           <h5>{servicedetailsId}</h5>
        </div>
    );
};

export default ServiceDetails;