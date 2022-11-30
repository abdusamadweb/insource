import './Loader.scss'
import React, {useEffect, useState} from 'react';

const Loader = ({component}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {

            await new Promise((r) => setTimeout(r, 1500));

            setLoading(false);
        };

        loadData();
    }, [])

    if (loading) {
        return (
            <div className='loader'>
                <h2>Loading . . .</h2>
            </div>
        )
    }

    else {
        return component
    }
};

export default Loader;
