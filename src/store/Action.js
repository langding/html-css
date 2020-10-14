import {INCREMENT,ADDPRODUCT} from './mutations-types.js'
export default{
  add(context,payload){
    return new Promise((resolve,reject)=>{
      let temp = context.state.productList.find(item=>{
        return item.id === payload.id
      });
      if(temp){
        context.commit(INCREMENT,temp);
        resolve('商品数量加一');
      }else{
        context.commit(ADDPRODUCT,payload);
        context.state.productList.push(payload);
        resolve('新增一个商品');
      }
    })
   
  
  },
}
