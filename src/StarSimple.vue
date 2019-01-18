/**
* Created by FlySnails on 2018/8/29.
*/
<template>
    <div class="stars">
        <div class="score-wrap">
            <div class="rating" :style="{color}">
                <label :data-active="scroe >= 5">
                    <input
                        type="radio"
                        hidden
                        @click="handleClickScore(5)"/>
                </label>
                <label :data-active="scroe >= 4">
                    <input
                        type="radio"
                        hidden
                        @click="handleClickScore(4)"/>
                </label>
                <label :data-active="scroe >= 3">
                    <input
                        type="radio"
                        hidden
                        @click="handleClickScore(3)"/>
                </label>
                <label :data-active="scroe >= 2">
                    <input
                        type="radio"
                        hidden
                        @click="handleClickScore(2)"/>
                </label>
                <label :data-active="scroe >= 1">
                    <input
                        type="radio"
                        hidden
                        @click="handleClickScore(1)"/>
                </label>
            </div>
            <span class="scroe" v-if="showScore">{{ scroe }}</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                scroe: 0
            };
        },
        props: {
            value: [String, Number],
            showScore: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: '#ff9900'
            }
        },
        created() {
            if(this.value) this.scroe = Number(this.value);
        },
        methods: {
            handleClickScore(score) {
                this.scroe = score;
                this.$emit('input', score);
            }
        }
    };
</script>

<style scoped lang="css" type="text/css">
    .stars {
        display: inline-block;
    }

    .score-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .rating {
        display: inline-block;
        font-size: 0;
    }

    .rating > label {
        color: currentColor;
        float: right;
    }

    .rating > label:before {
        padding: 0 .1rem;
        font-size: 14px;
        display: inline-block;
        content: "☆";
        color: #c6d1de;
    }

    .rating > label[data-active = true]:before {
        content: "★";
        color: currentColor;
    }
    .scroe {
        margin-left: 4px;
        margin-top: -3px;
    }
</style>
