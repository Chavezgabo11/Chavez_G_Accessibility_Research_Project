<template>
    <div>
        <NavBar></NavBar>
        <section class="container">
          <div class="jumbotron">
              <h1>Audio player with Accessibility!</h1>
          </div> 
          <div class="card">
              <audio id="player" controls :src="require('@/assets/audio/dualipa.mp3')"></audio>
              <div>
                <button class="play" onclick="document.getElementById('player').play()">Play</button> 
                <button class="pause" onclick="document.getElementById('player').pause()">Pause</button> 
                <button class="vol1" onclick="document.getElementById('player').volume += 0.1">Vol +</button> 
                <button class="vol2" onclick="document.getElementById('player').volume -= 0.1">Vol -</button> 
              </div>
              <br>
              <div class="card-body">
                  <p class="card-text"><small class="text-muted">Audio description: The official music audio for Dua Lipa - Don't Start Now.</small></p>
                  <br>
                  <h2 class="card-title bold">Lyrics:</h2>
                  <p class="card-text">  
                    If you don't wanna see me <br>
                    <br>
                    Did a full 180, crazy <br>
                    Thinking 'bout the way I was <br>
                    Did the heartbreak change me? Maybe <br>
                    But look at where I ended up <br>
                    I'm all good already <br>
                    So moved on, it's scary <br>
                    I'm not where you left me at all, so <br>
                    <br>
                    If you don't wanna see me dancing with somebody <br>
                    If you wanna believe that anything could stop me <br>
                    <br>
                    Don't show up, don't come out <br> 
                    Don't start caring about me now <br>
                    Walk away, you know how <br>
                    Don't start caring about me now <br>
                    <br>
                    Aren't you the guy who tried to <br>
                    Hurt me with the word "goodbye"? <br>
                    Though it took some time to survive you <br>
                    I'm better on the other side <br>
                    I'm all good already <br>
                    So moved on, it's scary <br>
                    I'm not where you left me at all, so <br>
                    <br>
                    If you don't wanna see me dancing with somebody <br>
                    If you wanna believe that anything could stop me <br>
                    <br>
                    Don't show up, don't come out <br>
                    Don't start caring about me now <br>
                    Walk away, you know how <br>
                    Don't start caring about me now ('bout me now, 'bout me) <br>
                    <br>
                    Oh, oh <br>
                    Don't come out, out, out <br>
                    Don't show up, up, up <br>
                    Don't start now (oh) <br>
                    Oh, oh <br>
                    Don't come out, out <br>
                    I'm not where you left me at all, so <br>
                    <br>
                    If you don't wanna see me dancing with somebody <br>
                    If you wanna believe that anything could stop me <br>
                    <br>
                    Don't show up (don't show up), don't come out (don't come out) <br>
                    Don't start caring about me now ('bout me now) <br>
                    Walk away (walk away), you know how (you know how) <br>
                    Don't start caring about me now (so) <br>
                    <br>
                    Oh, oh <br>
                    Don't come out, out, out <br>
                    Don't show up, up, up <br>
                    Walk away, walk away (so) <br>
                    Oh, oh <br>
                    Don't come out, out, out <br>
                    Don't show up, up, up <br>
                    Walk away, walk away, oh 
                  </p>
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
  @import "@/assets/sass/audio.scss";
</style>