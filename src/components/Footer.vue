<template>
  <footer id='footer' class="page-footer blue darken-2">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">About site</h5>
          <p class="grey-text text-lighten-4">やいまふに（八重山方言で’八重山の船'）は、石垣島と八重山諸島を結ぶ船の運行情報と天気情報をリアルタイムに見ることができます。</p>
        </div>

        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li>
              <a class="grey-text text-lighten-3" href="https://play.google.com/store/apps/details?id=com.banbara.yaeyama.liner.checker">やいまふに - Android版</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="http://aneikankou.co.jp/">安栄観光</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="http://www.yaeyama.co.jp/">八重山観光フェリー</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="http://ishigaki-dream.co.jp/">石垣島ドリーム観光</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        © 2017 やいまふに
        <router-link class="grey-text text-lighten-4 right" to="about">制作者:ikemura</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer'
  
}
</script>
