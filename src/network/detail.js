import {request} from './request.js'

export function getDetailData(iid){
  return request({
    url : '/detail',
    params : {
      iid
    }
  })
}
export function getclass(){
  return request({
    url : '/category',
  })
}
export function getDetailComment(){
  return request({
    url : '/recommend',
  })
}
export class Goods{
  constructor(iteminfo,columns,services,iid){
    this.title = iteminfo.title;
    this.desc = iteminfo.desc;
    this.id = iid;
    this.image = iteminfo.topImages[0];
    this.price = iteminfo.price;
    this.oldPrice = iteminfo.oldPrice;
    this.discountDesc = iteminfo.discountDesc;
    this.discountBgColor = iteminfo.discountBgColor;
    this.collection = columns;
    this.services = services;
  }
}
export class GoodsParam{
  constructor(info,rule){
    if(rule){
      this.image = info.image ? info.images[0] : '';
      this.info = info.set;
      this.rule = rule.tables;
    }
  }
}