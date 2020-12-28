<template>
    <div class="side-bar">
        <ul class="side-bar__list">
            <li class="side-bar__item"><the-navigator /></li>
            <li class="side-bar__item"><the-logo /></li>
            <li class="side-bar__item"><the-menu /></li>
        </ul>
    </div>
</template>

<script>

import TheLogo from './TheLogo.vue'
import TheMenu from './TheMenu.vue'
import TheNavigator from './TheNavigator'

export default {
    name: 'TheSideBar',
    components: { 
        TheNavigator, 
        TheLogo,
        TheMenu 
    },
}   
</script>

<style lang="scss" scoped>
    .side-bar{
        border-bottom: 1px solid rgba(255, 255, 255, .4);
        position: fixed;
        top: 0;
        width: 100%;
        background-image: url(../../../assets//Shadow-header.png);
        background-position: 1px 90%;
        &__list{
            //  @include flex(space-between, center, row);
            display: flex;
            align-items: center;
        }
        &__item{
            flex: 1;
            flex-basis: 33%;
        }
    }
</style>