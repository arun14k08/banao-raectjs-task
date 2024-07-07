import React from 'react'
import Card from '../../../components/Card'
import { addNewCardData } from '../../../utils/constants'

const AddNewCard = () => {
  return (
    <div className='bg-[#F7FDFF] px-6 py-12 md:p-[100px]'>
        <Card {...addNewCardData}/>
    </div>
  )
}

export default AddNewCard