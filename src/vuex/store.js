import firebase from 'firebase'
import vuex from 'vuex'
import {
  SEARCH_WEATHER
} from './mutation-types'

/**
 * vue components (アプリケーションの実態)
 * Actions (ユーザーの操作/API通信)
 * Mutations （状態への変更管理）
 * State (状態)
 * http://engineer.recruit-lifestyle.co.jp/techblog/2016-09-15-try-vue-flux/
 * 
 * その他vuexの実装メモ
 * http://qiita.com/akifo/items/7f01324fc17967a71762
 * https://vuex.vuejs.org/ja/getters.html
 */

const store = new vuex.Store({
  weather
})

function getWeather() {
  return firebase.db.ref('/weather/today').once('value')
    .then(function (snapshot) {
      return snapshot.val().weather;
    })
}

const actions = {
  [SEARCH_WEATHER]({ commit, state }) {
    getWeather()
      .then(data => {
        commit(SEARCH_WEATHER, data)
      })
  }
}