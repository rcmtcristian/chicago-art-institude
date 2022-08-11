
// document.querySelector('button').addEventListener('click', getFetch)
//  let id = document.getElementById('code')
// let title = document.getElementById('searchTitle').value
// function getFetch() {  
//   // const card = document.querySelector('card').value
//   const url = `https://api.artic.edu/api/v1/artworks?fields=${id},title,artist_display,date_display,main_reference_number`
 
//   fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       
//       // let cont = document.getElementById('cont')
//       // let image = data.data[0].api_link
//       let titleIn = document.getElementById('titleIn')
//       id.textContent = data.data[0].id
//       // let date = document.querySelector('#date')

//       titleIn.textContent = data.data[0].title
//       // cont.textContent = data.data[0].artist_display
//       // date.innerText = data.data[0].date_display
//       
//       console.log(data.data[0])
//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     });
// }

document.querySelector('button').addEventListener('click', getFetch)
// let id = document.getElementById('code')

let title = document.getElementById('searchTitle')
function getFetch() {
  // const card = document.querySelector('card').value
  const url = `https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let identifier = data.data[0].image_id
 let pix = document.getElementById('card')
      pix.src = identifier
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

