<template>
  <div class="tabs">
    <a-tabs 
      default-active-key="1"
       @change="callback"
       >
      <a-tab-pane key="1" tab="WHAT IS CBD?">
        <the-tab-item />
      </a-tab-pane>
      <a-tab-pane key="2" tab="BENEFITS" force-render>
        <the-tab-item />
      </a-tab-pane>
      <a-tab-pane key="3" tab="OUR DIFFERENCE">
        <the-tab-item />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import TheTabItem from './TheTabItem.vue';
export default {
  components: { TheTabItem },
    name:'TheTabs',
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>


<style lang='scss'>
    .tabs{
      
    }
</style>