import {INCREMENT,ADDPRODUCT} from './mutations-types.js'
export default  {
  [INCREMENT](state,payload){
    payload.count ++ ;
  },
  [ADDPRODUCT](state,payload){
    payload.checked = false;
    payload.count = 1;
  },
}