<template>
  <div class="tab">
      <div class="tab__content">
          <h3 class="tab__title">WHAT IT IS AND HOW IT WORKS</h3>
          <ul class="tab__list">
              <li class="tab__item">CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.</li>
              <li class="tab__item">Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.</li>
              <li class="tab__item">Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.</li>
          </ul>
      </div>
      <div class="tab__gallery">
          <div class="tab__img-wrapper"><img src="../../assets/Img@1X (4).jpeg" alt="" class="tab__img"></div>
          <div class="tab__img-wrapper"><img src="../../assets/Img@1X (5).jpeg" alt="" class="tab__img"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TheTabItem',
}
</script>

<style lang="scss">
    .tab{
        @include flex(center, center);
        &__content{
            margin-right: 100px;
        }
        &__title{
            max-width: 280px;
            @include text($H240,400, $black){
                line-height: 1.67;
                letter-spacing: 4.8px;
                text-align: left;
            };
            margin-bottom: 50px;
        }
        &__list{
            max-width: 410px;
            @include text($H80, 300, $hacky){
                text-align: left;
                line-height: 2.22;
                letter-spacing: 0.72px;
            };
        }
        &__item{
            &:not(:last-child){
                 margin-bottom: 60px;
            }
        }
        &__img-wrapper{
            &:not(:last-child){
                margin-bottom: 30px;
            }
        }
        &__img{
            max-width: 570px;
        }
    }
</style>