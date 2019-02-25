
async function getUrlApi ( urlRe ){

  const url = urlRe
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InhmaXJlIiwiaWF0IjoxNTUwNzA0NjI2fQ.FmqGYVyIv56djlAC4wKAeERdMiSP1z7bSCLLUcG-Y5M'
  let arr = []
  let item = ''

  const data =  await fetch(url, {  
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': token,
      'Content-Type': 'application/json',
      'Origin': '',
      'Host': 'api.producthunt.com'
    },
  })
    .then(response => {
      console.log(response)
      response.text()})
    .then(contents => {
        item = JSON.stringify(eval('(' + contents + ')'))
    })
    .catch((e) => console.log("Can’t access " + url + " response. Blocked by browser? " + e))

    let inf = JSON.parse( item )

    Object.keys( inf ).map(( data ) => {
      arr.push( inf[data] )
    })
    console.log(data)
    return arr
}

export default getUrlApi