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
        http.post('/course',{userId:userId}).then((res)=>{
            if(res.status!='0'){
                alert('好像出了点以外刷新看看')
            }else{
                let temp=res.result.courselist;
                console.log(temp)
                this.setState({

                    courseTree:this.getcourseTree(temp)
                })
                //console.log(this.state.status)

            }
        })
    }
    getRouterAddress=(e)=>{
        //console.log(e.target.dataset.courseid)
        let courseId=e.target.dataset.courseid;
        let courseSN=e.target.dataset.coursesn;
        let params={
            courseId:courseId,
            courseSN:courseSN
        }
        this.props.history.push({pathname: '/course/detail', state: {params: params}})



    }
    getcourseTree=(data)=>{
        if(data.length>0){
            return data.map((item,index)=>{
                return <Row gutter={16} key={index}><Card title={item.courseName} bordered={false}  style={{width:'calc(100% - 50px)'}}>
                    简介: <b>{item.courseInfo}</b>
                    <p/>
                    <p className='course'>
                        <span >课程号:  <b>{item.courseId}</b>  </span>
                        <span >课序号:  <b>{item.courseSN}</b>  </span>
                    </p>
                    <Button onClick={(e)=>{this.getRouterAddress(e)}} style={{float:'right'}} data-courseId={item.courseId} data-courseSN={item.courseSN}>详情</Button>
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



