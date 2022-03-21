<template>
    <section class="container">
    <div class="jumbotron">
        <h1>Video player with Accesibility!</h1>
    </div> 
    <div class="card">
        <video controls muted class="card-img-top">  
            <source type="video/mp4" :src="require('@/assets/video/avengers.mp4')" >   
            <track src='../assets/video/avengers.vtt' label="English" kind="captions" srclang="en-us" default >
            <track src='../assets/video/avengers-fr.vtt' label="French" kind="subtitles" srclang="fr" >
            <track src='../assets/video/avengers-copy.vtt' label="Lol" kind="subtitles" srclang="es" >
        </video>
        <br>
        <div class="card-body">
          <p class="card-text"><small class="text-muted">Image description: A record player with a vinyl disk playing a song.</small></p>
          <br>
          <h2 class="card-title bold">Audio player:</h2>
          <p class="card-text">The audio player shows an interface friendly to most people in an attempt to make the audio player accessible to everyone.</p>
          <a @click="goAudio" class="btn btn-dark">Go to audio player</a>
        </div>
      </div>
  </section>
</template>