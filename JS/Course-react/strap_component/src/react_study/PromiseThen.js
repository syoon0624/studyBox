import React, { useEffect } from 'react';

const PromiseThen = () => {

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(function(){
                resolve("react");
            }, 1500)
        }).then(function(result) {
            console.log(result);
            return result + "study";
        }).then((result)=>{
            console.log(result);
        })
    }, [])

};