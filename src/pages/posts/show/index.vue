<template>  
  <div>
    
    <div v-for="(value, key) in post" :key="key">
      {{ key }}: {{ value }}
    </div>
  

  </div>
</template>

<script>
import Kitsu from '@/network/kitsu'

export default {
  data () {
    return {
      post: {}
    }
  },
  methods: {
  },

  onLoad (options) {
    // this.id = options.id
    const api = new Kitsu()
    // console.log('xxxxxx', options.id)
    api.get('posts/' + options.id, {
    })
      .then((data) => {
        this.post = data.data
      })
      .catch(err => {
        if (err.errors) err.errors.forEach(error => { console.error(error) })
      })
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
