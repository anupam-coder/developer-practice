// Create a fetchWithAutoRetry(fetcher, count), which automatically fetch again when error
// happens, untill the maximum count is met.
/*
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  maximumRetryCount();
  //your code goes here
}
*/

async function fetchWithAutoRetry(fetcher, maximumRetryCount = 1) {
  if (maximumRetryCount > 0) {
    try {
      const result = await fetcher();
      //Optimise further the above
      //const result = await fetcher(maximumRetryCount);
      return result;
    } catch (error) {
      // throw error;
      const result = await fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
      return result;
    }
  }
}

const p1 = () =>
  new Promise((resolve, reject) => {
    resolve("p1");
  });
const p2 = (maximumRetryCount) =>
  new Promise((resolve, reject) => {
    if (maximumRetryCount === 1) {
      resolve("p1");
    } else {
      reject("p2");
    }
  });

//fetchWithAutoRetry.then().catch() --> This is chaining i.e promises directly we are doing to get the result.
//Apart from this we can also use, IIFE as well as shown below.

(async function a() {
  try {
    const result = await fetchWithAutoRetry(p2, 5);
    console.log(result, "result");
  } catch (error) {
    console.log(error, "error");
  }
})();

// Using Promises Directly
function fetchAndHandle() {
  fetchWithAutoRetry(p2, 5)
    .then((result) => {
      console.log(result, "result");
    })
    .catch((error) => {
      console.log(error, "error");
    });
}

// Call the function
fetchAndHandle();

// LRU - chrome storage automatic eviction
const CACHE_SIZE = 20;
const cache = {};

const setCache = ({key, value}){
  cache[key] = {
    value,
    time: Date.now()
  }
}

const cacheKeys = Object.keys(cache);
if(Object.keys(cache).length > 20){
  let time = Infinity, cacheKey;
  for(let key in cache){
    //console.log(cache[key].time);
    if(time > cache[key].time){
      time = cache[key].time;
      cacheKey = key;
    }
  }
  console.log(time, cacheKey);
  delete cache[cacheKey];
  console.log(cache);
}

//Make it a generic function so that it can be leveraged in other parts of the product
// as well

//So, here the below function creates a closure and on each time the new cache object 
// is created

function GetlRUCache(CACHE_SIZE = 3){
  const cache = {};

const setCache = ({key, value})=>{
  cache[key] = {
    value,
    time: Date.now()
  }
  
 const cacheKeys = Object.keys(cache);
if(Object.keys(cache).length > CACHE_SIZE){
  let time = Infinity, cacheKey;
  for(let key in cache){
    console.log(cache[key].time);
    if(time > cache[key].time){
      time = cache[key].time;
      cacheKey = key;
    }
  }
  console.log(time, cacheKey);
  delete cache[cacheKey];
  console.log(cache);
}
}

const getCacheValue = (key)=>{
   // console.log(cache);
   if(!cache[key]){
       return "NOT FOUND";
   }
  cache[key].time = Date.now();
  console.log(cache);
  return cache[key].value;
}

return{
  setCache, getCacheValue
}

}

const LruCache1 = GetlRUCache(3);
LruCache1.setCache({key: "chips", value: 2});
LruCache1.setCache({key: "chocolate", value: 8});
LruCache1.setCache({key: "Maagi", value: 3});;

LruCache1.getCacheValue("chips");
LruCache1.getCacheValue("chocolate");
LruCache1.setCache({key: "Mango", value: 3});







