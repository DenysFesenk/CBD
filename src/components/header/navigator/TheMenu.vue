<template>
    <div class="menu">
        <ul class="menu">
            <li class="menu__item" @click="handleOk">login</li>
            <li class="menu__item"><a-icon type="search" class="menu__icon"/><span>search</span></li>
            <li class="menu__item">card</li>
        </ul>
        <div 
            class="modal" 
            v-if="visible"
        >
            <div class="modal__mask"></div>
            <div class="modal__body" >
                <h4>login</h4>
                <button @click="handleCancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheMenu',
    data() {
        return{
            visible: false,
        }
    },
    methods: {
        handleOk() {
        this.visible = true;
        },
        handleCancel() {
        this.visible = !this.visible;
        },
  },
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
    .modal{
        position: fixed;
        @include position;
        @include flex(center, center);
        &__mask{
            z-index: 99;
            position: fixed;
            @include position;
            background-color: rgba(0, 0, 0, 0.534);
        }
        &__body{
            z-index: 100;
            width: 300px;
            height: 100px;
            background-color: $bg-body;
            @include flex(space-around, center);
            border-radius: 3px;
        }
    }
</style>