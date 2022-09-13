const redis = require('redis');
const express = require('express');
const app = express();

let redisClient = redis.createClient({
  url: "redis://127.0.0.1:6379"
});

redisClient.on('ready',()=>console.log('Redis client is ready'));
redisClient.on('end',()=>console.log('Redis client has closed'));

redisClient.on('reconnecting',(o)=>{
    console.log(`Redis client is reconnecting.`);
    console.log(`Attempt number ${o.attempt}.`);
    console.log(`Milliseconds since last attempt ${o.delay}`);
})

const setJwtToken = async (key,updatedCachedData)=>{
    try{
        await redisClient.set(key,JSON.stringify(updatedCachedData))
        await redisClient.expire(key, 21600);
        // console.log(result);
    } catch(e){
        console.log(e);
    }
}


const setString = async (key,updatedCachedData) =>{
    try{
        // await redisClient.connect();
        // console.log({redisClient});
        let result = await redisClient.set(key,JSON.stringify(updatedCachedData))
        console.log(result);
        // redisClient.disconnect();
    } catch(e){
        console.log(e);
    }
}

const getOrSetString = async (key,timeout,cb) =>{
    try {
        await redisClient.connect();
        console.log({key});
        const result =  await redisClient.get(key)
        console.log({result});
        if(result === null){
            let freshData = await cb();
            let new_data = await redisClient.set(key,JSON.stringify(freshData));
            console.log({new_data});
        }
        //  redisClient.disconnect();
    } catch(e){
        console.log(e);
    }
}

// setString("tesstq", "HELLO");
// getOrSetString("erhujknsc", 1, ()=>{
//     return "LLLL"
// });
module.exports = {
  setString: setString,
  getOrSetString: getOrSetString,
  setJwtToken: setJwtToken,
};