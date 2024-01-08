import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//es6 features
// arrow function
// const showMessage = (name)=>{
//   console.log(`Hello ${name}!`);
// };
// showMessage('Asish');

// //classes
// class Animal{
//   constructor(name){
//     this.name = name;
//   }
//   speak(){
//     console.log(`${this.name} makes a sound.`);
//   }
// }
// const dog = new Animal('dog');
// dog.speak();

// //maps
// const animal = new Map();
// animal.set("dog",500);
// animal.set('cat',200);
// console.log(animal.get('dog'));
// //spread op
// const arr1=[1,2,3];
// console.log(arr1);
// const arr2=[...arr1,4,5];
// console.log(arr2);

// //promises
// const myPromise = () => {
//   return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{ resolve('hello world');},3000);
  
//   });
// };

// myPromise().then(data => console.log(data));


// //if else
// const n= 100
// if(n>0)
// console.log(true);
// else
// console.log(false);

// //switch
// switch(n){
//   case 100:
//     console.log(99);
//     break;
//   case 44:
//     console.log(55);
//     break;
//   default:
//     console.log(2);
// }

// //scope
// for(var i=0;i<3;i++)
//   console.log(i);
// console.log('exitloop'+ i);
// //function
// const x = (a)=> a+1;
// console.log(x(3));

// //array
// const arr = [1,2,3,4,5];
// console.log(arr);

// //foreach
// arr.forEach(myFunc)
// function myFunc(curr,id,arr) {
//     arr[id]=curr+10;
// }
// console.log(arr);

// //asynchronous
// setTimeout(exFunc,3000);
// function exFunc(){
//  for(var z in arr)
//   console.log(z)
// }

// //Dom
// document.getElementById('exp').style.color = 'red';

// //functional components
// function  Welcome(props){
//   return <h1> Hello, {props.name}</h1>;
// }
// const ele = <Welcome name ="asish"/>;
// ReactDOM.createRoot(document.getElementById("exp")).render(ele);


