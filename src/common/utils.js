export function debounce(fn,delay = 200){
  {
    let time = null;
    return function(...args){
      if(time)clearTimeout(time);
        time = setTimeout(()=>{
          fn.apply(this,args);
        },delay);
    }
  }
} 
export function dateFormat(date,str){
  let y1 = date.getFullYear();
  let M1 = date.getMonth()+1;
  let d1 = date.getDate();
  let h1 = date.getHours();
  let m1 = addzero(date.getMinutes()+'');
  let s1 = addzero(date.getSeconds()+'');
  // if(str){
  //   console.log(str);
  //   if(/(y+)/.test(str)){
     
  //     str = str.replace(RegExp.$1,(y1+'').substr(4 - RegExp.$1.length));
      
  //   }
  //   let o = {
  //     'M+':M1,
  //     'd+':d1,
  //     'h+':h1,
  //     'm+':m1,
  //     's+':s1,  
  //   }
  //   for(let k in o){
  //     if(new RegExp(`${k}`).test(str)){
  //       let str1 = 0[k] + '',
  //       str = str.replace(RegExp.$1,(RegExp.$1.length === 1) ? str1 : addzero(str1))
  //     }
  //   }
  //   return str;
  // }else{
    
  // }
  return `${y1}-${M1}-${d1}-${h1}-${m1}-${s1}`
}
function addzero(m){
  return ("00"+m).substr(m.length);
}
