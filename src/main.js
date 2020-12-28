import "./styles/style.scss";
import './styles/libs/antd.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Antd from 'ant-design-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import TheButton from "./components/common/TheButton";

Vue.config.productionTip = false

Vue.component("TheButton", TheButton);

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
