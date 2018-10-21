<template>
  <div class="article">
    <h1>PyFun</h1>
    <p>
      PyFun is a Python practicing platform for beginners to familiar with this language.<br>
      It contains series of stage with different lessons to improve user's skill.<br>
    </p>
    <hr>
    <h4>Techinal Detail</h4>
    <ul>
      <li>Frontend: <a href="https://vuejs.org/">Vue</a> with <a href="https://github.com/vuejs/vue-cli">Vue-cli</a></li>
      <li>Backend: <a href="https://github.com/huge-success/sanic">Sanic</a></li>
      <li>Hoster: Linode by <a href="https://github.com/stavhaygn">@stavhaygn</a></li>
      <li>Maintainer: <a href="https://github.com/yunosc">YunOSC</a></li>
    </ul>
    <p>
        If you would like to contribute with platform itself.<br>
        Here is a big welcome for you!<br>
        You can find GitHub repositories link below.<br>
        <a href="https://github.com/yunosc/pyfun-frontend">[ Frontend ]</a>
        <a href="https://github.com/yunosc/pyfun-backend">[ Backend ]</a>
    </p>
    <hr>
    <h4>Change Log</h4>
    <dl>
      <dt>Oct 22, 2018</dt>
      <dd>Cange host to <a href="https://www.linode.com/">Linode</a>, because we ran out of heroku's monthly limit(550 hr/mo).</dd>
      <dt>Oct  3, 2018</dt>
      <dd>Host on <a href="https://www.heroku.com/">Heroku</a>.</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'about'
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
