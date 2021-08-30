<template>
  <!-- add-new-quiz -->
  <b-modal
    id="add-new-quiz"
    centered
    hide-header
    hide-footer
    size="md"
    @hide="hideModal"
    ref="my-modal"
  >
    <div class="sm_padding">
      <div class="add_member_modal">
        <form @submit.prevent="addNewQuizTopic">
          <AppInput
            rounded_radius
            type="text"
            v-model="addNewQuiz.title"
            :title="addNewQuiz.title"
          >
            {{ $t("content-manegment.quiz-name-label") }}
          </AppInput>

          <b-form-group v-if="getCourseContent">
            <label
              class="form__label"
              :class="addNewQuiz.chapter_id === '' ? '' : 'has-data'"
              for="university"
              >{{ $t("content-manegment.choose-chapter-label") }}</label
            >
            <img
              src="@/assets/images/icons/Arrow -down.svg"
              alt=""
              class="arrow-down"
            />
            <b-form-select v-model="addNewQuiz.chapter_id">
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
            v-model="addNewQuiz.pass_mark"
            :title="addNewQuiz.pass_mark"
          >
            {{ $t("content-manegment.passed-mark") }}
          </AppInput>

          <AppInput
            rounded_radius
            type="number"
            v-model="addNewQuiz.timer"
            :title="addNewQuiz.timer"
          >
            {{ $t("content-manegment.quiz-time") }}
          </AppInput>

          <b-row class="btns mt-3">
            <b-col lg="6" sm="12">
              <Button rounded_radius bg_blue class="w-100" type="submit">
                {{
                  this.quizToggle
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
                @click.native="$bvModal.hide('add-new-quiz')"
                >{{ $t("content-manegment.cancle-button") }}</Button
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
	props: ['course_id', 'quizToggle', 'singleQuiz'],
	data() {
		return {
			newChapterId: null,
			oldChapterId: null,
			addNewQuiz: {
				chapter_id: '',
				title: '',
				pass_mark: '',
				timer: '',
			},
		}
	},
	watch: {
		singleQuiz() {
			let quiz = { ...this.singleQuiz }
			this.addNewQuiz = {
				chapter_id: quiz.chapter_id,
				title: quiz.title,
				pass_mark: quiz.pass_mark,
				timer: quiz.timer,
			}
			this.oldChapterId = this.addNewQuiz.chapter_id
		},
		addNewQuiz() {
			this.oldChapterId = this.addNewQuiz.chapter_id
		},
	},
	computed: {
		...mapGetters({ getCourseContent: 'course/getCourseContent' }),
	},
	methods: {
		hideModal() {
			this.$emit('update-quiz-toggle', false)
			if (!this.quizToggle) {
				this.addNewQuiz = {
					chapter_id: '',
					title: '',
					pass_mark: '',
					timer: '',
				}
			}
			this.$refs['my-modal'].hide()
		},
		addNewQuizTopic() {
			let requestType
			if (this.quizToggle) {
				requestType = 'course/updateQuizTopic'
				this.addNewQuiz.course_id = this.$route.params.id
				this.newChapterId =
          this.oldChapterId == this.addNewQuiz.chapter_id
          	? null
          	: this.addNewQuiz.chapter_id
				this.addNewQuiz = {
					...this.addNewQuiz,
					content_id: this.singleQuiz.content_id,
					id: this.singleQuiz.id,
					newChapterId: this.newChapterId,
					oldChapterId: this.oldChapterId,
				}
			} else {
				requestType = 'course/addQuizTopic'
			}
			// return;
			this.$store.dispatch(requestType, this.addNewQuiz).then((res) => {
				if (res.status_code == 201) {
					this.hideModal()
					this.newChapterId = null
					this.oldChapterId = null
				}
				// this.$bvModal.hide("add-new-quiz");
			})
		},
	},
}
</script>
