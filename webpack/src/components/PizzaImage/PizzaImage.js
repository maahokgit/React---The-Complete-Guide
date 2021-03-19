import React from 'react';

import Style from './PizzaImage.module.css';

import PizzaImage from '../../assets/pizza.jpg'

const pizzaImage = props => (
    <div className={StyleMedia.PizzaImage}>
        <img src={PizzaImage} className={Style.PizzaImg} />
    </div>
)

export default pizzaImage;