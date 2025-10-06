import React from 'react'

const Card2 = ({ cardName, cardBody }) => {
    return (
        <div>
            <div className="card w-[300px] border m-5 p-3 rounded-2xl border-gray-300 shadow-md">
                <div className="card-header">
                    <h3 className='text-xl font-bold'>{cardName}</h3>
                </div>
                <div className="card-body">
                    <p>{cardBody}</p>
                </div>
            </div>
        </div>
    )
}

export default Card2