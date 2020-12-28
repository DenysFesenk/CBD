<template>
  <div class="head-content">
    <h1 class="head-content__title"> Enhancing Life Excelling in Care</h1>
    <h3 class="head-content__subtitle">Choose Wisely. Choose CBD.</h3>
    <the-button>Start Shopping</the-button>
    <a class="head-content__link" href="/">See all products <img src="../../assets/arrow.png" alt=""></a>
    
  </div>
</template>

<script>
import TheButton from '../common/TheButton.vue'
export default {
  components: { TheButton },
    name: 'TheHeadContent',

}
</script>

<style lang='scss'>
    .head-content{
        min-height: 100vh;
        @include flex(center, flex-end, column);
        padding: 0 5vw;
        &__title{
            @include text($H550, 400, $second-white){
                letter-spacing: 15.4px;
            };
            margin-bottom: 39px;
            text-align: right;
            max-width: 632px;
        }
        &__subtitle{
            @include text($H240, 300, $second-white){
                letter-spacing: 6.72px;
                text-align: right;
            };
            margin-bottom: 56px;
        }
        &__link{
            margin-top: 30px;
            @include text($H80, 300, $second-white){
                letter-spacing: 5.04px;
                text-align: right;
            };
            img{
                margin-left: 22px;
            }
        }
    }
</style>