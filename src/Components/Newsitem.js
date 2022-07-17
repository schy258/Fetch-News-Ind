import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, Date, author, namen } = this.props;
    return (
      <div><div className="card" style={{ width: "18rem"}}>
       
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
        <span style={{zIndex:1, left:'80%'}} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          {namen}
          {/* <span class="visually-hidden">unread messages</span> */}
        </span>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...(Read More)</p>
          <p class="card-text"><small class="text-muted">By {!author ? "unknown" : author} on {Date}</small></p>
          <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read This</a>
        </div>
      </div></div>
    )
  }
}

export default Newsitem
