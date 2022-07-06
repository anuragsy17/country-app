import React, { Component } from 'react';
class Dropdown extends Component {
    state = {  } 
    render() { 
        return ( 
            <> 
            <label for="" className='lable'>{this.props.lable}:</label>
                    <select name="select" id={this.props.id} onChange={this.props.onChange}>
                        {this.props.values.map((value)=>{ 
                            return <option value={value} selected>{value}</option>
                        })}
                    </select>
            </>
        );
    }
}
 
export default Dropdown;