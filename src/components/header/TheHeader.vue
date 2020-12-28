<template>
    <div class="header">
        <the-side-bar></the-side-bar>
        <the-header-content></the-header-content>
        <the-ad></the-ad>
        <a href="#">
            <a-icon 
            class="header__arrow-down" 
            type="down" 
            :style="{color: '#fff', fontSize: '22px' }"
        />
        </a>
        
    </div>
</template>

<script>
import TheSideBar from '../header/navigator/TheSideBar'
import TheAd from './TheAd.vue'
import TheHeaderContent from './TheHeaderContent.vue'

export default {
    name: 'TheHeader',
    components: {
        TheSideBar,
        TheHeaderContent,
        TheAd,
    }
}
</script>

<style lang="scss">
    .header{
        min-height: 100vh;
        background: $bg-green url(../../assets/header-bg.jpeg) no-repeat;
        background-position: center;
        position: relative;
        margin-bottom: 100px;
        &__arrow-down{
            position: absolute;
            bottom: 29px;
            left: 50%;
            transform: translateX(-50%);
            cursor: pointer;
        }
    }
    
</style>