import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Link,Redirect} from 'react-router-dom'
import FirstPage from './firstPage'
import './App.css';
import Login from './components/Login/login'
import NoMatch from './pages/NoMatch/NoMatch'
import Home from './pages/manage/home/home'
import MyInfo from './pages/manage/myInfo/myInfo'
//import changeMyInfo from './pages/manage/changeMyInfo/changeMyInfo'
import changeMyInfo from './pages/manage/changeMyInfo/changeMyInfo'
import MyCourse from './pages/manage/mycourse/myCourse'
class App extends Component {
    constructor(){
        super()
        this.state={
            isLogin:true,

        }
    }
    componentWillMount(){
        //this.checkLogin()
    }
    checkLogin=()=>{
        var that=this
        //监测是否登录
        let t= new Promise((resolve,reject)=>{
                this.setState({
                    isLogin:!this.state.isLogin
                })
                resolve();

            })

        t.then(function () {
            //如果登录,跳转到home,否则跳转到login
            if(that.state.isLogin){

            }else{
                //window.location.href="login"
            }
        })

    }
  render() {

            return (
                <div className='body'>
                    <BrowserRouter>

                        <FirstPage>
                            <Switch>
                                <Route path='/login' exact={true} component={Login}></Route>
                                <Route path='/Info/myInfo' component={()=><Home>
                                    <Route path='/Info/myInfo' component={MyInfo}/>
                                </Home>}></Route>
                                <Route path='/Info/changeMyInfo' component={()=><Home>
                                    <Route path='/Info/changeMyInfo' component={changeMyInfo}/>
                                </Home>}></Route>
                                <Route path='/course/mycourse' component={()=><Home>
                                    <Route path='/course/mycourse' component={MyCourse}/>
                                </Home>}></Route>
                                <Redirect path="/" to={{pathname: '/login'}} />
                            </Switch>


                        </FirstPage>

                    </BrowserRouter>
                </div>
            );



  }
}

export default App;
