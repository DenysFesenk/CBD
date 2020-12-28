<template>
  <a href="#" class='logo'>cbd</a>
</template>

<script>
export default {
    name: 'TheLogo'
}
</script>

<style lang='scss'>
    .logo{
        @include text($H300, 400, $white){
            text-transform: uppercase;
        };
        @include flex(center, center)
    }
</style>