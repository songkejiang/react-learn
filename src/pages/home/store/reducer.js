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
    ],
    articleList: [
        {
            id: 1,
            title: '只要多写，写着写着，就会写了，你信吗？',
            desc: ' 有人说，写作，只要多写，写着写着，就会写了。 是真的吗？ 且来分析一下。 比如，你每天写，前天买了两颗白菜完毕，昨天逛街了完毕，今天洗澡了完毕，...',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 2,
            title: '只要多写，写着写着，就会写了，你信吗？',
            desc: ' 有人说，写作，只要多写，写着写着，就会写了。 是真的吗？ 且来分析一下。 比如，你每天写，前天买了两颗白菜完毕，昨天逛街了完毕，今天洗澡了完毕，...',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        }
    ]
})
export default (state = defaultState, action) => {
    return state
}