import React from 'react'
import { Input,Row,Col,Button } from 'antd';
import './changeMyInfo.styl'
import http from "../../../axios";
export default class ChangeMyInfo extends React.Component{
    componentWillMount(){
        this.getData();
        this.state={
            status:'',//必须写上status,否则下面this.state.status会报错,其他无所谓
        }
    }
    getData=()=>{
        let userId=localStorage.getItem('userId')
        http.post('/userInfo/info',{userId:userId}).then((res)=>{
            if(res.status!='0'){
                alert('好像出了点以外刷新看看')
            }else{
                let temp=res.result.info;
                //console.log(temp)
                this.setState({
                    userId:temp.userId,
                    userImg:temp.userImg,
                    status:temp.status,
                    userName:temp.userName,
                    email:temp.email,
                    courseList:temp.courseList
                })
                //console.log(this.state.status)

            }
        })
    }
    getUserName=(e)=>{
        this.setState({
            modifyUserName:e.target.value
        })
    }
    getEmail=(e)=>{
        this.setState({
            modifyEmail:e.target.value
        })
    }
    modifyInfo=()=>{
        if((this.state.modifyUserName===undefined||this.state.modifyUserName.length===0)&&(this.state.modifyEmail===undefined||this.state.modifyEmail.length===0)){
            alert('您没有改变任何信息,请输入您打算修改的项目')
        }else{
            let email=this.state.modifyEmail
            let userName=this.state.modifyUserName
            let params;
            if((email!=undefined&&email.length>0)&&(userName!=undefined&&userName.length>0)){
                params={
                    userId:this.state.userId,
                    email:email,
                    userName:userName
                }

            }else if(email!=undefined&&email.length>0){
                params={
                    userId:this.state.userId,
                    email:email
                }
            }else if(userName!=undefined&&userName.length>0){
                params={
                    userId:this.state.userId,
                    userName:userName
                }
            }else{
                alert('一场抛出')
            }
            http.post('/userInfo/modify',params).then((res)=>{
                if(res.status!='0'){
                    alert('修改失败,请稍后重试')
                }else{
                    window.location.href='/Info/myInfo'
                }
            })

        }

    }


    render(){

        return(
            <Row className='changeMyInfo'>
                <Col span='3'/>
                <Col span='7' style={{display:'flex',justifyContent:'flex-end',paddingRight:'20px'}}>
                    <img src={this.state.userImg} className='userImg'/>
                </Col>
                <Col span='11' style={{display:'flex',justifyContent:'flex-start'}}>

                    <ul style={{listStyle:'none',width:'300px'}}>
                        <li><span>姓名:</span>
                            <Input placeholder={this.state.userName} size='large'  onChange={(e)=>{this.getUserName(e)}}/>
                        </li>
                        <li><span>邮箱:</span>
                            <Input placeholder={this.state.email} size='large' onChange={(e)=>this.getEmail(e)}/>
                        </li>
                        <li><span>系统号:</span>
                            <Input placeholder={this.state.userId} size='large' disabled='false'/>
                        </li>
                        <li><Button className='changeMyInfo-button' onClick={this.modifyInfo}>确认</Button></li>

                    </ul>


                </Col>
                <Col span='3'/>
            </Row>
        )
    }
}