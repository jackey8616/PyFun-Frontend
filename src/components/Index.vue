<template>
  <div class="article">
    <img src="https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png" width="50%"/>
    <h1>PyFun</h1>
    <p>
      PyFun is a Python practicing platform for beginners to familiar with this language.<br>
      It contains series of stage with different lessons to improve user's skill.<br>
    </p>
    <hr>
    <h4><i class="fas fa-info-circle"></i> Techinal Detail</h4>
    <ul>
      <li>Frontend: <a href="https://vuejs.org/">Vue</a> with <a href="https://github.com/vuejs/vue-cli">Vue-cli</a></li>
      <li>Backend: <a href="https://github.com/huge-success/sanic">Sanic</a></li>
      <li>Hoster: Linode by <a href="https://github.com/jackey8616">@clo5de</a></li>
      <li>Maintainer: <a href="https://github.com/yunosc">YunOSC</a> <a href="https://github.com/jackey8616">@clo5de</a></li>
    </ul>
    <p>
        If you would like to contribute with platform itself.<br>
        Here is a big welcome for you!<br>
        You can find GitHub repository links below.<br>
        Any suggestion please send through issues.<br>
        <a href="https://github.com/yunosc/pyfun-frontend">[ Frontend ]</a>
        <a href="https://github.com/yunosc/pyfun-backend">[ Backend ]</a>
    </p>
    <hr>
    <h4><i class="fas fa-clipboard-list"></i> Change Log</h4>
    <dl>
      <dt>Jan 13, 2019</dt>
      <dd>Change hoster to <a href="https://github.com/jackey8616">@clo5de</a>.</dd>
      <dt>Oct 22, 2018</dt>
      <dd>
        Cange host to <a href="https://www.linode.com/">Linode</a>, because we ran out of heroku's monthly limit(550 hr/mo).<br>
        Host by <a href="https://github.com/stavhaygn">@stavhaygn</a>
      </dd>
      <dt>Oct  3, 2018</dt>
      <dd>Host on <a href="https://www.heroku.com/">Heroku</a>.</dd>
    </dl>
    <hr>
    <h4><i class="fas fa-mug-hot"></i> Donate</h4>
    <dl>
      <dt>clo5de</dt>
      <dd>
        <i class="fab fa-ethereum"></i> 0x4a132538ac5800A3B3a63DC7746BB9f2E64F020E
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
  .article {
      text-align: left;
  }
  dd {
    padding-left: 40px;
  }
</style>
