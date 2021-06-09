import React from 'react'

import '../../Assets/css/ListingsDisplay.css'
import PetImagePlaceholder from '../../Assets/img/pet_placeholder.png'

export default function ListingsDisplayResultsSample() {
  return (
    <div className="ldrResultsListing">
      <div className="ldrResultsListingLeft">
        <img src={PetImagePlaceholder} className="ldrResultsListingImg"/>
      </div>
      <div className="ldrResultsListingMiddle">
        <strong>Heading</strong>
        <br/>
        <small>Subheading</small>
      </div>
      <div className="ldrResultsListingRight">
        <small>2d</small>
      </div>
    </div>
  )
}
