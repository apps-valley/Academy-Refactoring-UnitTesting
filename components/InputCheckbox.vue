<template>
    <div class="d-flex">
        <b-form-checkbox :id="id" label-position="right" v-model="selected"></b-form-checkbox>
        <b-img :src="require(`@/assets/images/icons/${icon}.svg`)" class="mr-2 mt-1" style="width: 16px; height: 16px"></b-img>
        <label for="checkbox" class="mx-1">{{text}}</label>
    </div>
</template>

<script>
    export default {
        name: 'InputCheckbox',
        data() {
            return {
                selected: ''
            }
        },
        props: {
            icon: String,
            text: String,
            id: String
        }
    }
</script>
