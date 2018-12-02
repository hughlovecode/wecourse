import React from 'react'
import {Menu} from 'antd'
import MenuList from './../../config/MenuConfig'
import {Route,HashRouter,Switch,NavLink} from 'react-router-dom'
import './NavLeft.styl'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{

    constructor(){
        super()
        this.state={
            menuList:MenuList,
            menutree:''
        }
    }
    componentWillMount(){
        let menutree=this.initList(this.state.menuList)
        this.setState({
            menutree:menutree
        })
    }
    initList=(data)=>{

        return data.map((item)=>{
            if(item.children){
                return <SubMenu key={item.key} title={item.title}>{this.initList(item.children)}</SubMenu>
            }
            else{
                return <Menu.Item key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>

                </Menu.Item>
            }
        })



    }

    render(){
        return(

            <Menu  style={{ width: 256 }} mode="vertical" theme='dark'>
                {/*前面需要放logo和一些基本的信息*/}
                {/*下面这样写调试时浏览器会报22个错,不用管*/}
                <img src='/assets/logo.png' className='logo'/>
                {this.state.menutree}
            </Menu>

        )
    }
}