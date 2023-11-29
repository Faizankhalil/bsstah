import React from 'react'
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from 'react-router-dom'

const MainConfig = () => {
    document.title = "Configuration | Bsstah"
  return (
    <div className="page-content">
      <React.Fragment>
        <div className="container-fluid">
          <Breadcrumbs title="Configuration" breadcrumbItem="Auction Config"/>
          <div className='mt-3'>
          <Link to="/Auction-Config" className="border border-1 border-primary p-3 rounded shadow-sm text-primary">
                <span>Auctions Categories </span>
          </Link>
          </div>
            
        </div>
      </React.Fragment>
    </div>
   
  )
}

export default MainConfig