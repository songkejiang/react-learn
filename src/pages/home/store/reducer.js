import {fromJS} from 'immutable'
const defaultState = fromJS({
    topicList : [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/14736134-5e86beee75837fdd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/14736134-5e86beee75837fdd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/14736134-5e86beee75837fdd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/14736134-5e86beee75837fdd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 5,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/14736134-5e86beee75837fdd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 6,
            title: '社会热点',
            imgUrl: '//upload-images.jianshu.io/upload_images/14736134-5e86beee75837fdd?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
})
export default (state = defaultState, action) => {
    return state
}