<template>
  <div class="footer">
      <span class="footer__logo">cbd</span>
      <ul class="footer__menu">
          <li class="footer__item"><the-footer-list /></li>
          <li class="footer__item"><the-social></the-social></li>
          <li class="footer__item"><the-footer-list /></li>
      </ul>
      <h3 class="footer__title">Subscribe to Newsletter</h3>
      <form class="footer__form">
          <input type="text" placeholder="Email" class="footer__input">
          <button class="footer__btn"><img src="../../assets/arrow-slider.png" alt=""></button>
        </form>
      <span ref="porto" class="footer__end">© 2018. CbD health.</span>
  </div>
</template>

<script>
import TheFooterList from './TheFooterList.vue'
import TheSocial from './TheSocial.vue'
export default {
  components: { TheFooterList, TheSocial },
    name: 'TheFooter',
}
</script>

<style lang='scss'>
    .footer{
        @include flex(center, center, column);
        &__logo{
            @include text($H600, 400, $hacky){
                text-align: center;
                text-transform: uppercase;
            };
            position: relative;
            margin-bottom: 65px;
            &:before{
                content: '';
                position: absolute;
                width: 370px;
                height: 2px;
                background-color: $hacky;
                top: 50%;
                transform: translateY(50%);
                left: -540px;
            };
            &:after{
                content: '';
                position: absolute;
                width: 370px;
                height: 2px;
                background-color: $hacky;
                top: 50%;
                transform: translateY(50%);
                right: -540px;
            }
        }
        &__menu{
            @include flex(center, flex-start);
            margin-bottom: 40px;
        }
        &__item{
            &:not(:last-child){
                margin-right: 150px;
            }
            &:nth-child(2){
                transform: translateY(-50%);
            }
        }
        &__title{
            @include text($H80, 400, $text-black){
                letter-spacing: 2.7px;
                text-align: center;
                text-transform: uppercase;
            };
            margin-bottom: 30px;
        }
        &__end{
            @include text($H10, 300, $hacky){
                letter-spacing: 3.08px;
                text-align: center;
                text-transform: uppercase;
            }
            margin-bottom: 20px;
        }
        &__form{
            max-width: 370px;
            width: 100%;
            margin-bottom: 60px;
            display: flex;
            border: solid 2px $br-hacky;
        }
        &__input{
            padding: 24px 33px;
            flex: 1;
            border: none;
            outline: none;
            @include text($H60, 300, $hacky){
                text-align: left;
                letter-spacing: 4.48px;
            };
            background-color: $bg-body;
            &::placeholder{
                @include text($H60, 300, $hacky)
            }
        }
        &__btn{
            background-color: $bg-body;
            transform: rotate(180deg);
            padding: 23px 31px 22px;
            outline: none;
            border: none;
            position: relative;
            cursor: pointer;
            @include transition(background-color);
            &:hover{
                background-color: $br-hacky;
            }
            &:before{
                content:'';
                position: absolute;
                width: 2px;
                height: 50px;
                background-color: $br-hacky;
                right: 0px;
                bottom: 10px;
            }
            img{
                width: 26px;
                height: 15px;
            }
        }
    }
</style>