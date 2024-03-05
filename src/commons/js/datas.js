const getDate = (date) => {
  // const date = new Date();

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = (date.getDate()).toString().padStart(2, '0');
  const hours = (date.getHours()).toString().padStart(2, '0');
  const minutes = (date.getMinutes()).toString().padStart(2, '0');
  // const seconds = (date.getSeconds()).toString().padStart(2, '0');

  // const fDate = `${month}/${day} ${hours}:${minutes}:${seconds}`;
  const fDate = `${month}/${day} ${hours}:${minutes}`;

  return fDate;
};


const component = (date) => {
  let old = new Date(date);
  let now = new Date();

  let d = old.getTime();
  let h = (old.getHours()).toString().padStart(2, '0');
  let m = (old.getMinutes()).toString().padStart(2, '0');
  let Y = old.getFullYear();
  let M = old.getMonth() + 1;
  let D = (old.getDate()).toString().padStart(2, '0');

  let nd = now.getTime();
  let nh = (now.getHours()).toString().padStart(2, '0');;
  let nm = (now.getMinutes()).toString().padStart(2, '0');
  let nY = now.getFullYear()
  let nM = now.getMonth() + 1;
  let nD = (now.getDate()).toString().padStart(2, '0');

  if( D === nD && M === nM && Y === nY) {
    return `${h}:${m}`;
    // 返回小时和分钟
  }
  // else if (D + 1 == nD && M === nM && Y === nY) {
  else if (Number(D) + 1 == Number(nD) && M === nM && Y === nY) {
    return `昨天 ${h}:${m}`
  }
  else {
    console.log(D);
    console.log(nD);
    console.log(typeof Number(D))
    return `${Y}/${M}/${D}`
  }
  
}


export default {
  getDate,
  friend: () => {
    let friendArr =[
      {
        id:1,
        imgurl: '8.jpg',
        tip:1,
        name: 'wyz',
        email: '123@gmail.com',
        time: component(new Date()),
        last: 'sfd',
      },
      {
        id:2,
        imgurl: '10.jpg',
        tip:2,
        name: 'fyb',
        email: '456@gmail.com',
        // time: getDate(new Date()),
        time: component(new Date()),
        last: 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      },
      {
        id:3,
        imgurl: '11.jpg',
        tip:2,
        name: 'fyb2',
        email: '789@gmail.com',
        time: component(new Date()),
        last: 'ssssssssssssssssssssssssssss',
      },
      {
        id:4,
        imgurl: '12.jpg',
        tip:2,
        name: 'zjz',
        email: '101213@gmail.com',
        time: component(new Date()),
        last: 'ssssssssssssssssssss',
      },
      {
        id:5,
        imgurl: '13.jpg',
        tip:2,
        name: 'zj2',
        email: '1223@gmail.com',
        time: component(new Date()),
        last: 'sssssssssssssssssssssss',
      },
      {
        id:7,
        imgurl: '9.jpg',
        tip:2,
        name: 'zzq',
        email: '11223@gmail.com',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssssss',
      },
      {
        id:8,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        email: '123333@gmail.com',
        time: component(new Date()),
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
  }
}