<template>
  <div class="main"> 
      <the-we-are class="main__we-are"/>
      <the-tabs class="main__tabs"/>
      <!-- <the-carousel /> -->
      <the-card class="main__carousel"></the-card>
      <the-accordion class="main__accordion"/>
      <the-testimonials />
  </div>
</template>

<script>
import TheCard from '../common/TheCard.vue'
import TheAccordion from './TheAccordion.vue'
// import TheCarousel from './TheCarousel.vue'
import TheTabs from './TheTabs.vue'
import TheTestimonials from './TheTestimonials.vue'
import TheWeAre from './TheWeAre.vue'
export default {
  components: { 
    TheWeAre,
    TheTabs,
    // TheCarousel,
    TheCard,
    TheAccordion,
    TheTestimonials,
 },
    name: 'TheMain',
}
</script>

<style lang='scss' scoped>
    .main{
        &__we-are{
            margin-bottom: 120px;
        }
        &__tabs, &__carousel, &__accordion{
            margin-bottom: 150px;
        }

    }
</style>