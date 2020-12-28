<template>
  <ul class="menu">
      <li class="menu__item">login</li>
      <li class="menu__item"><a-icon type="search" class="menu__icon"/><span>search</span></li>
      <li class="menu__item">card</li>
  </ul>
</template>

<script>
export default {
    name: 'TheMenu'
}
</script>

<style lang="scss">
    .menu{
        @include flex(flex-end, center);
        &__item{
            padding: 20px 25px;
            border-left: 1px solid rgba(255, 255, 255, .4);
            @include text($H60, 400, $white){
                text-transform: uppercase;
            };
            cursor: pointer;
        }
        &__icon{
            margin-right: 10px;
        }
    }
</style>