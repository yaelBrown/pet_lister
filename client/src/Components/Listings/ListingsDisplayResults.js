import React, { Component } from 'react'
import ListingsDisplayResultsSample from './ListingsDisplayResultsSample.js'

import '../../Assets/css/ListingsDisplay.css'

export default class ListingsDisplayResults extends Component {
  constructor(props) {
    super()
    // not sure what to use this for
  }

  // renderListings() {
  //   this.props.data.map((e) => {
  //     <
  //   })
  // }

  render() {

    return (
      <div id="ldrwrapper">
        <section id="ldrwrapperHeader">
          <small>{(this.props.data.length) ? this.props.data.length : 0} Results</small>
        </section>
        <section id="ldrResults">
          {/* <div className="ldrResultsListing">
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
          </div> */}
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
          <ListingsDisplayResultsSample/>
        </section>
      </div>
    )
  }
}
