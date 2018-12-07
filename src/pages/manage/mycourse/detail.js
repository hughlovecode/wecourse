import React from 'react'
import http from './../../../axios/index'
import { List, Avatar } from 'antd';
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
export default class Detail extends React.Component{
    constructor(params){
        super(params)
        http.post('/course/detail',this.props.location.state.params).then((res)=>{
            if(res.status!=='0'){
                alert('抱歉,出问题了!')
                console.log(res)
            }else{
                console.log(res)
            }
        })
    }
    render(){
        return(
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        )
    }
}