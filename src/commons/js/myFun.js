import { padStart, trim } from 'lodash';
const getDate = (date) => {
    if (!date) return ;

    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate()).toString().padStart(2, '0');
    const hours = (date.getHours()).toString().padStart(2, '0');
    const minutes = (date.getMinutes()).toString().padStart(2, '0');
  
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
    }
    else if (Number(D) + 1 == Number(nD) && M === nM && Y === nY) {
      return `昨天 ${h}:${m}`
    }
    else {
      return `${Y}/${M}/${D}`
    }
}

export {
    getDate,
    component
}
