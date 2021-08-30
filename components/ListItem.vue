<template>
    <div style="border-radius: 50px; background-color: #D7E1EF" class="my-10 mx-10 align-items-center ">
        <b-row class="py-2 px-2 align-items-center">
            <b-col v-if="imageUrl" cols="2" align-self="center"><UserImage :url="imageUrl"/></b-col>
            <b-col cols="7">{{title}}</b-col>
            <b-col v-if="label" cols="3"><Label :text="label" color='#24e8a6'/></b-col>
        </b-row>            
    </div>
</template>

<script>
    import Label from './Label.vue'
    import UserImage from './UserImage.vue'
    export default {
        name: "ListItem",
        components: {UserImage, Label},
        props: {
            label: {
                type: String,
                default: null
            },
            imageUrl: {
                type: String,
                default: null
            },
            title: String,
        }
    }
</script>