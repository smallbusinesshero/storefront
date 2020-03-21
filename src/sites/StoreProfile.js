import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const StoreProfile = props => {

    const [storeData, setStoreData] = useState(null);

    useEffect(()=>{},[]);

    const fetchStoreData = () => {

    };

    return (
        <div id="#store-profile">
            <h1>Store</h1>
            {props.storeId}
        </div>
    );
};

StoreProfile.propTypes = {

};

export default StoreProfile;