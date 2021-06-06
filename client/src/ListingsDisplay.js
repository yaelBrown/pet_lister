import axios from 'axios'
import React, { Component } from 'react'

export default class ListingsDisplay extends Component {
  constructor(props) {
    super()
    this.state = {
      data: [],
      loading: true
    }
  }
  
  componentDidMount() {
    axios.get("http://localhost:5000/")
      .then(res => res.data)
      .then((res) => {
        console.log(res)
        this.setState({loading: false, data: res.data})  
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
    return (listings.length == 0) ? "No listings were found" : listings
  }

  render() {


    return (
      <div>
        <h1>Listings Display</h1>
        <div className="row">
          <span>Heading</span>
          <span>SubHeading</span>
          <span>Data</span>
        </div>
        <div>
          <span>(db content here)</span>
        </div>
        <div>
          {(this.state.loading) ? "Loading..." : this.displayListings()}
        </div>
      </div>
    )
  }
}
