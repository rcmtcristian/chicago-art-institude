
document.querySelector('button').addEventListener('click', getFetch)
 let id = document.getElementById('info').value
function getFetch() {  
  // const card = document.querySelector('card').value
  const url = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number
`
 
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // let pix = document.getElementById('card')
      // let cont = document.getElementById('cont')
      // let image = data.data[0].api_link
      // let titleIn = document.getElementById('titleIn')
      // let date = document.querySelector('#date')

      // titleIn.textContent = data.data[0].artist_title
      // cont.textContent = data.data[0].artist_display
      // date.innerText = data.data[0].date_display
      // pix.src = image
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
