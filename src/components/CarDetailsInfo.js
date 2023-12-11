import React from 'react'
import { addComma } from '../controller/controller';

export default function CarDetailsInfo( {selectedCar} ) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(price);
      };
    return (
        <div className='w-full'>
            <div className='border border-black'>

                <div className='img-container aspect-w-16 aspect-h-9 border-b border-black flex justify-center'>
                    <img src={selectedCar.image} className="aspect-content object-cover" alt='Car' />
                </div>

                <div className='border-b border-black pl-8 py-5'>
                    <p className='font-west-avenue text-3xl'>{`${selectedCar.Year} ${selectedCar.Make} ${selectedCar.Model}`}</p>
                    <p>{`${addComma(selectedCar.Mileage)} miles`}</p>
                </div>

                <div className='border-b border-black pl-8 py-5'>
                    <p>{`${selectedCar.Description}`}</p>
                </div>

                <div className='font-bold text-2xl pl-8 py-5'>
                    <p>{`${formatPrice(selectedCar.Price)}`}</p>
                </div>

            </div>
        </div>
    )
}
