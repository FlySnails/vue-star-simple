# vue-star

> 简单的vue评分插件

## Use

``` use
npm install vue-star-simple
```

##  Options

| prop | 描述 |  类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| id | 当前评分的id（两个以上评分必传） |  String | - |
| color | 五角星颜色 |  String | #4FDBE6 |

##  Functions

| name | 描述 | 
| :---: | :---: | 
| callBack | 返回当前评分id及分数 {id: 1, score: 5} |

##  Example

```
<template>
  <vue-simple-star 
    :color="color" 
    :id="id"                       
    @callBack="callBack">          
  </vue-simple-star>
</template>

<script>
  import vueStarSimple from 'vue-star-simple';
    
  export default {
    components: { vueStarSimple },
    data () {
      return {
        color: '#fff',
        id: 1
      }
    }
  }
</script>
```
