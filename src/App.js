import React, { Component ,use} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import News from './Components/News';
import Main from './Components/Main';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=15;
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      // Api key- d38c58b583894a748a488c8bfe7d864b
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={2}
        color='red'
        progress={this.state.progress}
      />
        <Routes>
          <Route path=''element={<Main/>}/>
          <Route exact path='/sports' element={<News setprogress={this.setprogress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country={"in"} category={"sports"}/>}/>
          <Route exact path='/business' element={<News setprogress={this.setprogress} apiKey={this.apiKey}  key='business' pageSize={this.pageSize} country={"in"} category={"business"}/>}/>
          <Route exact path='/entertainment' element={<News setprogress={this.setprogress} apiKey={this.apiKey}  key='entertainment' pageSize={this.pageSize} country={"in"} category={"entertainment"}/>}/>
          <Route exact path='/general' element={<News setprogress={this.setprogress} apiKey={this.apiKey}  key='general' pageSize={this.pageSize} country={"in"} category={"general"}/>}/>
          <Route exact path='/health' element={<News setprogress={this.setprogress} apiKey={this.apiKey}  key='health' pageSize={this.pageSize} country={"in"} category={"health"}/>}/>
          <Route exact path='/science' element={<News setprogress={this.setprogress} apiKey={this.apiKey}  key='science' pageSize={this.pageSize} country={"in"} category={"science"}/>}/>
          <Route exact path='/technology' element={<News setprogress={this.setprogress} apiKey={this.apiKey}  key='altechnologyl' pageSize={this.pageSize} country={"in"} category={"technology"}/>}/>
        </Routes>
        </BrowserRouter>
        {/* <News setprogress={this.setprogress} pageSize={this.pageSize} country={"in"}/> */}
      </div>
    )
  }
}
