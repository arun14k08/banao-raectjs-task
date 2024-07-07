import React from 'react'
import Card from '../../../components/Card'
import { addNewCardData } from '../../../utils/constants'

const AddNewCard = () => {
  return (
    <div className='bg-[#F7FDFF] px-6 py-12'>
        <Card {...addNewCardData}/>
    </div>
  )
}

export default AddNewCard