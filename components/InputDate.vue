<template>
    <div>
        <b-form-datepicker
            v-model="date"
            :placeholder="placeHolder"
            style="border-radius: 40px;height: 60px; width: 300px;"
        ></b-form-datepicker>
    </div>
</template>

<script>
    export default {
        name: 'InputDate',
        data() {
            return {
                date: ''
            }
        },
        props: {
            placeHolder: String
        }
    }
</script>
