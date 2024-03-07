import {getDate,component} from './myFun.js';

export default {
  // getDate,
  friend: () => {
    let friendArr =[
      {
        id:1,
        imgurl: '8.jpg',
        tip:1,
        name: 'wyz',
        email: '123@gmail.com',
        // 给出十八小时前的时间戳
        time: new Date() - 1000 * 60 * 60 * 18,
        last: 'sfd',
      },
      {
        id:2,
        imgurl: '10.jpg',
        tip:2,
        name: 'fyb',
        email: '456@gmail.com',
        // time: getDate(new Date()),
        time: new Date() - 1000 * 60 * 60 * 18,
        last: 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      },
      {
        id:3,
        imgurl: '11.jpg',
        tip:2,
        name: 'fyb2',
        email: '789@gmail.com',
        time: new Date(),
        last: 'ssssssssssssssssssssssssssss',
      },
      {
        id:4,
        imgurl: '12.jpg',
        tip:2,
        name: 'zjz',
        email: '101213@gmail.com',
        time: new Date(),
        last: 'ssssssssssssssssssss',
      },
      {
        id:5,
        imgurl: '13.jpg',
        tip:2,
        name: 'zj2',
        email: '1223@gmail.com',
        time: new Date(),
        last: 'sssssssssssssssssssssss',
      },
      {
        id:7,
        imgurl: '9.jpg',
        tip:2,
        name: 'zzq',
        email: '11223@gmail.com',
        time: new Date(),
        last: 'sssssssssssssssssssssssssssssss',
      },
      {
        id:8,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        email: '123333@gmail.com',
        time: new Date(),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
    ];
    return friendArr;
  },
  //好友列表
  isFriend: () => {
    let isFriend=[
      {
        userid:1,
        friend:2,
      },
      {
        userid:1,
        friend:5,
      },
      {
        userid:1,
        friend:6,
      },
      {
        userid:1,
        friend:8,
      },
    ]
    return isFriend;
  },
  message:function(){
    let messages = [
      {
        id:1,
        imgurl: '10.jpg',
        message: '消息测试',
        types: 0,       // 类型：0文字 1图片 2音频
        time: new Date(),    // 发送时间
        tip: 0,     // 消息本身的id
      },
      {
        id:0 ,
        imgurl: '8.jpg',
        message: '13.jpg',
        types: 1,       // 类型：0文字 1图片 2音频
        time: new Date(),    // 发送时间
        tip: 1,
      },
      {
        id:1,
        imgurl: '10.jpg',
        message: '3.jpg',
        types: 1,       // 类型：0文字 1图片 2音频
        time: new Date(),    // 发送时间
        tip: 2,
      },
      {
        id:1,
        imgurl: '10.jpg',
        message: '消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试',
        types: 0,       // 类型：0文字 1图片 2音频
        time: new Date(),    // 发送时间
        tip: 3,
      },
      {
        id:1,
        imgurl: '10.jpg',
        message: '消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试',
        types: 0,       // 类型：0文字 1图片 2音频
        time: new Date(),    // 发送时间
        tip: 4,
      },
      {
        id:1,
        imgurl: '10.jpg',
        message: '消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试',
        types: 0,       // 类型：0文字 1图片 2音频
        time: new Date(),    // 发送时间
        tip: 5,
      },
      {
        id:1,
        imgurl: '10.jpg',
        message: '消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试',
        types: 0,       // 类型：0文字 1图片 2音频
        time: new Date(),    // 发送时间
        tip: 6,
      },
      {
        id:0,
        imgurl: '8.jpg',
        message: '消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试',
        types: 0,       // 类型：0文字 1图片 2音频
        time: new Date() - 1000 * 60 * 60 * 18,    // 发送时间
        tip: 7,
      },
    ];
    return messages;
  },
  requestList: () => {
    let requestListArr = [
      {
        id:1,
        imgurl: '10.jpg',
        name: 'fyb',
      },
      {
        id:2,
        imgurl: '11.jpg',
        name: 'fybWosun',
      },
    ];
    return requestListArr;
  },

}