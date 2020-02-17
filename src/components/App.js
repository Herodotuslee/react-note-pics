import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{
    onSearchSubmit(term){
console.log('term~~',term)
        axios.get('https://api.unsplash.com/search/photos',{
            parmas:{query:term},
            headers:{
                Authorization:'Client-ID 9H7bm-An29yMTG7PI-p4wHHj1RTCc2PBrre5eN26lcg'
            }
        }).then(response=>{
            console.log('response',response.data.results)
        }).catch(
           err=>{
               console.log('err',err)
           }
        )
    }
   render(){
    return ( <div className='ui container' style={{marginTop:'10px'}}>
    <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>)
   }
}

export default App