# vue-star

> 简单的vue评分插件

## Use

``` use
npm install vue-star-simple
```

##  Options

| prop | 描述 |  类型 | 默认值 |
| :---: | :---: | :---: | :---: |
| value | 评分 |  String/Number | - |
| showScore | 是否显示评分 |  Boolean | false |
| color | 五角星颜色 |  String | #ff9900 |

##  Example

```
<template>
   <vue-star-simple
      v-model="scroe"
      show-score
      :color="color">
   </vue-star-simple>
</template>

<script>
  import vueStarSimple from 'vue-star-simple';
    
  export default {
    components: { vueStarSimple },
    data () {
      return {
        color: '#fff',
        scroe: 1
      }
    }
  }
</script>
```
