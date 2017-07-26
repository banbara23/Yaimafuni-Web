import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top/Top'
import CompanyDetail from '@/components/company/CompanyDetail'
import PortDetail from '@/components/port/PortDetail'
import WeatherDetail from '@/components/weather/WeatherDetail'
import About from '@/components/about'

// const WeatherDetail = resolve => require(['@/components/top/Top'], resolve)
// const WeatherDetail = () => System.import('@/components/weather/WeatherDetail')
Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
  { path: '/', name: 'Top', component: Top },
  { path: '/weather', component: WeatherDetail},
  { path: '/company/:id', component: CompanyDetail },
  { path: '/port/:port/:company', component: PortDetail },
  { path: '/about', component: About },
  { path: '/detail/*', redirect: '/detail/:port/:company' },
  { path: '*', redirect: '/' }
  ]
})