import React, { Component } from 'react'
import './style.css'

export class Page1 extends Component {
    constructor(){
        super();
        this.state={
            users:null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users').then((response)=>{
            response.json().then((result)=>{
                this.setState({users:result.data})
            })
        })
      
    }
    render() {
        return (
            <div className="div">
                <h1 className="head">Fetching data from API</h1>

                <div >
                    <center>
                    <table className="table" border="15">
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>E-mail</th>
                        </tr>
                        {
                            this.state.users ? this.state.users.map((res,i)=>
                            <tr>
                                <td> {res.id} </td>
                                <td> {res.first_name} </td>
                                <td> {res.last_name} </td>
                                <td> {res.email} </td>
                            </tr>
                            )
                            :
                            null
                        }
                    </table>
                    </center>
                </div>
            </div>
        )
    }
}

export default Page1
