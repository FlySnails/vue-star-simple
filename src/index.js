/**
 * Created by hetingfeng on 2018/8/29.
 */
import vueStarSimple from './StarSimple.vue';

// 导出模块
export default vueStarSimple;

//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-star-simple', vueStarSimple)
}
