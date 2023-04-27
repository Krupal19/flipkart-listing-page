import React from 'react';
import Header from './Header';

function Error() {
    return (
        <>
            <Header />
            <div className='error'><span className='errorNumber'>404</span><br /><span className='errorText'>Page is not found</span></div>
        </>
    )
}

export default Error;