// // const fetch = async ()=>{
// //     const result= await fetch("/commodity")
// //     .then((result)=>{
// //         // console.log(result)
// //         result.json()
// //     })
// //     .catch((err)=>{
// //         console.log(err+"hello")
// //        })
// //        alert("working server!!!!!")
// // }


// // console.log(fetch)

// // function calculate(object1,object2){
    
// //     const commodityName=object1.commodityName;
// //     const percentage1hr=(object2.percentage1hr-object1.percentage1hr)/object2.percentage1hr*(100)
// //     const percentage24hr=(object2.percentage24hr-object1.percentage24hr)/object2.percentage24hr*(100)
// //     const percentage30d=(object2.percentage30d-object1.percentage30d)/object2.percentage30d*(100)
// //     const percentage7d=(object2.percentage7hr-object1.percentage7hr)/object2.percentage7hr*(100)

// //     return ([{
// //         commodityName:commodityName,
// //         percentage1hr:percentage1hr,
// //         percentage24hr:percentage24hr,
// //         percentage7d:percentage7d,
// //         percentage30d:percentage7d
// //     }])
// // }
// const arr = [
//     [43, 2, 21],[1, 2, 4, 54],[5, 84, 2],[11, 5, 3, 1]
//  ];
//  const sumArray = (array) => {
//     const newArray = [];
//     array.forEach(sub => {
//        sub.forEach((num, index) => {
//           if(newArray[index]){
//              newArray[index] += num;
//           }else{
//              newArray[index] = num;
//           }
//        });
//     });
//     return newArray;
//  }

// function PercentageHr(arrayA, arrayB){

//     const increasePercentage = (x, i) => (i - x) / x * 100

//    let array1=arrayA.map(arr=> arr.percentage1hr)
//    let array2=arrayB.map(arr=> arr.percentage1hr)
//    var Hourly = array1.map((x, i) => increasePercentage(x, array2[i]))
    
//     return Hourly
   
// }
// function PercentageDaily(arrayA, arrayB){

//     const increasePercentage = (x, i) => (i - x) / x * 100

//    let array1=arrayA.map(arr=> arr.percentage24hr)
//    let array2=arrayB.map(arr=> arr.percentage24hr)
  
//    var daily = array1.map((x, i) => increasePercentage(x, array2[i]))
//     return daily
   
// }
// function PercentageWeekly(arrayA, arrayB){

//     const increasePercentage = (x, i) => (i - x) / x * 100

//    let array1=arrayA.map(arr=> arr.percentage7d)
//    let array2=arrayB.map(arr=> arr.percentage7d)
  
//    var weekly = array1.map((x, i) => increasePercentage(x, array2[i]))
//     return weekly
   
// }
// function PercentageMonthly(arrayA, arrayB){

//     const increasePercentage = (x, i) => (i - x) / x * 100

//    let array1=arrayA.map(arr=> arr.percentage30d)
//    let array2=arrayB.map(arr=> arr.percentage30d)
  
//    var monthly = array1.map((x, i) => increasePercentage(x, array2[i]))
//     return monthly
   
// }

// let a=[{
//     commodityName:"rice",
//     price:30,
//     percentage1hr:2,
//     percentage24hr:5,
//     percentage7d:17,
//     percentage30d:8
//   },
//   {
//     commodityName:"groudnut",
//     price:40,
//     percentage1hr:7,
//     percentage24hr:9,
//     percentage7d:22,
//     percentage30d:14
//   },
//   {
//     commodityName:"sorghum",
//     price:40,
//     percentage1hr:7,
//     percentage24hr:6,
//     percentage7d:11,
//     percentage30d:13
//   },
//   {
//     commodityName:"millet",
//     price:60,
//     percentage1hr:12,
//     percentage24hr:15,
//     percentage7d:4,
//     percentage30d:13
//   },
//   {
//     commodityName:"wheat",
//     price:30,
//     percentage1hr:2,
//     percentage24hr:5,
//     percentage7d:17,
//     percentage30d:8
//   },
//   {
//     commodityName:"cowpea",
//     price:40,
//     percentage1hr:13,
//     percentage24hr:6,
//     percentage7d:9,
//     percentage30d:12
//   },
//   {
//     commodityName:"soyabeans",
//     price:60,
//     percentage1hr:21,
//     percentage24hr:13,
//     percentage7d:8,
//     percentage30d:19
//   },
//   {
//     commodityName:"maize",
//     price:90,
//     percentage1hr:24,
//     percentage24hr:2,
//     percentage7d:0,
//     percentage30d:13
//   }
// ]
// let b=[{
//     commodityName:"rice",
//     price:30,
//     percentage1hr:12,
//     percentage24hr:9,
//     percentage7d:17,
//     percentage30d:8
//   },
//   {
//     commodityName:"groudnut",
//     price:40,
//     percentage1hr:9,
//     percentage24hr:19,
//     percentage7d:22,
//     percentage30d:14
//   },
//   {
//     commodityName:"sorghum",
//     price:40,
//     percentage1hr:7,
//     percentage24hr:16,
//     percentage7d:11,
//     percentage30d:13
//   },
//   {
//     commodityName:"millet",
//     price:60,
//     percentage1hr:5,
//     percentage24hr:12,
//     percentage7d:4,
//     percentage30d:13
//   },
//   {
//     commodityName:"wheat",
//     price:30,
//     percentage1hr:14,
//     percentage24hr:14,
//     percentage7d:17,
//     percentage30d:8
//   },
//   {
//     commodityName:"cowpea",
//     price:40,
//     percentage1hr:32,
//     percentage24hr:35,
//     percentage7d:9,
//     percentage30d:12
//   },
//   {
//     commodityName:"soyabeans",
//     price:60,
//     percentage1hr:16,
//     percentage24hr:26,
//     percentage7d:8,
//     percentage30d:19
//   },
//   {
//     commodityName:"maize",
//     price:90,
//     percentage1hr:2,
//     percentage24hr:21,
//     percentage7d:0,
//     percentage30d:13
//   }
// ]
