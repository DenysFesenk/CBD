<template>
  <div class="home">
    <the-header class="home__header"/>
    <the-main class="home__main"/>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '../components/footer/TheFooter.vue'
import TheHeader from '../components/header/TheHeader.vue'
import TheMain from '../components/main/TheMain.vue'




export default {
  name: 'Home',
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  }
}
</script>

<style lang="scss">
    .home{
      background-color: $bg-body;
      &__header{
        z-index: 100;
      }
      &__main{
        margin-bottom: 175px;
      }
    }
</style>