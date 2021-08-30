<template>
        <InputSelect v-if="type==='Select'" :placeHolder='text' :options='options'/>
        <component v-else-if="type!='Checkbox'" :is="inputComponent" :placeHolder='text'/>
        <InputCheckbox v-else :text='text' :icon='icon' :id="id"/>
</template>

<script>
    export default {
        name: 'InputWrapper',
        props: ['type', 'text', 'icon', 'id', 'options'],
        computed: {
            inputComponent() {
                return "Input"+this.type
            }
        }
    }
</script>

<style scoped>

</style>