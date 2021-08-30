<template>
    <div>
        <b-form-input
            v-model="number"
            :placeholder="placeHolder"
            style="border-radius: 40px;height: 60px; width: 300px;"
            type="number"
        ></b-form-input>
    </div>
</template>

<script>
    export default {
        name: 'InputNumber',
        data() {
            return {
                number: ''
            }
        },
        props: {
            placeHolder: String
        }
    }
</script>