import React from 'react'

const Card = (props) => {
    return (
        <div>

            <div className="card w-[300px] border m-5 p-3 rounded-2xl border-gray-300 shadow-md">
                <div className="card-header">
                    <h3 className='text-xl font-bold'>{props.cardName}</h3>
                </div>
                <div className="card-body">
                    <p>{props.cardBody}</p>
                </div>
            </div>

        </div>
    )
}

export default Card