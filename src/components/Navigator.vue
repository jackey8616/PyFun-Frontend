<template>
  <nav id="navigator" class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">PyFun</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbatNav" aria-expanded="false" aria-label="Toggle navgaton">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Index</router-link>
        <a v-if="stages === null" class="nav-item nav-link">Stage Loading</a>
        <li class="nav-item dropdown" v-for="(value, key) in stages" :key="key">
          <a @click="fetchLesson(key)" class="nav-link dropdown-toggle" href="#" id="dropdownAbout" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Stage {{ key }}</a>
          <div v-if="stages[key].lessons === undefined" class="dropdown-menu" aria-labelledby="dropdownAbout">
            <a class="dropdown-item">Loading...</a>
          </div>
          <div v-else class="dropdown-menu" aria-labelledby="dropdownAbout">
            <router-link v-for="lesson in stages[key].lessons" :key="lesson.index" :to="lesson.url" class="dropdown-item">{{ lesson.title }}</router-link>
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigator',
  data: function () {
    return {
      stages: null
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === 'Index') {
        this.fetchList()
      }
    }
  },
  mounted: function () {
    this.fetchList()
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
    fetchLesson: function (stageName) {
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
  }
}
</script>

<style scoped>
  #navigator {
    background-color: #fa561e;
    box-sizing: border-box;
    position: relative;
  }
</style>
