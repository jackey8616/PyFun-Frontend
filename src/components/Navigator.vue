<template>
  <nav id="navigator" class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">PyFun</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbatNav" aria-expanded="false" aria-label="Toggle navgaton">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Index</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="stageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Stage</a>
          <ul class="dropdown-menu" aria-labelledby="stageDropdown">
            <li v-for="(value, key) in stages" :key="key" class="dropdown-submenu">
              <a @mouseover="fetchLessonV2(key)" class="dropdown-item dropdown-toggle">{{ key }}</a>
              <ul class="dropdown-menu">
                <li v-if="stages[key].lessons === undefined"><a class="dropdown-item disable">Lesson Loading...</a></li>
                <li v-else v-for="lesson in stages[key].lessons" :key="lesson.index">
                  <router-link :to="lesson.url" class="dropdown-item">{{ lesson.title }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { Base64 } from 'js-base64';

export default {
  name: 'navigator',
  data: function () {
    return {
      stages: {}
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === 'Index') {
        this.fetchListV2()
      }
    }
  },
  mounted: function () {
    this.fetchListV2()
  },
  methods: {
    fetchList: function () {
      this.$ajax({
        'method': 'GET',
        'url': this.$backend + '/stage'
      }).then(response => {
        this.stages = response.data.data
      }).catch(error => {
        console.log(error)
      })
    },
    fetchListV2: function () {
      this.$ajax({
        'method': 'GET',
        'url': this.$v2Backend + '/stage'
      }).then(response => {
        this.stages = JSON.parse(Base64.decode(response.data))['data']
      }).catch(error => {
        console.log(error)
      })
    },
    fetchLesson: function (stageName) {
      if (this.stages[stageName].lessons === undefined) {
        this.$ajax({
          'method': 'GET',
          'url': this.$backend + '/stage/' + stageName
        }).then(response => {
          var data = response.data.data
          this.$set(this.stages[stageName], 'lessons', Object.values(data).sort((a, b) => {
            return parseInt(a.index) - parseInt(b.index)
          }))
        }).catch(error => {
          console.log(error)
        })
      }
    },
    fetchLessonV2: function (stageName) {
      if (this.stages[stageName].lessons === undefined) {
        this.$ajax({
          'method': 'GET',
          'url': this.$v2Backend + '/stage/' + stageName
        }).then(response => {
          var { data } = JSON.parse(Base64.decode(response.data))
          this.$set(this.stages[stageName], 'lessons', Object.values(data).sort((a, b) => {
            return parseInt(a.index) - parseInt(b.index)
          }))
        }).catch(error => {
          console.log(error)
        })
      }
    },
  }
}
</script>

<style scoped>
  #navigator {
    background-color: #fa561e;
    box-sizing: border-box;
    position: relative;
  }
  .navbar-nav li:hover > ul.dropdown-menu {
    display: block;
  }
  .dropdown-submenu {
    position:relative;
  }
  .dropdown-submenu>.dropdown-menu {
    top:0;
    left:100%;
    margin-top:-6px;
  }
  /* rotate caret on hover */
  .dropdown-menu > li > a:hover:after {
    text-decoration: underline;
    transform: rotate(-90deg);
  }
</style>
