import React from 'react'
import './Card.css'

function Card(){
    (info) =>{
        return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={info.imageUrl} alt=""/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{info.title}</h3>
                </div>
                <div className='card-body'>
                    <p>{info.body}</p>
                </div>
            </div>
            <div className='btn'>
                <button>
                    <a>
                        blublublu
                    </a>
                </button>
            </div>
        </div>
    );
        }
}

export default Card;