
async function getUrlApi ( urlRe ){

  const url = urlRe
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InhmaXJlIiwiaWF0IjoxNTUwNzA0NjI2fQ.FmqGYVyIv56djlAC4wKAeERdMiSP1z7bSCLLUcG-Y5M'
  let arr = []
  let item = ''

  const data =  await fetch(url, {  
    method: 'GET',
    headers: {
      'Authorization': token,
    }
  })
   .then( response => response.json() )
   .then( data =>  data )
   .catch((e) => console.log("Can’t access " + url + " response. Blocked by browser? " + e))

   console.log(data)
    return data
}

export default getUrlApi