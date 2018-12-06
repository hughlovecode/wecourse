import React from 'react'
import http from './../axios/index'
export default class Demo extends React.Component{
    constructor(){
        super();
       this.getData()
        this.state={
           data:''
        }
    }
    getData=()=>{
        http.get('/userInfo',{}).then((res)=>{
            this.setState({
                data:res.data.result.count
            })
        })

    }
    render(){
        return(
            <div>
                {this.state.data}
            </div>
        )

    }
}