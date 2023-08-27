// import './index.css'
// import './index.less'
import './index.scss' 
import React from 'react';
import { createRoot } from 'react-dom/client';
import apple from './assets/ltg_Apple.svg'  //由于图片类型ts无法识别，所以需要在asset.d.ts中声明
import test from './assets/test.png'

const a:string = 'hello react'
const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <div>
    {a}
    <img src={test} alt="" />
    <h1>hot module update</h1>
  </div>
)
console.log('this is react')
console.log('this is hot')