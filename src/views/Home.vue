<template>
  <div>
    <NavBar></NavBar>
    <section class="container">
      <div class="jumbotron">
          <h1>Welcome to Gabriel Chavez Accessibility Research Project!</h1>
          <p class="lead">
            This app use best practices for audio, video, and special needs.
          </p>
      </div> 

      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/images/audio-picture.jpg')" alt="Vinyl disk">
          <div class="card-body">
            <p class="card-text"><small class="text-muted">Image description: A record player with a vinyl disk playing a song.</small></p>
            <br>
            <h2 class="card-title bold">Audio player:</h2>
            <p class="card-text">The audio player shows an interface friendly to most people in an attempt to make the audio player accessible to everyone.</p>
            <a @click="goAudio" class="btn btn-dark">Go to audio player</a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" :src="require('@/assets/images/video-picture.jpg')" alt="Video camera">
          <div class="card-body">
            <p class="card-text"><small class="text-muted"><b>Image description: </b> A cameraman with a video camera in his hand.</small></p>
            <br>
            <h2 class="card-title bold">Video player:</h2>
            <p class="card-text">The video player shows an interface friendly to most people in an attempt to make the audio player accessible to everyone.</p>
            <a @click="goVideo" class="btn btn-dark">Go to video</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'TheLogin',

  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goVideo () {
      // and use the route to show the next view TODO => should happen on succesful login 
      this.$router.push({name: 'Video' })
    },
    goAudio () {
      // and use the route to show the next view TODO => should happen on succesful login 
      this.$router.push({name: 'Audio' })
    }
  },
  components: {
        NavBar
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/login.scss";
</style>
