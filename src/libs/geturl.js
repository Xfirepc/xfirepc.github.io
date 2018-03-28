
async function getUrlApi ( urlRe ){

  const url = urlRe
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  let arr = []
  let item = ''

  const data =  await fetch(proxyurl + url)
    .then(response => response.text())
    .then(contents => {
        item = JSON.stringify(eval('(' + contents + ')'))
    })
    .catch((e) => console.log("Can’t access " + url + " response. Blocked by browser? " + e))

    let inf = JSON.parse( item )

    Object.keys( inf ).map(( data ) => {
      arr.push( inf[data] )
    })

    return arr
}

export default getUrlApi