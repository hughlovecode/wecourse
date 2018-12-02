import React from 'react'
import {Link,Route,HashRouter} from 'react-router-dom'
import {Row,Col} from 'antd'
import NavLeft from './../../../components/NavLeft/NavLeft'
import Header from './../../../components/Header/header'
import Footer from './../../../components/Footer/footer'
import MyInfo from './../myInfo/myInfo'
import './home.styl'
import Router from "../../../firstPage";
export default class Login extends React.Component{
    render(){

        return(

            <div className='all'>
                <section className='navLeft'>
                    <NavLeft/>
                </section>
                <section className='right'>
                    <div className='header'><Header /></div>
                    <div className='container'>
                        {this.props.children}

                    </div>
                    <div className='header'><Footer className='footer'/></div>
                </section>

            </div>

        )
    }
}