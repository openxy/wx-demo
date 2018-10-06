<template>  
  <div>
    <ul>
      <li v-for="(post, index) in posts" :key="index">        
        <navigator :url="'../show/main?id=' + post.id">
          {{post.id}}  {{post.title}}
        </navigator>
      </li>
    </ul>
  
  </div>
</template>

<script>
import Kitsu from '@/network/kitsu'

export default {
  data () {
    return {
      posts: []
    }
  },
  methods: {
  },

  created () {
    const api = new Kitsu()

    api.get('posts', {
    })
      .then((data) => {
        this.posts = data.data
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
