import React from 'react';

const BtnSpinner = () => {
    return (
        <div className='text-white flex items-center'>
            <span>Loading{" "}</span>
            <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
        </div>
    );
};

export default BtnSpinner;