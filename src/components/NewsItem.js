import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div  style={{display:'flex', justifyContent:'flex-end', position:'absolute',right:'0'

          }}>
                 <span class="badge rounded-pill bg-danger ">
                {source} </span>
          </div>
        <img
            src={
              imgUrl
                ? imgUrl
                : "https://images.hindustantimes.com/img/2021/08/28/1600x900/PZU3WIYBYNMBXDP74Y3AM6UE7Q_1630137876393_1630137887051.jpg"
            }
            class="card-img-top"
            alt="..."
          />
            <div className="card-body"><h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">  By {author ? author : "Unknown"} on{" "} {new Date(date).toGMTString()}
               </small> </p>
           <a href={newsUrl} target="_blanks" className="btn btn-sm btn-dark">Read More</a>
              
            
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
