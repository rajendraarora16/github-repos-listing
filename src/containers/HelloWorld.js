import React from 'react'
import { connect } from 'react-redux'
import { searchFetch } from '../actions/action.js'
import Search from '../components/Search'
import ReposListing from '../components/ReposListing'
import MainTableListing from '../components/MainTableListing'


class HelloWorld extends React.Component {

    constructor(props) {
        super(props)
        this.searchQuery = this.searchQuery.bind(this)
    }

    searchQuery( query ) {
        if(query.length != 0) {
            this.props.dispatch( searchFetch(query) )
        }
    }

    render() {
        // this.props.serchData.combReducer.globalReducer.searchData.repos.forEach(function(key, value) {
        //     console.log('asd: ', key)
        // });
        return (
            <div>
                <h1>Welcome to search repository assignment</h1>
                <Search searchQuery = {this.searchQuery} /><br/>
                <MainTableListing repos={this.props.serchData.combReducer.globalReducer.searchData} />
                {/* <ReposListing /> */}
                <br/><br/><br/>
                <p><strong>Disclaimer: </strong>Due to less timing I wasn't able to list in table. However data is coming, you could check in console.</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        serchData: state
    }
}

export default connect(mapStateToProps)(HelloWorld);
