import Toast from './Toast.vue'
const obj = {

}

obj.install = function(Vue){
  
  //先创建组件对象。

  const toastConstructor = Vue.extend(Toast);

  //new的方式，根据组件构造器，可以创建一个组件对象。
  const toast = new toastConstructor();

  //将组件挂载在某个元素上面；
  toast.$mount(document.createElement('div'));

  //toast.$el对应的就是div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}


export default obj