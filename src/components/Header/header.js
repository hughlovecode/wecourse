import React from 'react'
import {Link} from 'react-router-dom'
import './header.styl'
import Util from './../../util/util'
export default class Header extends React.Component{
    constructor(){
        super()
        //将数据库查到的数据初始化
    }
    checkLogin=()=>{
        let temp=localStorage.getItem('userId')
        //alert('temp'+temp)
        if(temp!=null&&temp.length>0){
            this.setState({
                status:'首页',
                userName:localStorage.getItem('userName'),
                userImg:localStorage.getItem('userImg'),
                userId:localStorage.getItem('userId'),
            })
        }else{
            window.location.href='/login'
        }
    }
    //下线函数
    logout=()=>{
        localStorage.removeItem('userId');
        window.location.href='/login'

    }
    componentWillMount(){
        this.checkLogin()
        setInterval(()=>{
            let sysTime= Util.formateDate(new Date().getTime())
            this.setState({
                sysTime:sysTime
            })
        },1000)

    }
    render(){
        return(
            <div className='header'>
                <section className='info'>
                    <span className='userName'>{this.state.userName}</span>
                    <div className='Img'><img src={this.state.userImg} className='userImg'/></div>
                </section>
            <section className='status'>
                <span className='statusPage'>{this.state.status}</span>
                <span className='loginstatus' onClick={this.logout}>
                注销
                </span>
                <span className='systime'>{this.state.sysTime}</span>

            </section>
            </div>
        )
    }
}