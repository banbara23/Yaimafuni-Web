import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Weather from '@/components/Weather'
import PortList from '@/components/PortList'
import PortDetail from '@/components/PortDetail'
import WeatherDetail from '@/components/WeatherDetail'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Top',
            component: Top
        },
        { path: '/weather', component: WeatherDetail },
        { path: '/portList', component: PortList },
        { path: '/portDetail', component: PortDetail }
    ]
})