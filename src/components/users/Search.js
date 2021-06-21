import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

    state={
        text: ""
    }

    static propTypes ={
        searchUser: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onSubmit (e) {
        e.preventDefault();
        if(this.state.text === '')
        {
            this.props.setAlert('Please Enter Something', 'light');
        }
        else{
        this.props.searchUser(this.state.text);
        this.setState({ text : "" })
        }
    }

    onCange = (e) => {  this.setState({ text: e.target.value }) }

    render() {
        
        const {clearUsers, showClear} = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className='form'>
                    <input 
                        type="text" name="text" placeholder="Search Users" 
                        value={this.state.text} onChange={this.onCange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>

                {(showClear) && 
                <button className="btn btn-light btn-block" 
                onClick={clearUsers} >
                    Clear
                </button>}
            </div>
        )
    }
}

export default Search
