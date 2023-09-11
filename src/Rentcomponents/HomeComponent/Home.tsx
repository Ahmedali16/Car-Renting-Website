import React from 'react'
import Banner from './Home/Banner'
import PicCar from './PicCars/PicCar'
import Brands from './RentBrands/Brands'
import CarCard from './CarRentCard/Card'
import Working from './HowWork.tsx/Working'
import ServicesBenefits from './ServicesAndBenefits/ServicesBenefits'
import CustomerReview from './CustmerSays.tsx/CustomerReview'


function Home() {
  return (
   <>
<Banner/>
<PicCar/>
<Brands/>
<CarCard/>
<Working/>
<ServicesBenefits/>
<CustomerReview/>
   
   </>
  )
}

export default Home