import React from 'react'
import {Row,Col} from 'antd'
import http from './../../axios/index'
import './login.styl'
export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            switchIndex:true,
        }
    }
    componentWillMount(){
        this.setState({
            show1:this.state.switchIndex?'block':'none',
            show2:!this.state.switchIndex?'block':'none',
        })
        //storage,判断能否跳过登录
        if(window.localStorage.getItem('userId')!=null&&window.localStorage.getItem('userId').length>0){
            this.props.history.push('/Info/myInfo')
        }

    }
    switch1=()=>{
        this.setState({
            show1:'block',
            show2:'none',
            switchIndex:true
        })
    }
    switch2=()=>{
        this.setState({
            show1:'none',
            show2:'block',
            switchIndex:false
        })
    }
    //登录处理函数
    login=()=>{
        if(this.refs.userName.value==''||this.refs.password.value==''){
            alert('请输入完整')
        }else{
            if(!window.localStorage){
                alert('你的浏览器不支持loaclstorage,请使用chrome')
            }else{
                //登录过程
                http.post('/userInfo/login',{
                    userName:this.refs.userName.value,
                    password:this.refs.password.value
                }).then((res)=>{
                    if(res.status==='1'){
                        alert('用户名或者密码错误')
                    }else if(res.status==='2'){
                        alert('您还没有注册哦~')
                    }else{
                        //alert(res.result.userInfo)
                        let storage=window.localStorage;
                        //将基础信息存到localstorage中
                        storage.setItem('userId',res.result.userInfo.userId)
                        storage.setItem('userName',res.result.userInfo.userName)
                        storage.setItem('userImg',res.result.userInfo.userImg)
                        window.location.href='/Info/myInfo'

                    }
                })
            }
            //return <Redirect to='/Info/myInfo'/>

        }
    }

    render(){
        var style1={
            display:this.state.show1
        }
        var style2={
            display:this.state.show2
        }
        var style3={
            borderBottom:this.state.switchIndex?'2px solid black':'2px',
            marginRight:'20px'
        }
        var style4={
            borderBottom:!this.state.switchIndex?'2px solid black':'2px'
        }


        return(
            <div className='back' >
            <Row className='back2'>
                <Col span='14'></Col>
                <Col span='10' className='login' >
                    <div className='LoginDiv'>
                        <Row className='SwitchBox'>
                            <Row className='tips'>
                                <Col span='4'/>
                                <Col span='20'>
                                    <span onClick={this.switch1} style={style3} >登录</span>
                                    <span onClick={this.switch2} style={style4} >注册</span>
                                </Col>
                            </Row>
                            <Row className='LoginInfo' style={style1}>
                                <Col span='4'/>
                                <Col span='20' >
                                    <Row>
                                        <Col span='18'>
                                    <Row>
                                    <input className='inputCss' placeholder='请输入用户名' ref='userName'/>
                                    </Row>
                                    <Row>
                                    <input className='inputCss' placeholder='请输入密码' ref='password'/>
                                    </Row>
                                            <button className='check' onClick={this.login}>登录</button></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='RegisterInfo' style={style2}>
                                <Col span='4'/>
                                <Col span='20' >
                                    <Row>
                                        <Col span='18'>
                                    <Row>
                                        <input className='inputCss' placeholder='请输入用户名'/>
                                    </Row>
                                    <Row>
                                        <input className='inputCss' placeholder='请输入密码'/>
                                    </Row>
                                    <Row>
                                        <input className='inputCss' placeholder='请再次输入密码'/>
                                    </Row>
                                            <button className='check'>注册</button></Col></Row>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                </Col>
            </Row>
            </div>
        )
    }
}