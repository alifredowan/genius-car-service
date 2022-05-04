import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const { servicedetailsId } = useParams()
    return (
        <div>
            <Helmet>
                <title>Service Details - Genius-Car-Service</title>
            </Helmet>
            <h5>{servicedetailsId}</h5>
        </div>
    );
};

export default ServiceDetails;