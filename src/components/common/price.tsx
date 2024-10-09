import React from 'react'

interface PriceI{
    price: string,
    className?: string,
}

const   Price = ({price, className}: PriceI) => {
  return (
    <div className={`${className} font-bold text-base text-lightFirst dark:text-darkFirst`}>
      <p>{price}</p>
    </div>
  )
}

export default  Price
