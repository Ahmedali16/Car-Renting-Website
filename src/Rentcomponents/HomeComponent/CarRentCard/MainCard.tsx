import React from 'react'
import Audi from "../images/Cardimg/Audi.png";
import nissan from "../images/Cardimg/Nissan.png";
import porche from "../images/Cardimg/Porsche.png";
import Bmw from "../images/Cardimg/Bmw.png";
import BmwX from "../images/Cardimg/BmwX.png";
import porcheC from "../images/Cardimg/PorscheC.png";
import CarCard from './CarCard';

function MainCard() {
  return (
    <>
    <CarCard CardImage={Audi} CardHeading='Audii A8 ' CardText='1200/' />
    </>
  )
}

export default MainCard