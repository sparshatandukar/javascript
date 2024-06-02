// //Promise
// function fetchData(){
//     return new Promise((resolve) => {
// setTimeout (()=>{ 
//     const info = [
//        {id:1, name:'Sparsha Tandukar', age:19} ,     
//        {id:2, name:'Sahira Maharjan', age: 19},

//     ];
//   resolve(info);
// }, 2000);
//     });
// }

// fetchData().then((info) => {
//     console.log(info);
//     }).catch((error) =>{
//         console.log(error);
//     });

//     //closure
//     function createCounter() {
//         let count = 0;
      
//         return {
//           increment: function() {
//             count += 1;
//           },
//           getCount: function() {
//             return count;
//           }
//         };
//       }
      
//       const counter = createCounter();
//       counter.increment();
//       console.log(counter.getCount()); 
//       counter.increment();
//       console.log(counter.getCount());
      
//       //callbacks
//       function processData(array, callback){
//         return array.map(callback)
//     }
//     const array =[1,2,3,4,5];
//     const callback = function(array){
//         return array +2;
//     }
//     const processed = processData(array, callback);
//        console.log(processed);
    
// //async/await
// function fetchData(){
//     return new Promise((resolve) => {
// setTimeout (()=>{ 
//     const info = [
//        {id:1, name:'Sparsha Tandukar', age:19} ,     
//        {id:2, name:'Sahira Maharjan', age: 19},

//     ];
//   resolve(info);
// }, 2000);
//     });
// }

// async function getData(){
//     const data = await fetchData();
//     console.log(data);
// }
// getData();

// //map
// function arraymap(array){
// const doubleNumber =  array.map(
//     (num) => num *2);
//     return doubleNumber;
// }
// const array = [2,3,4,5,6,7]
// const final =arraymap(array);
// console.log(final);

//filter
// function arraymap(array){
//     const Number =  array.filter(
//         (num) => num <10);
//         return Number;
//     }
//     const array = [2,3,10,11,6,7]
//     const final =arraymap(array);
//     console.log(final);

    //find
    // function arraymap(array){
    //     const greatNumber =  array.find(
    //         (num) => num >15);
    //         return greatNumber;
    //     }
    //     const array = [10,20,30,40,50,60]
    //     const final =arraymap(array);
    //     console.log(final);

    //reduce
    // function add(numbers){
       
    //     return numbers.reduce((sum, num)=> sum + num, 0);
    // }
    // const numbers = [1,2,3,4,5]
    // const sum  =add(numbers);
    //     console.log(sum);
 
 //object manipulation
//  function obj(users) {
//     return users.reduce((value, user) => {
//       value[user.id] = user;
//       return value;
//     }, {});
//   }
  
//   const users = [
//     {id:1, name:'Sparsha Tandukar', age:19} ,     
//     {id:2, name:'Sahira Maharjan', age: 19}

//   ];
  
//   const userObject = obj(users);
//   console.log(userObject);

//   //error handling with promises
//   function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = Math.random() > 0.5; 
//         if (success) {
//           const info = [
//             { id: 1, name: 'Sparsha Tandukar', age: 19 },
//             { id: 2, name: 'Sahira Maharjan', age: 19 },
//           ];
//           resolve(info);
//         } else {
//           reject(new Error('Failed to fetch data'));
//         }
//       }, 2000);
//     });
//   }
  
//   fetchData()
//     .then((info) => {
//       console.log(info);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
  
//     //Error Handling with Async/Await

//     function fetchData() {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             const success = Math.random() > 0.5; 
//             if (success) {
//               const info = [
//                 { id: 1, name: 'Sparsha Tandukar', age: 19 },
//                 { id: 2, name: 'Sahira Maharjan', age: 19 },
//               ];
//               resolve(info);
//             } else {
//               reject(new Error('Failed to fetch data'));
//             }
//           }, 2000);
//         });
//       }
      
//       async function fetchDataWithAsyncAwait() {
//         try {
//           const info = await fetchData();
//           console.log(info);
//         } catch (error) {
//           console.log(error.message);
//         }
//       }
      
//       fetchDataWithAsyncAwait();
      
      //Complex Array Manipulation
      function getUniqueHobbies(users) {
        return users.reduce((uniqueHobbies, user) => {
          user.hobbies.forEach(hobby => {
            if (!uniqueHobbies.includes(hobby)) {
              uniqueHobbies.push(hobby);
            }
          });
          return uniqueHobbies;
        }, []);
      }
      const users = [
        { name: 'Shital', hobbies: ['knitting', 'gardening'] },
        { name: 'Mita', hobbies: ['cooking', 'dancing'] },
        { name: 'Soha', hobbies: ['singing', 'painting'] }
      ];
      const Hobbies = getUniqueHobbies(users);
      console.log(Hobbies);