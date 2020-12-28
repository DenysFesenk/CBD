<template>
  <span class="the-ad">CBD Potion health</span>
</template>

<script>
export default {
    name: 'TheAd',
}
</script>

<style lang="scss" scoped>
    .the-ad{
        position: absolute;
        transform: rotate(-90deg);
        bottom: 214px;
        left: -15px;
        @include text($H260, 400, $white);
        &:before {
            content: '';
            position: absolute;
            width: 107px;
            height: 2px;
            background-color: $white;
            top: 50%;
            transform: translateY(-50%);
            left: -148px;
        }
    }
</style>