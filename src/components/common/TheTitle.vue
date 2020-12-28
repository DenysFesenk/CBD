<template>
  <h3 class="title">
      <slot />
  </h3>
</template>

<script>
export default {
    name: 'TheTitle'
}
</script>

<style lang='scss'>
    .title{
        @include text($H300, 400, $text-black){
            letter-spacing: 6px;
            text-align: center;
            text-transform: uppercase;
        };
    }
</style>