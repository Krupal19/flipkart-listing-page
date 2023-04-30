import React from 'react';
import Header from './Header';

function Error() {
    return (
        <>
            <Header />
            <div className='error'><span className='errorNumber'>404</span><br />Page is not found</div>
        </>
    )
}

export default Error;