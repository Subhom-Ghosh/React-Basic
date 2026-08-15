import React from 'react'

import {RiArrowRightUpLine} from '@remixicon/react'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <div className='p-6'>
            <h3 className='text-5xl leading-[1.1] font-bold mb-7' >Prospective <br /> <span className='text-gray-600'>customer</span> <br /> segmentation</h3>

            <p className='text-xl w-[90%] font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi distinctio rem architecto sunt nam mollitia quibusdam reiciendis quidem omnis?</p>
        </div>
        <div className=''>
            <RiArrowRightUpLine size={90}/>
        </div>
    </div>
  )
}

export default LeftContent