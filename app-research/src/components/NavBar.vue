<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" @click="goToHome">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goToVideo">Video</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goToAudio">Audio</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
    methods: {
    goToHome() {
      this.$router.push({name: "Home"});
    },
    goToVideo() {
      this.$router.push({name: "Video"});
    },
    goToGetAudio() {
      this.$router.push({name: "Audio"});
    },
  }
}
</script>

<style lang="scss">
    @import "@/assets/sass/login.scss";
</style>
