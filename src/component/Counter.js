import React, { Component } from 'react';
import {regionName} from '../mock/mock.js'
import Dropdown from './dropdown.js';

class Counter extends Component {
    constructor(props){
        super(props)
    }
    state = { region: [] }
    componentDidMount(){
        const region = regionName.map((x)=>{ return x})
        this.setState({region: region})
    } 
    render() { 
        const regionNames = this.state.region.map((r) => r.name);
        return (
            <>
            <form action="#" id='main-container'>
                    <div id='dropdown-container'>
                        <Dropdown 
                            lable='region' 
                            values={regionNames}
                            id={'region'} 
                            onChange = {(data)=>{this.props.onChangeItem(data)}}
                        />
                        <Dropdown 
                            lable='country' 
                            values={this.props.countryNames}
                            id={'country'}    
                        />
                    </div>
                </form> 
            </>
        );
    }
}
 
export default Counter;

























{/* <label for="" className='lable'>Region:</label>
                    <select name="select" id="region" onChange={(data)=>{this.props.onChangeItem(data)}}>
                        <option value="">select</option>
                        {this.state.region.map((regionName)=>{ 
                            return <option value={regionName.name} selected>{regionName.name}</option>
                        })}
                    </select>
                    <label for="" className='lable'>Country:</label>
                    <select name="select" id="country">
                        {this.props.countryOptions}
                    </select> */}