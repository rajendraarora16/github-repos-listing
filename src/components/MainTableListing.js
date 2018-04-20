import React, { Component } from 'react'

class MainTableListing extends Component{

    render(){
        let globalRepo = []
        console.log('repo data: ', this.props.repos.repos)
        return(            
            <div>
                <table>
                    <tr className="main-table">
                        <td className="table-border">
                            ID
                        </td>
                        <td className="table-border">
                            Repo Title
                        </td>
                        <td className="table-border">
                            Owner
                        </td>
                        <td className="table-border">
                            Stars
                        </td>
                        <td className="table-border">
                            Created At
                        </td>
                    </tr>
                </table>
                <style jsx>{`
                .table-border {
                    border: 1px solid black;
                }
                table
                { 
                    margin-left: auto;
                    margin-right: auto;
                    padding:20px;
                }
                td{
                    padding:20px;
                    padding-left:20px;
                    padding-right:20px;
                }
                `}
            </style>
            </div>
        )
    }
}

export default MainTableListing
