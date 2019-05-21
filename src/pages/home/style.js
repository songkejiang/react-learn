import styled from 'styled-components'

export const HomeWraper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow:hidden;
`
export const HomeLeft = styled.div`
    width:960px;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
`
export const HomeRight = styled.div`
    width:240px;
    float:right;
`

export const TopicWraper = styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
`
export const TopicItem = styled.div`
    float:left;
    background: #f7f7f7;
    height:32px;
    line-height:32px;
    font-size: 14px;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic{
        width:32px;
        height:32px;
        float:left;
        display:block;
        margin-right:10px;
    }
`