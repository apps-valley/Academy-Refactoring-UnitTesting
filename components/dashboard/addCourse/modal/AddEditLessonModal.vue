<template>
  <!-- add-new-lesson -->
  <b-modal
    id="add-new-lesson"
    centered
    hide-header
    hide-footer
    size="md"
    ref="my-modal"
    @hide="hideModal"
    @show="showModal"
  >
    <div class="sm_padding">
      <div class="add_member_modal">
        <form @submit.prevent="addLesson">
          <AppInput
            rounded_radius
            type="text"
            v-model="addNewLesson.title"
            :title="addNewLesson.title"
          >
            {{ $t("content-manegment.lesson-name-label") }}
          </AppInput>

          <b-form-group v-if="getCourseContent">
            <label
              class="form__label"
              :class="addNewLesson.chapter_id === '' ? '' : 'has-data'"
              for="university"
            >
              {{ $t("content-manegment.choose-chapter-label") }}
            </label>
            <img
              src="@/assets/images/icons/Arrow -down.svg"
              alt=""
              class="arrow-down"
            />
            <b-form-select v-model="addNewLesson.chapter_id">
              <b-form-select-option
                class="custom-dropdown"
                v-for="item in getCourseContent.chapters"
                :key="item.id"
                :value="item.id"
              >
                {{ item.title }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>

          <AppInput
            rounded_radius
            type="number"
            v-model="addNewLesson.videoTime"
            :title="addNewLesson.videoTime"
          >
            {{ $t("content-manegment.video-time") }}
          </AppInput>

          <!-- upload video -->
          <div class="custom_input matrial">
            <UploadFileToS3
              @location="storeVideo($event)"
              filetype="video/*"
              accept="video/*"
              @video-time="addNewLesson.videoTime = $event"
              @file-extention="ext = $event"
            ></UploadFileToS3>
            <div class="overlay">
              <template v-if="!toggle || addNewLesson.s3url">
                <div v-if="!addNewLesson.s3url">
                  <b-img src="~assets/images/icons/Upload.svg"></b-img>
                  <Title small gray>
                    {{
                      $t(
                        "content-manegment.drag-a-video-of-the-lesson-from-your-device-or-click-here"
                      )
                    }}
                  </Title>
                </div>
                <video v-else width="320" height="240" controls>
                  <source :src="addNewLesson.s3url" :type="'video/' + ext" />
                  Your browser does not support the video tag.
                </video>
              </template>
              <Title v-else small gray>
                {{
                  $t("content-manegment.change-the-current-video-title")
                }}</Title
              >
            </div>
          </div>

          <!-- radio button content -->
          <div class="submit-radio mt-5">
            <div class="checkbox-box">
              <label class="checkbox">
                <span class="checkbox-text">
                  {{ $t("content-manegment.free-label") }}
                </span>
                <input
                  type="radio"
                  name="is_free"
                  value="1"
                  v-model="addNewLesson.is_free"
                />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox">
                <span class="checkbox-text">{{
                  $t("content-manegment.not-free-label")
                }}</span>
                <input
                  type="radio"
                  name="is_free"
                  value="0"
                  v-model="addNewLesson.is_free"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>

          <b-row class="btns mt-3">
            <b-col lg="6" sm="12">
              <Button rounded_radius bg_blue class="w-100" type="submit">
                {{
                  this.toggle
                    ? $t("content-manegment.edit-button")
                    : $t("content-manegment.add-button")
                }}
              </Button>
            </b-col>
            <b-col lg="6" sm="12">
              <Button
                rounded_radius
                class="w-100 bg-transparent text-black-50"
                type="button"
                @click.native="$bvModal.hide('add-new-lesson')"
              >
                {{ $t("content-manegment.cancle-button") }}</Button
              >
            </b-col>
          </b-row>
        </form>
      </div>
    </div>
  </b-modal>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	props: ['course_id', 'singleLesson', 'toggle'],
	data() {
		return {
			newChapterId: null,
			oldChapterId: null,
			addNewLesson: {
				title: '',
				chapter_id: '',
				s3url: '',
				videoTime: '',
				is_free: '',
			},
			ext: '',
		}
	},
	watch: {
		singleLesson() {
			this.addNewLesson = { ...this.singleLesson }
			// this.addNewLesson;
			this.oldChapterId = this.addNewLesson.chapter_id
		},
		addNewLesson() {
			this.oldChapterId = this.addNewLesson.chapter_id
		},
	},
	computed: {
		...mapGetters({ getCourseContent: 'course/getCourseContent' }),
	},
	methods: {
		hideModal() {
			// if (!this.toggle) {
			this.addNewLesson = {
				title: '',
				chapter_id: '',
				s3url: '',
				videoTime: '',
				is_free: '',
			}
			// }
			this.addNewLesson.s3url = ''
			this.$emit('update-lesson', false)
			this.$refs['my-modal'].hide()
		},
		showModal() {
			// this.lesson = this.singleLesson;
			if (this.toggle) {
				this.addNewLesson = { ...this.singleLesson }
			}
		},
		// storing video
		storeVideo(e) {
			this.addNewLesson.s3url = e
		},
		addLesson() {
			let addEditLesson
			if (this.toggle) {
				addEditLesson = 'course/updateLesson'
				this.addNewLesson.id = this.addNewLesson.id
				this.addNewLesson.s3url = this.addNewLesson.video
					? this.addNewLesson.video
					: this.addNewLesson.s3url
				this.newChapterId =
          this.oldChapterId == this.addNewLesson.chapter_id
          	? null
          	: this.addNewLesson.chapter_id
				this.addNewLesson = {
					...this.addNewLesson,
					newChapterId: this.newChapterId,
					oldChapterId: this.oldChapterId,
				}
				// this.addNewLesson.course_id = this.course_id;
			} else {
				addEditLesson = 'course/addNewLesson'
			}
			this.addNewLesson.course_id = this.course_id
			this.$store.dispatch(addEditLesson, this.addNewLesson).then((res) => {
				if (res.status_code == 201) {
					this.newChapterId = null
					this.oldChapterId = null
					this.hideModal()
				}
			})
		},
	},
}
</script>
