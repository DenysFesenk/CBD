<template>
  <div class="we-are">
      <h3 class="we-are__title">We are what we are</h3>
      <img src="../../assets/Logos-main.png" alt="" class="we-are__img">
  </div>
</template>

<script>
export default {
    name: 'TheWeAre'
}
</script>

<style lang='scss'>
    .we-are{
        @include flex(center, center, column);
        background: url(../../assets/Holder-main.png) no-repeat;
        background-position: center;
        padding: 0 50px;
        height: 200px;
        &__title{
            margin-bottom: 29px;
            @include text($H240, normal, $text-black){
                letter-spacing: 4.8px;
                text-transform: uppercase;
            };
        }   
    }
</style>