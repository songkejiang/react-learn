import React, {Component} from 'react'
import {HomeWraper, HomeLeft, HomeRight} from './style'
import List from './component/List'
import Topic from './component/Topic'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
class Home extends Component {
    render() {
        return(
            <HomeWraper>
                <HomeLeft>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend> 
                    <Writer></Writer>
                </HomeRight>    
            </HomeWraper>
        )
    }
}
export default Home