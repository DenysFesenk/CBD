<template>
  <ul class="social">
      <li><a href="#" ><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="#" ><i class="fab fa-twitter"></i></a></li>
      <li><a href="#" ><i class="fab fa-youtube"></i></a></li>
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
    }
</style>