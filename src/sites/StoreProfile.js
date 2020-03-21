import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import StoresService from "../services/stores";

const StoreProfile = props => {

    const [storeData, setStoreData] = useState(null);
    const {storeId} = useParams();

    useEffect(()=>{
        fetchStoreData();
    },[]);

    const fetchStoreData = () => {
        const StoreServiceInstance = new StoresService();
        StoreServiceInstance.getStore(storeId).then(setStoreData);
    };

    return (
        <React.Fragment>
            {storeData &&
            <div id="#store-profile">
                <h1>{storeData.name.de_DE}</h1>
                <p>{storeData.description.de_DE}</p>
            </div>
            }
        </React.Fragment>
    );
};

StoreProfile.propTypes = {

};

export default StoreProfile;