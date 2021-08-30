<template>
  <!-- add matrial modal -->
  <b-modal id="add-matrial" centered hide-header hide-footer size="lg">
    <div class="sm_padding">
      <div class="add_matrial_modal">
        <b-form @submit.prevent="addCourse">
          <b-row>
            <b-col lg="6">
              <AppInput
                rounded_radius
                type="text"
                v-model="newCourse.name"
                :title="newCourse.name"
              >
                اسم الدرس
              </AppInput>

              <AppInput
                rounded_radius
                type="text"
                v-model="newCourse.en_name"
                :title="newCourse.en_name"
              >
                اسم الدرس بالانجليزي
              </AppInput>

              <b-form-group>
                <label
                  class="form__label"
                  :class="newCourse.university_id === '' ? '' : 'has-data'"
                  for="university"
                  >اختر الكلية</label
                >
                <b-form-select v-model="newCourse.university_id">
                  <b-form-select-option
                    v-for="item in universities_arr"
                    :key="item.id"
                    :value="item.id"
                    >{{ item.name }}</b-form-select-option
                  >
                </b-form-select>
              </b-form-group>
              <b-form-group>
                <b-form-textarea
                  v-model="newCourse.details"
                  placeholder="قم بوضع وصف الدرس بحيث لا يتخطى 250 كلمة"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col lg="6">
              <b-row>
                <b-col cols="8" class="pl-0">
                  <div class="custom_input">
                    <div class="overlay">
                      <div class="rowunded_small_img">
                        <b-img
                          v-if="
                            singleTeacher != null && singleTeacher.image != null
                          "
                          :src="singleTeacher.image"
                        ></b-img>
                        <i v-else class="fa fa-user"></i>
                      </div>
                      <Title
                        extra_small
                        gray
                        v-if="
                          singleTeacher != null && singleTeacher.name != null
                        "
                        >{{ singleTeacher.name }}</Title
                      >
                      <Title extra_small gray v-else
                        >المعلم الخاص بالمادة</Title
                      >
                    </div>
                  </div>
                </b-col>
                <b-col cols="4">
                  <Button
                    rounded_radius
                    class="select_teacher_btn"
                    v-b-modal.teacher-selection
                    @click.native="getTeachers"
                    >تحديد</Button
                  >
                </b-col>
              </b-row>
              <AppInput
                rounded_radius
                type="text"
                v-model="newCourse.price"
                :title="newCourse.price"
              >
                رسوم الاشتراك
              </AppInput>
              <!-- upload image -->
              <div class="custom_input matrial">
                <UploadFileToS3 content_type='courseContent' @location="storeImg($event)" accept="image/*"></UploadFileToS3>
                <div class="overlay">
                  <div>
                    <b-img v-if="newCourse.image != null" :src="newCourse.image"></b-img>
                    <b-img v-else src="~assets/images/icons/Upload.svg"></b-img>
                  </div>
                  <Title small gray
                    >قم بسحب صورة شعار الجامعة من جهازك هنا</Title
                  >
                </div>
              </div>
              <!-- upload video -->
              <div class="custom_input matrial">
                <UploadFileToS3 content_type='courseContent' @location="storeVideo($event)" accept="video/*"></UploadFileToS3>
                <div class="overlay">
                  <div>
                    <b-img src="~assets/images/icons/Upload.svg"></b-img>
                  </div>
                  <Title small gray>من فضلك قم برفع الفيديو الدراسي</Title>
                </div>
              </div>
            </b-col>
          </b-row>

          <b-row class="btns justify-content-center">
            <b-col lg="3" md="6">
              <Button type="submit" rounded_radius bg_blue block
                >إضافة درس</Button
              >
            </b-col>
            <b-col lg="3" md="6">
              <Button
                rounded_radius
                block
                @click.native="reset"
                >إلغاء</Button
              >
            </b-col>
          </b-row>
        </b-form>
      </div>
    </div>
    <!-- teacher selection -->
    <b-modal id="teacher-selection" centered hide-header hide-footer size="md">
      <div class="sm_padding">
        <div class="teachers_selection">
          <b-row class="justify-content-center">
            <b-col md="10">
              <b-form-group>
                <b-form-input
                  v-model="searchInput"
                  @input="searchInTeachers($event)"
                  type="text"
                  placeholder="اسم المعلم"
                ></b-form-input>
                <i class="fa fa-search"></i>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="teachers_list">
            <div
              class="single_teacher"
              v-for="item in teachers_arr"
              :key="item.id"
            >
              <label class="checkbox_container" @click="sendId(item.id)">
                <input type="radio" name="teacher" />
                <span class="checkmark"></span>
              </label>
              <div class="content">
                <b-img
                  v-if="item.teacher_profile && item.teacher_profile.image"
                  :src="item.teacher_profile.image"
                  fluid
                ></b-img>
                <i v-else class="fa fa-user"></i>
                <Title small>{{ item.name }}</Title>
              </div>
            </div>
          </div>
          <b-row class="actions">
            <b-col sm="6">
              <b-button @click="selectTeacher">اختيار المعلم</b-button>
            </b-col>
            <b-col sm="6">
              <b-button @click="$bvModal.hide('teacher-selection')"
                >إلغاء</b-button
              >
            </b-col>
          </b-row>
        </div>
      </div>
    </b-modal>
    <!-- teacher selection -->
  </b-modal>
  <!-- add matrial model -->
</template>

<script>
export default {
	props: {
		getCourses: Function,
		universities_arr: Array,
	},
	data() {
		return {
			id: '',
			searchInput: '',
			newCourse: {
				name: '',
				en_name: '',
				price: '',
				details: '',
				university_id: '',
				user_id: '',
				image: null,
				ar_code: 'CURSC',
			},
			teachers_arr: [],
			singleTeacher: {},
			type: 'video/*'
		}
	},
	methods: {
		// reset
		reset() {
			this.newCourse.name = ''
			this.newCourse.en_name = ''
			this.newCourse.price = ''
			this.newCourse.details = ''
			this.newCourse.university_id = ''
			this.newCourse.user_id = ''
			this.newCourse.image = ''
			this.$bvModal.hide('add-matrial')
		},
		// send id to data
		sendId(id) {
			this.id = id
		},

		// add course
		async addCourse() {
			await this.$Api.courses.addCourse(this.newCourse).then((res) => {
				if (res.status === 201) {
					// this.$toast.fire({
					//   icon: "success",
					//   title: res.statusText,
					// });
					this.reset()
					this.getCourses()
				}
			})
		},
		// storing image
		storeImg(e) {
			this.newCourse.image = e
		},
		// storing video
		storeVideo(e) {
			this.newCourse.s3url = e
		},
		// select teacher from teachers
		async selectTeacher() {
			await this.$Api.teachers.getTeacherDetails(this.id).then((res) => {
				this.singleTeacher = res.data.user_info
				this.newCourse.user_id = this.id
				this.$bvModal.hide('teacher-selection')
			})
		},

		// get teachers
		async getTeachers(page) {
			await this.$Api.teachers.getTeachersList(page).then((res) => {
				this.teachers_arr = res.data
				this.teachers_meta = res.meta
			})
		},

		// search teachers
		async searchInTeachers(e, page) {
			await this.$Api.teachers.searchTeachersList(e, page).then((res) => {
				this.teachers_arr = res.data
				this.teachers_meta = res.meta
			})
		},
	},
}
</script>
