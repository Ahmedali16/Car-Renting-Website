import React from 'react'
import Banner from './Home/Banner'
import PicCar from './PicCars/PicCar'
import Brands from './RentBrands/Brands'
import Working from './HowWork.tsx/Working'
import ServicesBenefits from './ServicesAndBenefits/ServicesBenefits'
import CustomerReview from './CustmerSays.tsx/CustomerReview'
import MainCard from './CarRentCard/MainCard'
import { Card } from '@chakra-ui/react'
import CardBox from './CarRentCard/Card'



function Home() {
  return (
   <>
<Banner/>
<PicCar/>
<Brands/>
<CardBox/>
{/* <CarCard/> */}
{/* <MainCard/> */}
<Working/>
<ServicesBenefits/>
<CustomerReview/>
   
   </>
  )
}

export default Home