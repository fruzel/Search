import {searchURL} from './constants'

export const getResults =  (input) =>{

   const resultURL = searchURL+`${input}`;
   return fetch(resultURL, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        return response.json();

    })
    .catch(err => {
        console.error(err);
    });
}



export const getImageResults =  (input) =>{
    const imageResultURL = searchURL+`${input}`+"&searchType=image"
    return fetch(imageResultURL, {
         "method": "GET",
         "headers": {
             "Content-Type": "application/json",
         }
     })
     .then(response => {
         return response.json();
     })
     .catch(err => {
         console.error(err);
     });
 }
 