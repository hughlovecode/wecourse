import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Link,Redirect} from 'react-router-dom'
import FirstPage from './firstPage'
import './App.css';
import Login from './components/Login/login'
import Home from './pages/manage/home/home'
import MyInfo from './pages/manage/myInfo/myInfo'
//import changeMyInfo from './pages/manage/changeMyInfo/changeMyInfo'
import changeMyInfo from './pages/manage/changeMyInfo/changeMyInfo'
import MyCourse from './pages/manage/mycourse/myCourse'
import Detail from './pages/manage/mycourse/detail'
import AddMyCourse from './pages/manage/addMyCourse/addMyCourse'
class App extends Component {
    constructor(){
        super()
        this.state={
            isLogin:true,

        }
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
                                <Route path='/course/detail' component={()=><Home>
                                    <Route path='/course/detail' component={Detail}/>
                                </Home>}></Route>
                                <Route path='/course/addMyCourse' component={()=><Home>
                                    <Route path='/course/addMyCourse' component={AddMyCourse}/>
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
