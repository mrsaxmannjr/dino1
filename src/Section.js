import React from "react";

export class Section extends React.Component {
  listItem(data) {
    return (
      <li key={data.id}>
        <h4>{data.title}</h4>
        <small>{data.pay}</small>
        <p>{data.description}</p>
        <small>{data.interested.length} dinos are interested in this job</small>
      </li> 
    )
  }

  render() {
    return (
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
          {this.props.listings.map(this.listItem)}
        </ul>
      </section>
    )
  }
}
