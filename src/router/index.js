import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top/Top'
import CompanyDetail from '@/components/company/CompanyDetail'
import PortDetail from '@/components/port/PortDetail'
import WeatherDetail from '@/components/weather/WeatherDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  { path: '/', name: 'Top', component: Top },
  { path: '/weather', component: WeatherDetail },
  { path: '/companyDetail/:id', component: CompanyDetail },
  { path: '/portDetail/:id', component: PortDetail }
  ]
})