import React, { Component } from 'react'

class ReposListing extends Component{

    render(){
        // let globalRepo = []
        // console.log('repo data: ', this.props.repos.repos)
        return(            
            <div>
                <table>
                    <tr>
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
                `}
            </style>
            </div>
        )
    }
}

export default ReposListing
