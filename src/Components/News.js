import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {

  constructor(props){
    super(props);
    console.log("This is constructor");
    this.state={
      articles:[],
      loading:true,
      page:1,
    }
    document.title=`${this.props.category }- FETCH NEWS`
  }

  async componentDidMount(){
    this.props.setprogress(70);
    console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`;
   this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    this.props.setprogress(100);
  }

   handlePrev=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false
      
    })

  }

  handleNext=async()=>{
    console.log("next");
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

  
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
      
    })}
  }

  render() {
    return (
      <div className='container my-4'>
        <h2 className='mb-4 mt-5 text-center'  style={{color:"black"}}>Top Headlines from {this.props.category}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3 mx-4 my-3" key={element.url}>
            <Newsitem  title={element.title.slice(0,35)} description={element.description} namen={element.source.name} imageUrl={element.urlToImage} newsUrl={element.url} Date={element.publishedAt} author={element.author} />

          </div>

        })}
         
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrev}>&#8592; previous </button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNext}>next &#8594;</button>
        </div>
      </div>
    )
  }
}

export default News




