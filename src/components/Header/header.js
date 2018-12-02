import React from 'react'
import {Link} from 'react-router-dom'
import './header.styl'
import Util from './../../util/util'
export default class Header extends React.Component{
    constructor(){
        super()
        //将数据库查到的数据初始化
        this.state={
            isLogin:true,
            userName:sessionStorage.getItem('userName'),
            userImg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1788562038,3472846301&fm=27&gp=0.jpg',
            userId:'0101',
            status:'首页'
        }
    }
    componentWillMount(){
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
                <span className='loginstatus'>
                { this.state.isLogin&&<Link to='/login'>注销</Link>}
                    { (!this.state.isLogin)&&<Link to='/login'>已经登录</Link>}
                </span>
                <span className='systime'>{this.state.sysTime}</span>

            </section>
            </div>
        )
    }
}