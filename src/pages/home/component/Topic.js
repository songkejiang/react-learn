import React, {Component} from 'react'
import {TopicWraper, TopicItem} from '../style'
import {connect} from 'react-redux'
class Topic extends Component {
    render() {
        return(
            <TopicWraper>
                {this.props.toipicList.map((item) => {
                    return (
                        <TopicItem key={item.get('id')}>
                            <img 
                            className='topic-pic'
                            src={item.get('imgUrl')} alt=""/>
                            {item.get('title')}
                        </TopicItem>
                    )
                })}
            </TopicWraper>
        )
    }
}
const mapState = (state) => ({
   toipicList: state.get('home').get('topicList')
})
export default connect(mapState, null)(Topic)