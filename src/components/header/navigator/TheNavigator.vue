<template>
  <ul class="navigator">
        <li class="navigator__item">
            <a href="#">Home</a> 
        </li>
        <li class="navigator__item">
            <a href="#products">Products</a> 
        </li>
        <li class="navigator__item">
            <a href="#faq">FAQs</a> 
        </li>
        <li class="navigator__item">
            <a href="#footer">Contact Us</a> 
        </li>
  </ul>
</template>

<script>
export default {
    name: 'TheNavigator'
}
</script>

<style lang='scss'>
    .navigator{
        @include text($H60, 400, $white){
            text-transform: uppercase;
        };
        display: flex;
        flex-direction: row;
        @include transition;
        &:hover{
            color:$text-black;
        };
        &__item{
            cursor: pointer;
            padding: 20px  25px;
            a {
                color: $white;
                &:hover{
                    color:$text-black;
                };
            }
        }
    }
</style>