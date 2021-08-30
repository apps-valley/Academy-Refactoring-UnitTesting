<template>
<div>
    <b-row style="border: 1px solid black; border-radius: 40px;height: 60px; width: 300px;" align-v="center">
        <b-col cols="10">
            <input 
                v-model="text" 
                :placeholder="placeHolder" 
                style="border: none; background-color: transparent"
                type="text" 
                class="p-3"
                tabindex="-1"
            />
        </b-col>
        <b-col cols="2">
            <b-img :src="require(`@/assets/images/icons/${icon}.svg`)" align-self="end"></b-img>
        </b-col>
    </b-row>
    </div>
</template>

<script>
    export default {
        name: "InputText",
        data() {
            return {
                text: ''
            }
        },
        props: {
            placeHolder: String,
            icon: String
        }
    }
</script>
