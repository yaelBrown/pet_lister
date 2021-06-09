import React, { Component } from 'react'
import ListingsDisplayContentSample from './ListingsDisplayContentSample.js'

import ListingsService from '../../Services/ListingsService.js'

import '../../Assets/css/ListingsDisplay.css'

export default class ListingsDisplayContent extends Component {
  

  render() {
    return (
      <div id="ldcwrapper">
        {/* <h2>ListingDisplayContent</h2>
        <small>{(this.props.data === undefined) ? "No Listing selected" : "something is there"}</small> */}
        <ListingsDisplayContentSample/>
      </div>
    )
  }
}
