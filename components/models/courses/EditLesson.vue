<template>
 <!-- add-new-lesson -->
    <b-modal id="edit-lesson" centered hide-header hide-footer size="md">
        <div class="sm_padding">
          <div class="add_member_modal">
            <form @submit.prevent="updateLeson">
              <AppInput
                rounded_radius
                type="text"
                v-model="singleLesson.title"
                :title="singleLesson.title"
              >
                أسم الدرس
              </AppInput>

              <b-form-group>
                <label
                  class="form__label"
                  :class="singleLesson.chapter_id === '' ? '' : 'has-data'"
                  for="university"
                  >اختر الدرس</label
                >
                <img src="@/assets/images/icons/Arrow -down.svg" alt="" class="arrow-down">
                <b-form-select v-model="singleLesson.chapter_id">
                  <b-form-select-option
                    class="custom-dropdown"
                    v-for="item in Tablelist"
                    :key="item.id"
                    :value="item.id">
                    {{ item.title }}
                  </b-form-select-option>
                </b-form-select>
              </b-form-group>

              <AppInput
                rounded_radius
                type="number"
                v-model="singleLesson.videoTime"
                :title="singleLesson.videoTime"
              >
                مدة الفيديو
              </AppInput>

              <!-- upload video -->
              <div class="custom_input matrial">
                <UploadFileToS3 @location="storeVideo($event)" accept="video/*"></UploadFileToS3>
                <div class="overlay">
                  <div>
                    <b-img src="~assets/images/icons/Upload.svg"></b-img>
                  </div>
                  <Title small gray>قم بسحي بوموفيديو للدورة من جهازك هنا</Title>
                </div>
              </div>

              <!-- radio button content -->
              <div class="submit-radio mt-5">
                <div class="checkbox-box">
                  <label class="checkbox">
                    <span class="checkbox-text">مجانى</span>
                    <input type="radio" name="is_free" value="1" v-model="singleLesson.is_free"/>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox">
                    <span class="checkbox-text">غير مجانى</span>
                    <input type="radio" name="is_free" value="0" v-model="singleLesson.is_free"/>
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>

              <b-row class="btns mt-3">
                <b-col lg="6" sm="12">
                  <Button rounded_radius bg_blue class="w-100" type="submit">تعديل</Button>
                </b-col>
                <b-col lg="6" sm="12">
                  <Button rounded_radius class="w-100 bg-transparent text-black-50" type="button" @click.native="$bvModal.hide('edit-lesson')">الغاء</Button>
                </b-col>
              </b-row>
            </form>
          </div>
        </div>
    </b-modal>
</template>

<script>
export default {
	props: {
		singleLesson: {
			type: Object,
			required: true
		},
		Tablelist: {
			type: Array,
			required: true
		}
	},
	methods: {
		// storing video
		storeVideo(e) {
			this.singleLesson.s3url = e
		},

		updateLeson() {
			this.$emit('editLesson', this.singleLesson)
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
