import React from 'react'

type Props = {}

const SectionHeading = ({children}: {children: React.ReactElement}) => {
  return ( 
  <h2 className='text-3xl font-medium capitalize mb-8'>
    {children}
  </h2>
  )
}

export default SectionHeading