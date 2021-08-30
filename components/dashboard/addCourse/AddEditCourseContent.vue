<template>
  <div>
    <div class="top-content mb-5">
      <div class="left-side" v-if="getCourseContent">
        <button type="button" v-b-modal.add-new-unit>+ {{ $t('content-manegment.add-new-chapter') }}</button>
        <button
          v-b-modal.add-new-lesson
          :disabled="!getCourseContent.chapters"
        >
          + {{ $t('content-manegment.add-new-lesson') }}
        </button>
        <!-- <button
          v-b-modal.add-new-quiz
          :disabled="getCourseContent.chapters.length < 0"
        >
          + اضافة اختبار
        </button> -->
      </div>
    </div>

    <template v-if="getCourseContent && getCourseContent.chapters">
      <div
        class="middle-content shadow"
        v-for="(chapter, index) in getCourseContent.chapters"
        :key="chapter.id"
      >
        <div class="right-side">
          <p class="right-side-content">
            <span class="num">{{ index + 1 }}</span>
            <span class="title">{{ chapter.title }}</span>
            <button
              @click.prevent="showEditChapterModel(chapter)"
              v-b-modal.add-new-unit
            >
              <svg
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="18.653"
                height="18.579"
                viewBox="0 0 18.653 18.579"
              >
                <g
                  id="Iconly_Light_Edit"
                  data-name="Iconly/Light/Edit"
                  transform="translate(-3.847 -3.727)"
                >
                  <g id="Edit" transform="translate(4.604 4.604)">
                    <path
                      id="Stroke_1"
                      data-name="Stroke 1"
                      d="M0,.5H6.908"
                      transform="translate(10.237 16.452)"
                      fill="none"
                      stroke="#3474ca"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    />
                    <path
                      id="Stroke_3"
                      data-name="Stroke 3"
                      d="M9.322.764A2.109,2.109,0,0,1,12.429.6l1.506,1.181a2.108,2.108,0,0,1,.581,3.056L5.536,16.292a1.6,1.6,0,0,1-1.246.615l-3.463.044L.042,13.577a1.61,1.61,0,0,1,.3-1.356Z"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#3474ca"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    />
                    <path
                      id="Stroke_5"
                      data-name="Stroke 5"
                      d="M0,0,5.194,4.071"
                      transform="translate(7.64 2.91)"
                      fill="none"
                      stroke="#3474ca"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </p>
        </div>
        <table
          class="table mt-4 mb-5 table-responsive"
          style="height: 100%; width: 100%"
        >
          <thead>
            <tr>
              <!-- <th scope="col">الترتيب</th> -->
              <th scope="col">
                {{ $t('content-manegment.lesson-name-label') }}
              </th>
              <th scope="col">
                {{ $t('content-manegment.subsciption-label') }}
              </th>
              <th scope="col">
                  {{ $t('content-manegment.lesson-type-label') }}
              </th>
              <th scope="col">{{ $t('content-manegment.settings-label') }}</th>
            </tr>
          </thead>
          <!-- <draggable
            v-if="item.lessons.length > 0"
            v-model="Tablelist"
            tag="tbody"
            @change="log"
          > -->

          <template v-if="chapter.lessons.length > 0">
            <LessonItem
              v-for="lesson in chapter.lessons"
              :key="lesson.id"
              :lesson="lesson"
              @get-signle-lesson="singleLesson = $event"
              @update-lesson="toggle = $event"
              @get-quiz-info="singleQuiz = $event"
              @update-quiz-toggle="quizToggle = $event"
            />
          </template>
          <h5 class="p-4" v-else>
            {{ $t('content-manegment.no-lessons') }}
          </h5>

          <!-- </draggable> -->
        </table>
      </div>
    </template>

    <div class="bottom-content">
      <!--  -->
    </div>
    <AddEditChapterModal
      :course_id="courseid"
      :singleChapter="singleChapter"
      :chapterToggle="chapterToggle"
      @update-chapter-toggle="chapterToggle = $event"
    />
    <AddEditLessonModal
      :course_id="courseid"
      :singleLesson="singleLesson"
      :toggle="toggle"
      @update-lesson="toggle = $event"
    />
    <!-- <AddEditQuizModal
      :course_id="courseid"
      :singleQuiz="singleQuiz"
      :quizToggle="quizToggle"
      @update-quiz-toggle="quizToggle = $event"
    /> -->

  </div>
</template>

<script>
// import draggable from "vuedraggable";
import { mapGetters } from 'vuex'

export default {
	props: ['courseid'],
	data() {
		return {
			singleChapter: null,
			chapterToggle: false,
			singleLesson: {},
			singleQuiz: null,
			quizToggle: false,
			toggle: false,
			singleChapter: {},
			Tablelist: [],
			dragging: false,
		}
	},
	computed: {
		...mapGetters({ getCourseContent: 'course/getCourseContent' }),
	},
	methods: {
		showEditChapterModel(event) {
			this.singleChapter = event
			this.chapterToggle = true
		},
		log(event) {
			console.log(event)
		},
	},
	created() {
		this.$store.dispatch('course/getCourseContent', this.courseid).then((res) => {})
	},
}
</script>

<style lang="scss">
.form-group {
  position: relative;
  .arrow-down {
    position: absolute;
    top: 28px;
    left: 20px;
  }
  .custom-select {
    background: none;
  }
  select {
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
  textarea {
    resize: none;
  }
}

.submit-radio {
  .title {
    font-size: 16px;
    color: #141821;
  }
  .checkbox-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .checkbox {
    display: block;
    padding: 0 0 0 20px;
    margin: 0 0 0 40px;
    position: relative;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .checkbox-text {
    color: #141821;
    font-size: 14px;
    margin-right: 1.5rem;
  }

  .checkbox input {
    display: none;
  }

  .checkmark {
    margin-top: 8px;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #acbbd0;
  }

  .checkbox:hover input ~ .checkmark,
  .checkbox input:checked ~ .checkmark {
    background-color: var(--gradient-bg);
    border-color: var(--gradient-bg);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox .checkmark:after {
    top: 0.3px;
    right: 0.2px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #00d0d3;
    border: 3px solid #fff;
  }
}
</style>
