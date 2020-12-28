<template>
  <div class="carousel">
    <VueSlickCarousel v-bind="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <template #prevArrow="arrowOption">
        <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </div>
        </template>
        /*...*/
        <template #customPaging="page">
        <div class="custom-dot">
            {{ page }}
        </div>
    </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'

  export default {
    name: 'TheCarousel',
    components: { VueSlickCarousel },
    date(){
        return{
            setting:{
                dots: true,
                infinite: true,
                initialSlide: 2,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "swipeToSlide": true
            }
        }
    }
  }
</script>
<style lang="scss">
    .carousel{
        color: black;
    }
</style>