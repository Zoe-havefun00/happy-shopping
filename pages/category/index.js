// pages/category/index.js
// 要引入request方法!!!!
import request from "../../utils/request.js"
Page({
  // 页面的初始数据
  data: {
     navs:[],
    // 设置点击左侧,然后右侧获取数据的索引
     current:0
  },

  // 点击左侧菜单时触发
  handleChange(event){
    //  console.log(event);
     const {index}=event.currentTarget.dataset;
     this.setData({
       current:index
     })   
  },
  
  //  生命周期函数--监听页面加载 
  onLoad: function () {
     request({
       url:"/categories"
     }).then(res=>{
       console.log(res)
       const { message } = res.data;
       this.setData({
         navs: message
       })
       
     })
  },

  

  

 

  

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }

  
})