<template>
  <div>
    <NavBar></NavBar>
      <section class="container">
      <div class="jumbotron">
          <h1>Video player with Accessibility!</h1>
      </div> 
      <div class="card">
          <iframe height="600px"
            src="https://www.youtube.com/embed/TcMBFSGVi1c" title="YouTube video player" allow="autoplay;">
          </iframe>
          <br>
          <div class="card-body">
            <p class="card-text"><small class="text-muted">Video description: This is the official trailer of the Avengers movies showing the different superheroes.</small></p>
            <br>
            <h2 class="card-title bold">Avengers trailer:</h2>
            <p class="card-text">Marvel makes cinematic history as it unites the Super Hero team of a lifetime. Iron Man (Robert Downey Jr.), Captain America (Chris Evans), The Hulk (Mark Ruffalo), and Thor (Chris Hemsworth) assemble together for the first time ever in this epic, action-packed blockbuster alongside Black Widow (Scarlett Johansson), Hawkeye (Jeremy Renner) and Nick Fury (Samuel L. Jackson). Director Joss Whedon creates an unprecedented masterpiece that has become a global phenomenon. Packed with spectacular visual effects, Marvel's The Avengers will blow your mind!</p>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'TheVideo',
  methods: {
    goVideo () {
      this.$router.push({name: 'Video' })
    },
    goAudio () {
      this.$router.push({name: 'Audio' })
    }
  },
  components: {
        NavBar
  }
}
</script>