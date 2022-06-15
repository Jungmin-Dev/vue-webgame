import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../3. 숫자야구/NumberBaseball.vue';
import ResponseCheck from '../4. 반응속도체크/ResponseCheck.vue';
import RockScissorsPaper from '../5. 가위바위보/RockScissorsPaper.vue';
import LottoGenerator from '../6. 로또/LottoGenerator.vue';
import GameMatcher from './GameMatcher.vue';
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/game/:name', component: GameMatcher }, // /game/..
  ],
});
