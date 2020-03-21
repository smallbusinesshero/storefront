import React, { useState, setState, useEffect } from 'react';

import StoresService from './../services/stores';
//import ProductsService from './../services/products';

export default function Samples() {
    const [data, setData] = useState({});
    useEffect(() => {
        const StoreServiceInstance = new StoresService();
        const SampleDataStores = StoreServiceInstance.getStores('1').then(setData)
    }, []);

    return (
        <div>
            <h2>Samples</h2>
            <h3>Stores</h3>
            {JSON.stringify(data)}
        </div>
    );
}