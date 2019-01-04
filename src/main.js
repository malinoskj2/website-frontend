import Vue from 'vue';

// plugins
import VueTyperPlugin from 'vue-typer';
import SequentialEntrance from 'vue-sequential-entrance';

// css
import 'vue-sequential-entrance/vue-sequential-entrance.css';

// vue stuff
import App from './App.vue';
import router from './router';
import store from './store';

// use components from plugins
Vue.use(VueTyperPlugin);
Vue.use(SequentialEntrance);


const wasmLib = import('./lib/pkg');

wasmLib
  .then(m => m.run2())
  .then((jsonResult) => {
    console.log('successfully received the json result');
    console.log(`result: ${jsonResult[0].name}`);
  });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch('initProjects');
  },
  render: h => h(App),
}).$mount('#app');
