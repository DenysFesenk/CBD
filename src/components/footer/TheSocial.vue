<template>
  <ul class="social">
      <li><a href="https://www.facebook.com/" ><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="https://twitter.com/?lang=ru" ><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.youtube.com/?gl=UA" ><i class="fab fa-youtube"></i></a></li>
  </ul>
</template>

<script>
export default {
    name: 'TheSocial'
}
</script>

<style lang='scss'>
    .social{
        display: flex;
        flex-direction: row;
        position: relative;
        li{
            &:not(:last-child){
                margin-right: 60px;
            }
        }
        a{
            @include text($H200, 400, $hacky);
        }
        .fa-facebook-f, .fa-twitter{
            &:hover{
                color: blue;
            }
        }
        .fa-youtube{
            &:hover{
                color: red;
            } 
        }
        &:before{
            content: '';
            width: 2px;
            height: 55px;
            position: absolute;
            background-color: $hacky;
            bottom: -95px;
            left: 50%;
            transform: translateX(-50%);
        }
        &__facebook{
            @include transition;
            &:hover{
                color: blue;
            }
        }
        &__twitter{
            @include transition;
            &:hover{
                color: blue;
            }
        }
        &__youtube{
            @include transition;
            &:hover{
                color: red;
            }
        }
    }
</style>