<template>
  <div class="card">
      <div class="card__content">
          <ul class="card__stars-list">
              <li class="card__star"><img src="../../assets/1@1X.png" alt="" class="card__img"></li>
              <li class="card__star"><img src="../../assets/1@1X.png" alt="" class="card__img"></li>
              <li class="card__star"><img src="../../assets/1@1X.png" alt="" class="card__img"></li>
              <li class="card__star"><img src="../../assets/1@1X.png" alt="" class="card__img"></li>
              <li class="card__star"><img src="../../assets/1@1X.png" alt="" class="card__img"></li>
          </ul>
          <h5 class="card__title">Black ICE CBD Muscle Rub 200 mg</h5>
          <img src="../../assets/highlight@1X.png" alt="" class="card__img">
      </div>
      <div class="card__footer">
          <div class="card__price">$49.99 USD</div>
          <div class="card__btn"><the-button>Shop</the-button></div>
      </div>
  </div>
</template>

<script>
import TheButton from './TheButton.vue'
export default {
    name:'TheCard',
    components: {
        TheButton
    }
}
</script>

<style lang='scss'>
    .card{
        flex: 1;
        flex-basis: 33%;
        max-width: 600px;
        padding: 0 20px;
        &__content{
            @include flex(center, center, column);
            padding: 39px 0 42px;
            border: 1px solid $br-hacky;
            background-color: $white;
        }
        &__stars-list{
            display: flex;
            flex-direction: row;
            margin: 20px;
        }
        &__star{
            &:not(:last-child){
                margin-right: 4px;
            }
        }
        &__title{
            margin-bottom: 40px;
            @include text($H80, 400, $text-black){
                line-height: 4.17;
                letter-spacing: 2.7px;
            };
        }
        &__img{
            max-width: 120px;
        }
        &__footer{
            @include flex(space-between, center);
            border: 1px solid $footer-bt-card;
            background-color: $footer-card;
        }
        &__price{
            @include text($H80, 400, $text-black){
                letter-spacing: 2.7px;
            };
            padding:29px 0 27px 30px ;
        }
        &__btn{
            background-color: $hacky ;
        }
    }
</style>