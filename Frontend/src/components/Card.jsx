import React from 'react';

const Card = ({ item }) => {
    console.log(item, "item3");

    return (
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
            <figure>
                <img
                    src={item.image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{item.price}</div>
                    <div className="badge badge-outline rounded-full cursor-pointer hover:bg-pink-50 hover:text-black px-2 py-1 duration-200">Buy Now</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
