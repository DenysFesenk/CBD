<template>
  <div class="accordion">
      <the-title class="accordion__title">Frequently asked questions</the-title>
    <a-collapse accordion :bordered="false">
      <template #expandIcon="props">
        <a-icon 
            type="plus" 
            :rotate="props.isActive ? 90 : 0" 
            :style="{ fontSize: '20px' }"
        />
      </template>
      <a-collapse-panel key="1" header="What is Cannabidiol (CBD)?" :style="customStyle">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="Is Hemp-Derived Cannabidiol (CBD) Legal?" :style="customStyle">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="Are there any negative side effects?" :style="customStyle">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="4" header="Do you offer a return policy?" :style="customStyle">
        <p> {{ text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
<script>
import TheTitle from "../common/TheTitle.vue";

export default {
    name: 'TheAccordion',
  data() {
    return {
      text: `Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. `,
      customStyle: 'background: #f7f8f3; ',
    };
  },
  components: { TheTitle },
};
</script>
<style lang="scss">
    .accordion{
        max-width: 570px;
        margin: 0 auto;
        &__title{
            margin-bottom: 45px;
        }
    }
    .ant-collapse-header{
        @include text($H80, 300, $hacky){
            letter-spacing: 5.04px;
        };
        padding-left: 50px;
    }
    .ant-collapse-content-box{
        @include text($H80, 300, $black){
            letter-spacing: .72px;
        };
    }
</style>
