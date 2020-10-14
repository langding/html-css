import {request } from './request.js'

export function getclassifydata(){
  return request({
    url: '/category'
  })
}