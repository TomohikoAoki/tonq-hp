<template>
  <div class="top">
    <h1 class="form-top-title">FORM TOP<span>-フォームトップ-</span></h1>
        <nuxt-link to="create">
            <div class="btn-create">ニュース新規作成</div>
        </nuxt-link>
        <div>
            <h2>ニュースリスト</h2>
            <div class="topic-area">

                <div class="topic" v-for="(topic, index) in contents" :key="index">
                    <div class="topic-title">
                        <div class="date">{{ topic.date }}</div>
                        <div class="title">{{ topic.title }}</div>
                    </div>
                    <div class="topic-button">
                        <div class="edit button"><nuxt-link :to="{ path: '/news/form/edit', query: {id: topic.id}}">編集</nuxt-link></div>
                        <div class="delete button" @click="pushDelete(topic.id)">削除</div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          'id': 1,
          'title': 'テスト',
          'date': '2023-01-12'
        },
        {
          'id': 2,
          'title': 'テスト',
          'date': '2023-01-12'
        },
        {
          'id': 3,
          'title': 'テスト',
          'date': '2023-01-12'
        },
        {
          'id': 4,
          'title': 'テスト',
          'date': '2023-01-12'
        }
      ]
    }
  },
  layout() {
    return 'form'
  },
  methods: {
    pushDelete(id) {
      console.log(id)
    },
    async fetchNews() {

    }
  }
}
</script>

<style scoped lang="scss">
.btn-create {
    width: 200px;
    border: 1px solid rgb(22, 74, 152);
    padding: 1em 0;
    text-align: center;
    font-weight: bold;
    color: rgb(22, 74, 152);
    border-radius: 5px;
    margin: 20px 0;
}

.top {
    max-width: 1300px;
    margin: 0 auto;
}

.form-top-title {
  font-size: 2.5em;
  font-weight: bold;
    span {
        font-size: 0.5em;
        display: block;
    }
}

.topic-area {
    >div:nth-child(odd) {
        background-color: rgb(240, 240, 240);
    }
    .topic {
        display: flex;
        padding: 1em 0;
        justify-content: space-between;
        .topic-title {
            .title {
                font-weight: bold;
                font-size: 1.3em;
            }
            .date {
                font-weight: bold;
                color: rgb(114, 101, 101);
            }
        }
        .topic-button {
            display: flex;
            width: 250px;
            .button {
                width: 100px;
                text-align: center;
                border-radius: 5px;
                &.delete {
                    border: 1px solid #999;
                }
            }
        }
    }
}
</style>
