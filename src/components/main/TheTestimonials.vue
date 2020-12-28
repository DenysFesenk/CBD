<template>
  <a-carousel arrows :dots="false">
    <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1"></div>
    <div slot="nextArrow"  class="custom-slick-arrow" style="right: 10px"></div>
    <div><the-comment /></div>
    <div><the-comment /></div>
    <div><the-comment /></div>
    <div><the-comment /></div>
  </a-carousel>
</template>
<script>
import TheComment from '../common/TheComment.vue';
export default {
  components: { TheComment },
  name: 'TheTestimonials'
};
</script>
<style scoped lang="scss" >
/* For demo */
  .arrows{
    z-index: 1000;
  }
</style>
