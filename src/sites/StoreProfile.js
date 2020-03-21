import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

const StoreProfile = props => {

    const [storeData, setStoreData] = useState(null);
    const {storeId} = useParams();

    useEffect(()=>{
        fetchStoreData();
    },[]);

    const fetchStoreData = () => {
        console.log(storeId)
    };

    return (
        <div id="#store-profile">
            <h1>Store</h1>
            {storeId}
        </div>
    );
};

StoreProfile.propTypes = {

};

export default StoreProfile;