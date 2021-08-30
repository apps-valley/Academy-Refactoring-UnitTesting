<template>
<div>
    <b-row style="border: 2px dashed black; border-radius: 40px;height: 60px; width: 300px;" align-v="center">
        <b-col cols="3">
            <b-avatar style="background-color: transparent; border: dashed 2px black;">
            <b-img :src="require(`@/assets/images/icons/${icon}.svg`)" align-self="end"></b-img>
            </b-avatar>
        </b-col>
        <b-col cols="6">
            <label for="fileInput" >{{fileName}}</label>
                <input 
                    id="fileInput"
                    :placeholder="placeHolder" 
                    style="border: none; background-color: transparent"
                    tabindex="-1"
                    type="file"
                    class="visually-hidden"
                    @change="onFileChange"
                />
            
        </b-col>
        <b-col cols="3">
            <CustomButtonWrapper
                    btnTitle="رفع"
                    class="mx-1"
                    customClass="btn-gradient-secondary"
                />
        </b-col>
    </b-row>
    </div>
</template>

<script>
    export default {
        name: "InputText",
        data() {
            return {
                fileName: 'enter file name',
                icon: 'members-gray'
            }
        },
        props: {
            placeHolder: String,
        },
        methods: {
            onFileChange(event){
                var fileData =  event.target.files[0];
                this.fileName=fileData.name;
            }
        }
    }
</script>

<style scoped>
    .visually-hidden {
  border-width: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}
</style>
