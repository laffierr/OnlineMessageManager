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
  chatList: () => {
    let chatListArr =[
      {
        id:2,
        imgurl: '10.jpg',
        tip:2,
        name: 'fyb',
        // time: getDate(new Date()),
        time: component(new Date()),
        last: 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      },
      {
        id:3,
        imgurl: '11.jpg',
        tip:2,
        name: 'fyb2',
        time: component(new Date()),
        last: 'ssssssssssssssssssssssssssss',
      },
      {
        id:4,
        imgurl: '12.jpg',
        tip:2,
        name: 'zjz',
        time: component(new Date()),
        last: 'ssssssssssssssssssss',
      },
      {
        id:5,
        imgurl: '13.jpg',
        tip:2,
        name: 'zj2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssss',
      },
      {
        id:6,
        imgurl: '14.jpg',
        tip:2,
        name: 'wyz',
        time: component(new Date()),
        last: 'ssssssssssss',
      },
      {
        id:7,
        imgurl: '9.jpg',
        tip:2,
        name: 'zzq',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssssss',
      },
      {
        id:8,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:9,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:10,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:11,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:12,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:13,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:14,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:15,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:16,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },
      {
        id:17,
        imgurl: '4.jpg',
        tip:1,
        name: 'zzq2',
        time: component(new Date()),
        last: 'sssssssssssssssssssssssssssaaaaaaassss',
      },

    ];
    return chatListArr;
  }
}