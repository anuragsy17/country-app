import '../App.css';
import React, { Component } from 'react';
import Counter from './Counter';


class App extends Component{
  constructor(props){
    super(props)
  }
      componentDidMount() {
          this.props.fetchUser('africa');
      }
      xyz = (e) => {
          this.props.fetchUser(e.target.value);
          console.log('hello', e.target.value);
      }
      render() {
          return this.props.loading ? (
              <h2>Loading</h2>
          ) : this.props.error ? (
              <h2>{this.props.error}</h2>
          ) : (
              <>
                  <h1 id='header'>welcome</h1>
                  <Counter
                      countryNames={this.props.countryNames}
                      onChangeItem={this.xyz}
                  />
              </>
          )
      }
  }




















// render(){
//     return(
//     <Provider store={store}>
//     <div className="App">
//       <Countries/> 
      
//     </div>
//     </Provider>
//     )
//   }
// }
  


export default App;
