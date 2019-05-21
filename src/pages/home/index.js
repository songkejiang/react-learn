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
                    <img src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" width='100%'/>
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