<template>
  <div v-if="title === ''">
    Loading ...
  </div>
  <div v-else id="stage">
    <div id="description">
      <h1>{{ title }}</h1>
      <h6 style="display: inline;" :title="'Author ' + author.name">
        <i class="fas fa-pen-nib"></i>&nbsp;
        <a v-if="author.url !== ''" :href="author.url" target="_blank">{{ author.name }}</a>
        <a v-else>{{ author.name }}</a>
      </h6>
      <hr>
      <div id="image" v-if="image !== null">
        <img :src="image"/>
      </div>
      <br>
      <p v-for="des in description" :key="des">{{ des }}</p>
    </div>
    <div id="field">
      <form @submit.prevent="submit">
        <div class="form-group">
          <code v-html="processCode()"></code>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <hr>
    <div id="result" v-if="result !== null">
      <div style="padding-left: 15px;">
        <h3>Result: </h3>
        <h5 v-if="result.result" style="color: GREEN;"><i class="fas fa-check-circle"></i> AC</h5>
        <h5 v-else style="color: RED;"><i class="fas fa-times-circle"></i> WA</h5>
      </div>
      <div class="col">
        <h3>Stdout:</h3>
        <textarea v-model="result.stdout" cols=50 rows=15></textarea>
      </div>
      <div class="col">
        <h3>Stderr:</h3>
        <textarea v-model="result.stderr" cols=50 rows=15></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stage',
  data: function () {
    return {
      levelName: '',
      stageName: '',
      title: '',
      author: {
        name: '',
        url: ''
      },
      image: null,
      description: [],
      fields: [],
      result: null,
      code: null
    }
  },
  mounted: function () {
    this.getStage()
  },
  watch: {
    $route (to, from) {
      if (to.name === 'Stage') {
        this.getStage()
      }
    }
  },
  methods: {
    getAuthor: function (name) {
      this.author = {
        name: '',
        url: ''
      }
      this.author['name'] = name;
      if (name === 'Official' || name === 'official') {
        this.author['url'] = "https://github.com/jackey8616"
      } else {
        this.$ajax({
          method: 'GET',
          url: `https://api.github.com/users/${name}`
        }).then(response => {
          this.author['url'] = response.data.html_url
        }).catch(() => {
        })
      }
    },
    getStage: function () {
      this.image = null
      this.result = null
      this.levelName = this.$route.params.level_name
      this.stageName = this.$route.params.stage_name
      this.title = ''
      this.$ajax({
        method: 'GET',
        url: `${this.$backend}/stage/${this.levelName}/${this.stageName}`
      }).then(response => {
        if (response.data.error !== undefined) {
          console.log(response.data.error)
        } else {
          this.title = response.data.data.title
          this.getAuthor(response.data.data.author)
          if (response.data.data.image !== undefined) {
            this.image = response.data.data.image
          }
          this.description = response.data.data.description
          this.code = response.data.data.code
          this.fields = response.data.data.fields
        }
      }).catch(error => {
        console.log(error)
      })
    },
    processCode: function () {
      var html = ''
      var fieldIndex = 0
      for (var index in this.code) {
        var code = this.code[index]
        var split = code.split(/_____/)
        for (var lineIndex in split) {
          html += split[lineIndex].split('    ').join('&nbsp;&nbsp;&nbsp;&nbsp;')
          if ((split.length - 1) > lineIndex) {
            html += `<input name="${this.fields[fieldIndex]}" style="text-align: center;border: none;border-bottom: 1px solid #9e9e9e;"/>`
            fieldIndex++
          }
        }
        html += '</br>'
      }
      return html
    },
    submit: function (event) {
      this.result = null
      var elements = event.target.elements
      var postData = {}
      for (var key in this.fields) {
        postData[this.fields[key]] = elements[this.fields[key]].value
      }
      this.$ajax({
        method: 'POST',
        url: `${this.$backend}/stage/${this.levelName}/${this.stageName}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: postData
      }).then(response => {
        if (response.data.success !== undefined && response.data.success === true) {
          var responseData = response.data.data
          this.result = {
            result: responseData.result,
            stdout: this.stdConcat(responseData.stdout),
            stderr: this.stdConcat(responseData.stderr)
          }
        } else {
        }
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    stdConcat: function (array) {
      if (array === undefined)
        return []

      var msg = ''
      for(var index in array)
        msg += array[index]
      return msg
    }
  }
}
</script>

<style scoped>
  #stage {
    height: 100%;
  }
  div {
    text-align: left;
  }
  .col {
    width: calc(100% / 2);
    float: left;
  }
  textarea {
    border: none;
    resize: none;
    overflow: hidden;
    display: block;
    width: calc(100% - 4px);
  }
  label {
    display: block;
  }
</style>
