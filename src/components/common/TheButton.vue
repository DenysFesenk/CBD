<template>
  <button class="the-button"> 
        <span class="the-button__line">
            <slot />
        </span>
  </button>
</template>

<script>
export default {
    name: 'TheButton',
    // props: {
    //     backcolor:{
    //         type: String,
    //         default: "$bg-color-bt",
    //     },
    // }
}
</script>

<style lang='scss'>
    .the-button{
        @include text($H200, 400, $white){
            font-family: inherit;
            text-transform: uppercase;
        };
        border: 1px solid $br-bt-header;
        padding: 27px 103px 27px 41px;
        border-radius: 0;
        outline: none;
        background-color: $bg-color-bt;
        cursor: pointer;
        @include transition;
        &:hover{
            background-color: #1c1c1b07;
            color: $text-black;
        }
        &__line{
            position: relative;
            &:before{
                content: '';
                position: absolute;
                width: 45px;
                height: 2px;
                background-color: $white;
                top: 50%;
                right: -66px;
            }
        }
    }
</style>