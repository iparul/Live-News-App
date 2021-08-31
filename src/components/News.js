import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
   static defaultProps = {
       country : 'in',
       pageSize : 8,
       category : 'genral'

   }
   static propTypes= {
       country : PropTypes.string,
       pageSize : PropTypes.number,
       category : PropTypes.string,
   }
    
    constructor(props){
        super(props);
        this.state={

         articles: [],
         loading : false,
         page : 1,
         totalResul:0
        }
        document.title = `${this.props.category} - LiveNews`;
        
    }
    async updateNews(){
        this.props.setProgress(10);
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2d11e7f031b54e15801ccbfbfdcf09bf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data=await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json()
        this.props.setProgress(70);
        console.log(parseData);
        this.setState({articles: parseData.articles,
            totalResult: parseData.totalResults,
            loading : false
        });
        this.props.setProgress(100); 
    }
    async componentDidMount(){
        this.updateNews();
    }
    handleNextClick =async () =>{
        this.setState({page: this.state.page+1});
        this.updateNews();
    }
    fetchMoreData =async () => {
      this.setState({page : this.state.page +1});
      const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2d11e7f031b54e15801ccbfbfdcf09bf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
      let data=await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      this.setState({articles:this.state.articles.concat(parseData.articles) ,
          totalResult: parseData.totalResults
          
      });
      };
     render() {
        return (
            <>
                <h1 className="text-center" style={{margin: '30px 0px',marginTop:'90px'}}>LiveNews App - Top {this.props.category} Headlines</h1>
                {/* {this.state.loading && <Spinner />}*/}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>} >
       
                    <div className="container">
                        <div className="row">
                             {this.state.articles.map((element)=>{
                                return  <div className="col-md-4"key={element.url }>
                               <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage}
                                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                                   </div>  
                              })}
                       </div>
                    </div>
            </InfiniteScroll>
          </>  
        )
    }
}

export default News
