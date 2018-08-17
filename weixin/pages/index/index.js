//index.js
//获取应用实例
Page({
  data: {
    inputVal:'',
    msgData:[
    ]
  },
  changeInputVal(ev){
    this.setData({
      inputVal:ev.detail.value
    })
  },
  delMsg(ev){
    var n=ev.target.dataset.index;
    var list=this.data.msgData;
    list.splice(n,1);
    this.setData({
      msgData:list
    })
    wx.showModal({
      title: '提示',
      content: '记录是否删除历史',
      success:function(res){
        if(res){
          wx.removeStorage({
            key:'',
            success:function(){
              
            }
          })
        }
      }
    })

  },
  addMsg(){
    //console.log(this.data.inputVal);


    var msgData = wx.getStorageSync('msgData')
    console.log(msgData)
    msgData.push(this.data.inputVal)
    wx.setStorageSync('msgData', msgData)
    this.setData({
      msgData: msgData,
      inputVal:''
    })
    // var num = wx.getStorageSync('m');//wx.getStorageSync(key)，获取本地缓存
    // this.setData({
    //   msgData: num,
    //   inputVal:''
    // }) 
  }, 
 

 
})
