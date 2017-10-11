import Vue from 'vue';
import Router from 'vue-router';
import huiyicanshu from '@/components/huiyicanshu';
import faxingjihua from '@/components/faxingjihua'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/huiyicanshu',
			component: huiyicanshu
		},
		{
			path: '/faxingjihua',
			component: faxingjihua
		}
	]
});
