import React, { Component } from 'react'
// import { Row } from 'reactstrap'
import ListingsDisplayDropdown from './ListingsDisplayDropdown.js'
import ListingsDisplayContent from './ListingsDisplayContent.js'
import ListingsDisplayResults from './ListingsDisplayResults.js'

import ListingsService from '../../Services/ListingsService.js'

import '../../Assets/css/ListingsDisplay.css'


export default class ListingsDisplay extends Component {
  constructor(props) {
    super()
    this.state = {
      data: [],
      loading: true,
      selectedListing: undefined
    }
  }
  
  componentDidMount() {
    ListingsService.getAllListings()
      .then(res => res.data)
      .then((res) => {
        console.log(res)
        this.setState({loading: false, data: res.data, selectedListing: res.data[2]})  
      })

  }

  displayListings() {
    let listings = []
    this.state.data.map((e) => {
      console.log(e)
      listings.push(
        <div className="row">
          <span>{e.idx}</span>
          <span>{e.heading}</span>
          <span>{e.subheading}</span>
          <span>{e.data}</span>
        </div>
      )
    })
    return (listings.length === 0) ? "No listings were found" : listings
  }

  render() {
    return (
      <div className="ldwrapper">
        <div className="ldcontainer">
          <section className="ldheader">
            <span>left</span>
            <ListingsDisplayDropdown/>
          </section>
          <section className="ldContentArea">
            <ListingsDisplayResults data={this.state.data}/>
            <ListingsDisplayContent data={this.state.selectedListing}/>
          </section>  

        </div>
        {/* add drop shadow to wrapper, add drop down to right, create content panel, create listings */}
      </div>
    )
  }
}
