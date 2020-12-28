<template>
  <div class="comment">
      <ul class="comment__stars-list">
              <li class="comment__star"><img src="../../assets/1@1X.png" alt="" class="comment__img"></li>
              <li class="comment__star"><img src="../../assets/1@1X.png" alt="" class="comment__img"></li>
              <li class="comment__star"><img src="../../assets/1@1X.png" alt="" class="comment__img"></li>
              <li class="comment__star"><img src="../../assets/1@1X.png" alt="" class="comment__img"></li>
              <li class="comment__star"><img src="../../assets/1@1X.png" alt="" class="comment__img"></li>
        </ul>
        <p class="comment__text">
            I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!
        </p>
        <h6 class="comment__author">Mark J.</h6>
  </div>
</template>

<script>
export default {
    name: 'TheComment'
}
</script>

<style lang='scss'>
    .comment{
        background-image: url(../../assets/bg-comment.jpeg);
        background-position: center;
        @include flex(center, center, column);
        padding: 100px 0 200px;
        position: relative;
        &::before{
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0px;
            background-color: $br-accor;
            opacity: .6;

        }
        &::after{
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0px;
            background-color: #1C200B;
            opacity: .6;

        }
        &__stars-list{
            display: flex;
            flex-direction: row;
            margin-bottom: 40px;
            z-index: 100;
        }
        &__star{
            &:not(:last-child){
                margin-right: 4px;
            }
        }
        &__text{
            padding: 0 30px;
            z-index: 100;
            max-width: 740px;
            @include text($H220, 300, $white){
                letter-spacing: 4.4px;
                text-align: center;
            };
            margin-bottom: 36px;
        }
        &__author{
            padding: 0 30px;
            z-index: 100;
            @include text($H260, 400, $white){
                letter-spacing: 4.8px;
                text-align: center;
                position: relative;
            };
            &:before{
                content: '';
                background-color: $white;
                width: 45px;
                height: 2px;
                position: absolute;
                top: 50%;
                left: -65px;
            }
        }
    }
</style>