document.addEventListener("DOMContentLoaded",function(){
    fetch('http://localhost:3000/songs')
    .then(res => res.json())
    .then(songs =>{ 
        songs.forEach(song =>{
            const {id, artist, title, genre, mp3, image, album} = song
            new Song(id, artist, title, genre, mp3, image, album)
        })
    })   
  

    document.getElementById('new-song-form').addEventListener('submit',addSong) 

    function addSong(e){
        e.preventDefault()
        

        let data = {
            
            'id': e.target.id.value,
            'artist':e.target.artist.value,
            'title':e.target.title.value,
            'genre': e.target.genre.value,
            'mp3': e.target.mp3.value,
            'image': e.target.image.value,
            'album':e.target.album.value,
            
        }
    
        fetch('http://localhost:3000/songs', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })
        .then(resp => resp.json())
    .then(song => {
        const { id, artist , title , genre, mp3 , image , album } = song
        new Song(id, artist , title , genre, mp3 , image , album)
        document.getElementById('new-song-form').reset()
    })
    
    }

});