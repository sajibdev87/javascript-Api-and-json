function loadPhotos(){
          fetch("https://jsonplaceholder.typicode.com/photos")
                    .then(response =>response.json())
                    .then(data =>displayPhoto(data));
          
}

function displayPhoto(photos){
          const photoBox =document.getElementById('photo-box')

         for(const photo of photos){
          // console.log(photo)
          const div=document.createElement('div')
          div.classList.add('photo-details')
          div.innerHTML=`
          <p>ID:${photo.id}</p>
          <h3>Title:${photo.title}</h3>
          <img src="${photo.thumbnailUrl}" alt="">
          `
          photoBox.appendChild(div)
         }
      

         
}