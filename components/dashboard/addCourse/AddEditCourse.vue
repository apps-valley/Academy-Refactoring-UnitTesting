<template>
  <b-form @submit.prevent="addEditCourse">
    <b-row>
      <b-col lg="6">
        <AppInput
          rounded_radius
          type="text"
          v-model="newCourse.name"
          :title="newCourse.name"
        >
          {{ $t("content-manegment.course-name-label") }}
        </AppInput>

        <!-- <AppInput
          rounded_radius
          type="text"
          v-model="newCourse.en_name"
          :title="newCourse.en_name"
        >
          اسم الدورة بالغة الانجليزية
        </AppInput> -->

        <b-form-group>
          <label
            class="form__label"
            :class="newCourse.university_id === '' ? '' : 'has-data'"
            for="university"
          >
            {{ $t("content-manegment.choose-category-label") }}
          </label>
          <img
            src="@/assets/images/icons/Arrow -down.svg"
            alt=""
            class="arrow-down"
          />
          <b-form-select v-model="newCourse.university_id">
            <b-form-select-option
              class="custom-dropdown"
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
            :placeholder="$t('content-manegment.descripe-course-placeholder')"
          ></b-form-textarea>
          <span class="text-danger" v-if="!validInputLength">
            {{ $t("content-manegment.number-of-allow-words-message") }}
          </span>
        </b-form-group>

        <!-- upload video -->
        <div class="custom_input matrial">
          <UploadFileToS3
            content_type="courseContent"
            @location="storeVideo($event)"
            @file-extention="ext = $event"
            accept="video/*"
          ></UploadFileToS3>
          <div class="overlay">
            <template v-if="!updated || newCourse.s3url">
              <div v-if="newCourse.s3url">
                <video width="320" height="240" controls>
                  <source :src="newCourse.s3url" :type="'video/' + ext" />
                  Your browser does not support the video tag.
                </video>
                <!-- <video v-if="newCourse.Promotion_video_link" :src="'https://player.vimeo.com/video/'+newCourse.Promotion_video_link"></video> -->
                <!-- <b-img src="~assets/images/icons/Upload.svg"></b-img> -->
              </div>
            </template>
            <Title v-else small gray>
              {{ $t("content-manegment.change-the-current-video-title") }}
            </Title>
          </div>
        </div>
      </b-col>

      <b-col lg="6">
        <div class="upper-input">
          <AppInput
            rounded_radius
            type="number"
            v-model="newCourse.price"
            :title="newCourse.price"
          >
            {{ $t("content-manegment.subsciption-fee") }}
          </AppInput>
          <span class="upper-input-hint">
            <img src="@/assets/images/icons/calcolter.svg" alt="" />
            {{
              $t(
                "content-manegment.a-15%-value-tax-will-be-added-to-this-amount"
              )
            }}
          </span>
        </div>

        <!-- radio button content -->
        <!-- TODO: leave this for later -->
        <!-- <div class="submit-certificate mt-5">
          <p class="title">هل ترغب بتقديم شهادة لطلاب هذة الدورة؟</p>
          <div class="checkbox-box">
            <label class="checkbox">
              <span class="checkbox-text">نعم</span>
              <input
                type="radio"
                name="certificate"
                value="1"
                v-model="newCourse.certificate"
              />
              <span class="checkmark"></span>
            </label>
            <label class="checkbox">
              <span class="checkbox-text">لا</span>
              <input
                type="radio"
                name="certificate"
                value="0"
                v-model="newCourse.certificate"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div> -->

        <!-- checkbox content -->
        <div class="study-advantages mt-4">
          <p class="title">
            {{ $t("content-manegment.study-advantages") }}
          </p>

          <div
            class="advantages-content"
            v-for="benefit in newCourse.benefits"
            :key="benefit.id"
          >
            <input
              type="checkbox"
              class="custom-checkbox-input"
              :id="benefit.id"
              :value="benefit.benefit"
              v-model="benefit.is_checked"
            />
            <label :for="benefit.id" class="custom-checkbox-label">
              <span>
                <!-- <img :src="benefit.icon" alt="" /> -->
                <span v-html="benefit.icon"></span>
                {{ benefit.benefit }}
              </span>
            </label>
          </div>
        </div>

        <!-- upload image -->
        <div class="custom_input custom_input_img matrial">
          <UploadFileToS3
            content_type="courseContent"
            @location="storeImg($event)"
            accept="image/*"
          ></UploadFileToS3>
          <div class="overlay">
            <div>
              <b-img
                v-if="newCourse.image != null"
                :src="newCourse.image"
              ></b-img>
              <b-img v-else src="~assets/images/icons/Upload.svg"></b-img>
            </div>
            <Title small gray>
              {{
                $t(
                  "content-manegment.drag-the-course-image-from-your-device-or-click-here"
                )
              }}
            </Title>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-row class="btns">
      <b-col lg="3" md="6">
        <Button type="submit" rounded_radius bg_blue block>
          {{
            updated
              ? $t("content-manegment.add-new-course-button")
              : $t("content-manegment.edit-course-button")
          }}
        </Button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import validCourses from '@/mixins/validCourses'
import { mapGetters } from 'vuex'
export default {
	name: 'AddEditCourse',
	mixins: [validCourses],
	props: {
		universities_arr: {
			type: Array,
			required: true,
		},
		updated: {
			type: Boolean,
			default: false,
		},
		// getCourseDetails: {
		//   type: Object,
		//   default: null,
		// },
		courseid: {
			type: String,
		},
	},
	data() {
		return {
			newCourse: {
				name: '',
				price: '',
				details: '',
				university_id: '',
				user_id: '',
				image: '',
				s3url: '',
				benefits: [
					{
						id: 1,
						is_checked: false,
						benefit: this.$t('content-manegment.benefit-accredited-certification'),
						icon: `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                id="Group_18645"
                data-name="Group 18645"
                transform="translate(-180 -38)"
              >
                <rect
                  id="Rectangle_3143"
                  data-name="Rectangle 3143"
                  width="24"
                  height="24"
                  transform="translate(180 38)"
                  fill="none"
                />
                <g
                  id="document"
                  transform="translate(175.33 39.666)"
                >
                  <path
                    class="svg-secondary-fill"
                    id="Path_64221"
                    data-name="Path 64221"
                    d="M19.843,0H11.165A2.785,2.785,0,0,0,8.384,2.781V17.887a2.785,2.785,0,0,0,2.781,2.781h11.01a2.784,2.784,0,0,0,2.781-2.781V5.715Zm.405,2.652,2.336,2.611H20.248V2.652ZM22.174,19.2H11.165A1.317,1.317,0,0,1,9.85,17.887V2.781a1.317,1.317,0,0,1,1.315-1.315h7.617V6.728H23.49V17.887A1.317,1.317,0,0,1,22.174,19.2Z"
                    transform="translate(0)"
                    fill="var(--secondary)"
                  />
                  <rect
                    class="svg-secondary-fill"
                    id="Rectangle_3140"
                    data-name="Rectangle 3140"
                    width="10.493"
                    height="1.466"
                    transform="translate(11.423 14.818)"
                    fill="var(--secondary)"
                  />
                  <rect
                    class="svg-secondary-fill"
                    id="Rectangle_3141"
                    data-name="Rectangle 3141"
                    width="10.493"
                    height="1.466"
                    transform="translate(11.423 11.632)"
                    fill="var(--secondary)"
                  />
                  <rect
                    class="svg-secondary-fill"
                    id="Rectangle_3142"
                    data-name="Rectangle 3142"
                    width="10.493"
                    height="1.466"
                    transform="translate(11.423 8.447)"
                    fill="var(--secondary)"
                  />
                </g>
              </g>
            </svg>
            `,
					},
					{
						id: 2,
						is_checked: false,
						benefit: this.$t('content-manegment.benefit-direct-contact-with-the-teacher'),
						icon: `<svg
                    id="Icons-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.819"
                    height="18.182"
                    viewBox="0 0 20.819 18.182"
                  >
                    <path
                      class="svg-secondary-fill"
                      id="Group"
                      d="M6.94,18.156H2.6a2.6,2.6,0,0,1-2.6-2.6V12.778a2.672,2.672,0,0,1,1.622-2.36,13.366,13.366,0,0,1,7.052-.763A.879.879,0,1,1,8.4,11.39a11.655,11.655,0,0,0-6.072.667A.964.964,0,0,0,1.8,12.8V15.58a.868.868,0,0,0,.867.867H6.94a.867.867,0,0,1,0,1.735Zm11.841.009h-4.9a.868.868,0,0,1,0-1.735h4.875a.293.293,0,0,0,.3-.286V13.228a.658.658,0,0,0-.338-.477,9.452,9.452,0,0,0-6.94,0,.658.658,0,0,0-.338.477v4.06a.868.868,0,1,1-1.735,0v-4.06a2.368,2.368,0,0,1,1.44-2.1,11.156,11.156,0,0,1,8.232,0,2.368,2.368,0,0,1,1.44,2.1v2.915a2.031,2.031,0,0,1-2.03,2.021Zm-3.6-9.551a3.036,3.036,0,1,1,3.036-2.992A3.035,3.035,0,0,1,15.18,8.613ZM2.6,3.9a3.9,3.9,0,1,1,3.9,3.9A3.9,3.9,0,0,1,2.6,3.9Z"
                      transform="translate(0 0)"
                      fill="var(--secondary)"
                    />
                  </svg>`,
					},
					{
						id: 3,
						is_checked: false,
						benefit: this.$t('content-manegment.benefit-discuss-with-the-students-of-the-course'),
						icon: `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                id="Group_18643"
                data-name="Group 18643"
                transform="translate(-180 -38)"
              >
                <rect
                  id="Rectangle_3143"
                  data-name="Rectangle 3143"
                  width="24"
                  height="24"
                  transform="translate(180 38)"
                  fill="none"
                />
                <path
                  class="svg-secondary-fill"
                  id="Massage"
                  d="M4.026,16.907a.8.8,0,0,1-.572-1.377L6.2,12.785a2.412,2.412,0,0,1,1.714-.708h8.993a.805.805,0,0,0,.805-.805V2.415a.805.805,0,0,0-.805-.805H2.415a.806.806,0,0,0-.805.805v8.857a.806.806,0,0,0,.805.805H3.22a.805.805,0,1,1,0,1.61H2.415A2.415,2.415,0,0,1,0,11.272V2.415A2.415,2.415,0,0,1,2.415,0H16.907a2.415,2.415,0,0,1,2.416,2.415v8.857a2.415,2.415,0,0,1-2.416,2.415H7.914a.8.8,0,0,0-.572.233L4.6,16.673a.8.8,0,0,1-.566.233Zm.805-8.131a.805.805,0,0,1,0-1.61h5.635a.805.805,0,1,1,0,1.61Zm0-3.22a.805.805,0,0,1,0-1.611h8.856a.805.805,0,0,1,0,1.611Z"
                  transform="translate(182.638 42)"
                  fill="var(--secondary)"
                />
              </g>
            </svg>`,
					},
					{
						id: 4,
						is_checked: false,
						benefit: this.$t('content-manegment.benefit-others'),
						icon: `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  id="Group_18642"
                  data-name="Group 18642"
                  transform="translate(-180 -38)"
                >
                  <g
                    id="Icons-3"
                    transform="translate(184 39)"
                  >
                    <path
                      class="svg-secondary-fill"
                      id="Certificate"
                      d="M11.141,21.991l-2.429-.624a1.033,1.033,0,0,0-.669,0l-2.751.6A1.375,1.375,0,0,1,3.669,20.6V15.544A1.375,1.375,0,0,1,5.6,14.288,6.419,6.419,0,1,0,2.7,11.656a.917.917,0,0,1-1.586.917A8.247,8.247,0,0,1,.1,7.146,8.254,8.254,0,1,1,16.46,9.365a8.253,8.253,0,0,1-7.115,7.271,8.383,8.383,0,0,1-3.842-.4v3.787l2.063-.45a2.689,2.689,0,0,1,1.66,0L11,19.991V18.534a.917.917,0,1,1,1.834,0v2.081a1.376,1.376,0,0,1-1.376,1.376A1.386,1.386,0,0,1,11.3,22,1.4,1.4,0,0,1,11.141,21.991ZM6.685,10.933,4.851,9.1a.921.921,0,0,1,1.3-1.3L7.336,8.979l3.026-3.008a.917.917,0,0,1,1.293,1.293L7.987,10.933H7.978a.918.918,0,0,1-1.293,0Z"
                      transform="translate(0)"
                      fill="var(--secondary)"
                    />
                  </g>
                  <rect
                    id="Rectangle_3143"
                    data-name="Rectangle 3143"
                    width="24"
                    height="24"
                    transform="translate(180 38)"
                    fill="none"
                  />
                </g>
              </svg>`,
					},
				],
				certificate: 'لا',
				is_image_updated: 0,
			},
			type: 'video/*',
			ext: '',
		}
	},
	// watch: {
	//   getCourseDetails() {
	//     if (typeof this.getCourseDetails.benefits != "object") {
	//       let benefits = JSON.parse(this.getCourseContent.benefits);
	//       this.newCourse = { ...this.getCourseDetails, benefits: benefits };
	//     } else {
	//       this.newCourse = { ...this.getCourseDetails };
	//     }
	//   },
	// },
	async mounted() {
		// this.newCourse.user_id = this.$auth.$storage.getUniversal("user").user.id;
		if (this.getCourseDetails) {
			if (typeof this.getCourseDetails.benefits != 'object') {
				let benefits = JSON.parse(this.getCourseContent.benefits)
				this.newCourse = { ...this.getCourseDetails, benefits: benefits }
			} else {
				this.newCourse = { ...this.getCourseDetails }
			}
		}
	},
	computed: {
		...mapGetters({ getCourseDetails: 'course/getCourseDetails' }),
		getUserID() {
			let user = this.$store.getters.getUser
			if (user) {
				this.user_id = user.id
				return this.user_id
			}
		},
	},
	methods: {
		reset() {
			this.newCourse.name = ''
			this.newCourse.en_name = ''
			this.newCourse.price = ''
			this.newCourse.details = ''
			this.newCourse.university_id = ''
			this.newCourse.user_id = ''
			this.newCourse.image = ''
		},
		// storing image
		storeImg(e) {
			this.newCourse.image = e
			this.newCourse.is_image_updated = 1
		},
		// storing video
		storeVideo(e) {
			this.newCourse.s3url = e
			// this.ext = e.split(".")[1];
			// console.log("video => ", e);
		},
		// add course
		addEditCourse() {
			this.newCourse.s3url = this.newCourse.Promotion_video_link
				? this.newCourse.Promotion_video_link
				: this.newCourse.s3url
			this.newCourse.ar_code = !this.newCourse.ar_code
				? 'test'
				: this.newCourse.ar_code
			let course
			if (this.updated) {
				course = 'course/updateCourseDetails'
				this.newCourse.is_image_updated = this.newCourse.is_image_updated
					? this.newCourse.is_image_updated
					: 0
			} else {
				course = 'course/setNewCourse'
			}
			this.$store
				.dispatch(course, {
					...this.newCourse,
					benefits: JSON.stringify(this.newCourse.benefits),
				})
				.then((res) => {
					this.$emit('course-id', res.data.course.id)
					this.$emit('change-active-tab')
				})
		},
	},
	// created() {
	//   this.$store
	//     .dispatch("getCourseDetailsById", this.courseid)
	//     .then((res) => {});
	// },
}
</script>

<style lang="scss" scoped>
.disableStyle {
  cursor: not-allowed;
}
</style>
