
 const URL="https://catfact.ninja/fact";

//  let promise=fetch(URL);
//  console.log(promise);

const getFacts=async()=>{
  console.log("getting data....")


   let response=await fetch(URL);
   console.log(response.status);
}