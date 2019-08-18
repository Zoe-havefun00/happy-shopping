//index.js
import request from "../../utils/request.js"

Page({
  data: {
    // 轮播图
    imgUrls: [
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    // 分类菜单
    menus:[],
    // 楼层
    floors:[],
    
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    
  },
  
  onLoad(){
    // 请求轮播图数据
    request({
      url:"/home/swiperdata"
    }).then(res=>{
      const {message}=res.data;
      this.setData({
        imgUrls: message
      })
    }),

    // 请求分类菜单数据
    request({
      url:"/home/catitems"
    }).then(res=>{
      // console.log(res)
      const {message}=res.data;
      this.setData({
        menus:message
      })
    }),

    // 请求楼层数据
    request({
      url:"/home/floordata"
    }).then(res=>{
      console.log(res)
     const {message}=res.data;
     this.setData({
       floors:message
     })
    })
  }
})
