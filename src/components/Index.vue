<template>
  <div class="article">
    <img src="https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png" width="50%"/>
    <h1>PyFun</h1>
    <p>
      PyFun is a Python practicing platform for beginners to familiar with this language.<br>
      It contains series of stage with different lessons to improve user's skill.<br>
    </p>
    <hr>
    <h4><i class="fas fa-info-circle"></i> Technical Detail</h4>
    <ul>
      <li>Frontend: <a href="https://vuejs.org/">Vue</a> with <a href="https://github.com/vuejs/vue-cli">Vue-cli</a></li>
      <li>Backend: <a href="https://github.com/huge-success/sanic">Sanic</a></li>
      <li>Hoster: Linode by <a href="https://github.com/jackey8616">@clo5de</a></li>
      <li>Maintainer: <a href="https://github.com/yunosc">YunOSC</a>&nbsp;<a href="https://github.com/jackey8616">@clo5de</a></li>
      <li>Version:&nbsp;
        <a :href="'https://github.com/jackey8616/PyFun-Frontend/commit/' + last_update_master_hash" target="_blank">
          {{ last_update_master_hash.slice(0, 7) }}
        </a><br>
        Updated&nbsp;@&nbsp;{{ last_update_master_time }}<br>
        Built&nbsp;@&nbsp;{{ last_deploy_time }}
      </li>
    </ul>
    <p>
        If you would like to contribute with platform itself.<br>
        Here is a big welcome for you!<br>
        You can find GitHub repository links below.<br>
        Any suggestion please send through issues.<br>
        <a href="https://github.com/jackey8616/pyfun-frontend">[ Frontend ]</a>
        <a href="https://github.com/jackey8616/pyfun-backend">[ Backend ]</a>
    </p>
    <hr>
    <h4><i class="fas fa-clipboard-list"></i> Change Log</h4>
    <dl>
      <dt>Apr 15, 2024</dt>
      <dd>Migrate to AWS Lambda in order to reduce dedicated server cost on Linode.</dd>
      <dt>Nov 11, 2020</dt>
      <dd>Change repository owner from YunOSC to <a href="https://github.com/jackey8616">@clo5de</a>.</dd>
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
  name: 'index',
  data () {
    return {
      last_update_master_hash: "",
      last_update_master_time: "",
      last_deploy_time: "",
    }
  },
  async mounted () {
    let masterRes = await this.$ajax({
      url: 'https://api.github.com/repos/jackey8616/PyFun-Frontend/commits/master',
      method: 'GET'
    });
    let ghRes = await this.$ajax({
      url: 'https://api.github.com/repos/jackey8616/PyFun-Frontend/deployments',
      method: 'GET'
    })
    this.last_update_master_hash = masterRes.data.sha
    this.last_update_master_time = this.formatDate(masterRes.data.commit.committer.date, true);
    this.last_deploy_time = this.formatDate(ghRes.data[0].created_at, true);
  },
  methods: {
    formatDate (dateStr, second) {
      let date = new Date(dateStr);
      let m = `0${date.getMonth() + 1}`.slice(-2);
      let d = `0${date.getDate()}`.slice(-2);
      let h = `0${date.getHours()}`.slice(-2);
      let M = `0${date.getMinutes()}`.slice(-2);
      if (second == undefined || second == false) {
        return `${date.getFullYear()}/${m}/${d} ${h}:${M}`; 
      } else {
        let s = `0${date.getSeconds()}`.slice(-2);
        return `${date.getFullYear()}/${m}/${d} ${h}:${M}:${s}`;
      }
    },
    simpleFormatDate (dateStr) {
      let date = new Date(dateStr);
      let y = date.getFullYear().toString().substr(-2);
      let m = `0${date.getMonth() + 1}`.slice(-2);
      let d = `0${date.getDate()}`.slice(-2);
      return `${y}/${m}/${d}`;
    },
  }
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
