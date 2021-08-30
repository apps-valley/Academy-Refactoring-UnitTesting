<template>
    <b-row align-v="center" align-h="between" cols="3" class="py-2 mx-2" style="background-color:#fff; border-radius: 60px" >
        <b-col cols="1">
            <UserImage :url="imageUrl"/>
        </b-col>
        <b-col cols="4">
                <Label v-if="active" active text="نشط"/>
                <Label v-else-if="!active" offline text="خامل"/>
                {{name}} <br>
                <span class="text-black-50" style="font-size: 10px;">Last seen: {{lastSeen}}</span>
        </b-col>
        <b-col cols="7" class="d-flex" align-v="center">
            <CustomButtonWrapper
                btnType="gradient-primary__white"
                btnTitle="الدورات التي يدرسها"
                icon="book-wight"
                pullRight
                class="my-2"
            />
            <div style="background-color:#D7E1EF9a; border-radius: 60px" class="d-flex p-2 mx-1" align-self="center">
                <CustomButtonWrapper
                    btnTitle="البريد مفعل"
                    class="mx-1"
                    customClass="btn-gradient-secondary"
                />
                <CustomButtonWrapper
                    btnTitle="تعديل"
                    bg="black"
                    icon="settings"
                    class="mx-1"
                />
            </div>
        </b-col>
    </b-row>
</template>

<script>
import CustomButtonWrapper from './CustomButtonWrapper.vue'
    import Button from './Button'
    import Label from './Label'
    import UserImage from './UserImage'
    export default {
        name: 'Row',
        components: {
            Button,
            Label,
            UserImage,
            CustomButtonWrapper
        },
        props: {
            name: String,
            active: {
                type: Boolean,
                default: false
            },
            lastSeen: String,
            imageUrl: String,
        }
        
    }
</script>