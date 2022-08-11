
document.getElementById('specific').addEventListener('click', getFetch)
document.getElementById('rand').addEventListener('click', getRand)




function getRand(){
  let id = document.getElementById('code')
  
let arr = []
  while (arr.length < 5) {
    var r = Math.floor(Math.random() * 9) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
    
  }
  
  console.log(arr);
id.value = arr
}


// let title = document.getElementById('searchTitle')
function getFetch() {  
  // // const card = document.querySelector('card').value

  let id = document.getElementById('code').value
  const url = `https://api.artic.edu/api/v1/artworks?fields=${id},title,artist_display,date_display,main_reference_number`
 

 console.log(id)
   fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    
      // // let image = data.data[0].api_link
     
      // id.textContent = data.data[0].id
       let date = document.querySelector('#date')
        date.innerText = data.data[0].date_display
      // titleIn.textContent = data.data[0].title

       let cont = document.getElementById('cont')
      cont.textContent = data.data[0].artist_display
    
      
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
  
  const urlTwo = `https://api.artic.edu/api/v1/artworks/?fields=${id},title,image_id`

  fetch(urlTwo)
    .then(res => res.json()) // parse response as JSON
    .then(dataTwo => {

      // // let cont = document.getElementById('cont')
      // // let image = data.data[0].api_link
      // let titleIn = document.getElementById('titleIn')
      // id.textContent = data.data[0].id
      // // let date = document.querySelector('#date')

      // titleIn.textContent = data.data[0].title
      // // cont.textContent = data.data[0].artist_display
      // // date.innerText = data.data[0].date_display

      console.log(dataTwo.data)
      console.log(dataTwo.data[0].image_id)
      let identifier = dataTwo.data[0].image_id

 let titleIn = document.getElementById('titleIn')
      titleIn.textContent = dataTwo.data[0].title
      let pix = document.getElementById('card')
      pix.src = `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`

    })
    .catch(err => {
      console.log(`error ${err}`)
    });







}

