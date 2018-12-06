import React from 'react'
import { Row,Col,Card,Icon,Avatar,List,Button } from 'antd';
import http from './../../../axios/index'
import './myCourse.styl'
const { Meta } = Card;



export default class MyClass extends React.Component{
    componentWillMount(){
        this.getData();
        this.state={
            status:'',//必须写上status,否则下面this.state.status会报错,其他无所谓
            courseTree:''
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
                    courseList:temp.courseList,
                    courseTree:this.getcourseTree(temp.courseList)
                })
                //console.log(this.state.status)

            }
        })
    }
    getcourseTree=(data)=>{
        if(data.length>0){
            return data.map((item,index)=>{
                return <Row gutter={16} key={index}><Card title={item.courseName} bordered={false}  style={{width:'calc(100% - 50px)'}}>
                    {item.courseInfo}
                    <p>
                        <span >{item.courseId}  </span>
                        <span >{item.courseSN}  </span>
                    </p>
                    <Button onClick={(index)=>{console.log('key:'+index)}}>详情</Button>
                    </Card>
                </Row>
            })
        }else{
            return ''
        }
    }


    render(){
        return(
            <Row className='course-all'>

                <Col span='6' />
                <Col span='12' className='course-center'>
                    <div className='CourseInfo'>
                        <span style={{fontSize:'20px',fontWeight:900,paddingLeft:'10px'}}>我的课程</span>
                        {this.state.courseTree}

                    </div>
                </Col>
                <Col span='6' />


            </Row>
        )
    }
}



