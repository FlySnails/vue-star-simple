/**
* Created by hetingfeng on 2018/8/29.
*/
<template>
  <div class="stars">
    <div class="score">
      <div class="rating" :style="{color}">
        <label :data-active="now >= 5">
          <input
            type="radio"
            hidden
            @click="handleClickScore(id, 5)"/>
        </label>
        <label  :data-active="now >= 4">
          <input
            type="radio"
            :name="id"
            hidden
            @click="handleClickScore(id, 4)"/>
        </label>
        <label :data-active="now >= 3">
          <input
            type="radio"
            :name="id"
            hidden
            @click="handleClickScore(id, 3)"/>
        </label>
        <label :data-active="now >= 2">
          <input
            type="radio"
            :name="id"
            hidden
            @click="handleClickScore(id, 2)"/>
        </label>
        <label  :data-active="now >= 1">
          <input
            type="radio"
            :name="id"
            hidden
            @click="handleClickScore(id, 1)"/>
        </label>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        now: 0
      };
    },
    props: {
      id: String,
      color: {
        type: String,
        default: '#4FDBE6'
      }
    },
    methods: {
      handleClickScore(id, score) {
        const params = {};
        this.now = score;
        params.id = id;
        params.score = score;
        this.$emit('callBack',params);
      }
    }
  };
</script>

<style scoped lang="css" type="text/css">
  .stars{
    display: inline-block;
  }
  .score{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .rating{
    display: inline-block;
    font-size: 0;
  }
  .rating > label{
    color: currentColor;
    float: right;
  }
  .rating > label:before{
    padding: 0 .1rem;
    font-size: .4rem;
    display: inline-block;
    content: "☆";
  }
  .rating > label[data-active = true]:before{
    content: "★";
  }
</style>
