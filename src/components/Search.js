import React, { Component } from 'react'

class Search extends Component{

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let query = event.target.value
        console.log('search query string: ', query)
        this.props.searchQuery(query)
    }

    render(){
        return(
            <div>
                <input onChange={this.handleChange} type="text" placeholder="Search repository" name="Search repository" />
                <style jsx>{`
                    input[type='text']{
                        padding: 10px;
                        width: 500px;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Search
