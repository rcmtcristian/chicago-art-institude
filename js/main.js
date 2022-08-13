
document.getElementById('specific').addEventListener('click', getFetch)
document.getElementById('rand').addEventListener('click', getRand)




function getRand(){
  let id = document.getElementById('code')
  
let code = []
  while (code.length < 5) {
    let i = Math.floor(Math.random() * 9) + 1;
    if (code.indexOf(i) === -1) code.push(i);
    
  }
  let main = code.join('')
  console.log(main);
id.value = main

  // const getRand = () => {
  //   const code = new Set();
  //   while (code.size < 5) {
  //     code.add((Math.random() * 9) + 1);
  //   }
  //   return Array.from(code);
  // };


}


function clearing () {
  li.textContent = ''
}




// let title = document.getElementById('searchTitle')
function getFetch() {  
  // // const card = document.querySelector('card').value

  let id = document.getElementById('code').value
  const url = `https://api.artic.edu/api/v1/artworks?fields=${id},title,artist_display,date_display,main_reference_number,category_titles,classification_titles`
 

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
let classification =  document.querySelector('li')
      classification.textContent = data.data[0].classification_titles





      // https://api.artic.edu/api/v1/videos/${id} this for videos

      


//////////////////////////////////////////////////////////////


      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
  
  const urlTwo = `https://api.artic.edu/api/v1/artworks/?fields=${id},title,image_id,provenance_text,alt_text`

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
   
      console.log(dataTwo)
      let description = document.getElementById('description')
      description.textContent = dataTwo.data[0].provenance_text
      // console.log(dataTwo.data)
      // console.log(dataTwo.data[0].image_id)
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

