<template>
    <ul class="footer-menu">
        <li class="footer-menu__item"><a href="#">Privacy Policy</a></li>
        <li class="footer-menu__item"><a href="#">Terms of Use</a></li>
        <li class="footer-menu__item"><a href="#">Return Policy</a></li>
    </ul>
</template>

<script>
export default {
    name: 'TheFooterList'
}
</script>

<style lang="scss">
    .footer-menu{
        @include flex(center, center, column);
        &__item{
            @include text($H40,300, $hacky){
                letter-spacing: 3.92px;
                text-align: center;
            };
            &:not(:last-child){
                margin-bottom: 25px;
            }
        }
        a{
            color: $hacky;
        }
    }
</style>