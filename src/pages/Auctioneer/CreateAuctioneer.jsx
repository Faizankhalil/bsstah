import React from 'react'
import AuctioneerFormWizard from './AuctioneerFormWizard';


const CreateAuctioneer = ({ match }) => {
const auctioneerId = match.params.id
  return (
    <>
    <div className='page-content'>
      <div className='conatiner-fluid'>
        <AuctioneerFormWizard auctioneerId={auctioneerId}/>
      </div>
    </div>
    </>
  )
}

export default CreateAuctioneer