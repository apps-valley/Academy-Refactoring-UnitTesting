<template>
  <tr style="height: 100%; width: 100%">
    <!-- <td scope="row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgba(0, 0, 0, 1); transform: ; -ms-filter: "
      >
        <path
          d="M21 15.344L18.879 17.465 15.707 14.293 14.293 15.707 17.465 18.879 15.344 21 21 21zM3 8.656L5.121 6.535 8.293 9.707 9.707 8.293 6.535 5.121 8.656 3 3 3zM21 3L15.344 3 17.465 5.121 14.293 8.293 15.707 9.707 18.879 6.535 21 8.656zM3 21L8.656 21 6.535 18.879 9.707 15.707 8.293 14.293 5.121 17.465 3 15.344z"
        ></path>
      </svg>
    </td> -->
    <td style="height: 100%; width: 50%">{{ lesson.title }}</td>
    <td style="height: 100%; width: 25%">
      {{
        lesson.is_free == 1
          ? $t("content-manegment.not-free-label")
          : $t("content-manegment.free-label")
      }}
    </td>
    <td style="height: 100%; width: 15%">
      {{
        lesson.content_type
          ? lesson.content_type
          : $t("content-manegment.not-exist")
      }}
    </td>
    <td style="height: 100%; width: 10%">
      <div class="table-actions">
        <button
          v-if="lesson.content_type !== 'quiz'"
          @click.prevent="showActionLessonModel(lesson)"
          v-b-modal.add-new-lesson
        >
          <svg
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
        <!-- <button
          v-else
          @click.prevent="EditQuizModel(lesson)"
          v-b-modal.add-new-quiz
        >
          <svg
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
        </button> -->
        <button @click.prevent="deleteLesson(lesson)" class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.312"
            height="21.221"
            viewBox="0 0 17.312 21.221"
          >
            <g
              id="Iconly_Light_Delete"
              data-name="Iconly/Light/Delete"
              transform="translate(0.16 0.15)"
            >
              <g id="bin">
                <path
                  id="Path_62122"
                  data-name="Path 62122"
                  d="M222.954,154.7a.556.556,0,0,0-.556.556v10.514a.556.556,0,1,0,1.113,0V155.259A.556.556,0,0,0,222.954,154.7Zm0,0"
                  transform="translate(-211.592 -148.93)"
                  fill="#f04"
                  stroke="#f04"
                  stroke-width="0.3"
                />
                <path
                  id="Path_62123"
                  data-name="Path 62123"
                  d="M104.954,154.7a.556.556,0,0,0-.556.556v10.514a.556.556,0,1,0,1.113,0V155.259A.556.556,0,0,0,104.954,154.7Zm0,0"
                  transform="translate(-99.325 -148.93)"
                  fill="#f04"
                  stroke="#f04"
                  stroke-width="0.3"
                />
                <path
                  id="Path_62124"
                  data-name="Path 62124"
                  d="M1.388,6.227V18.3a2.7,2.7,0,0,0,.719,1.864,2.413,2.413,0,0,0,1.751.757h9.27a2.412,2.412,0,0,0,1.751-.757A2.7,2.7,0,0,0,15.6,18.3V6.227a1.872,1.872,0,0,0-.48-3.681H12.608V1.934A1.925,1.925,0,0,0,10.668,0H6.317a1.925,1.925,0,0,0-1.94,1.935v.612H1.868a1.872,1.872,0,0,0-.48,3.681ZM13.128,19.94H3.858A1.552,1.552,0,0,1,2.368,18.3V6.27H14.617V18.3a1.552,1.552,0,0,1-1.489,1.641ZM5.357,1.934a.944.944,0,0,1,.96-.955h4.351a.944.944,0,0,1,.96.955v.612H5.357ZM1.868,3.526H15.117a.882.882,0,0,1,0,1.764H1.868a.882.882,0,1,1,0-1.764Zm0,0"
                  transform="translate(0.003 0.002)"
                  fill="#f04"
                  stroke="#f04"
                  stroke-width="0.3"
                />
                <path
                  id="Path_62125"
                  data-name="Path 62125"
                  d="M163.954,154.7a.556.556,0,0,0-.556.556v10.514a.556.556,0,1,0,1.113,0V155.259A.556.556,0,0,0,163.954,154.7Zm0,0"
                  transform="translate(-155.458 -148.93)"
                  fill="#f04"
                  stroke="#f04"
                  stroke-width="0.3"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
	props: ['lesson'],
	methods: {
		// show Action Model
		showActionLessonModel(event) {
			this.$emit('get-signle-lesson', event)
			this.$emit('update-lesson', true)
		},
		EditQuizModel(event) {
			this.$emit('get-quiz-info', event)
			this.$emit('update-quiz-toggle', true)
		},
		deleteLesson(lesson) {
			// let id = event.id;
			this.$swal
				.fire({
					icon: 'warning',
					html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"style="margin: 25px 0;"
                    width="54" height="68" viewBox="0 0 54 68"><defs><linearGradient id="a" y1="1" x2="1.35" y2="-0.103"
                    gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f04"/><stop offset="0.414" stop-color="#ff353b"/>
                    <stop offset="1" stop-color="#ff7f2e"/></linearGradient></defs><g transform="translate(-234 -55)">
                    <path d="M41.006,68H13.061a6.772,6.772,0,0,1-6.75-6.324L3.375,20.4h47.25L47.756,61.676A6.771,6.771,0,0,1,41.021,68ZM1.688,13.6A1.694,1.694,0,0,1,0,11.9V8.5A1.693,1.693,0,0,1,1.688,6.8H16.875V3.4A3.387,3.387,0,0,1,20.25,0h13.5a3.387,3.387,0,0,1,3.375,3.4V6.8H52.313A1.693,1.693,0,0,1,54,8.5v3.4a1.694,1.694,0,0,1-1.687,1.7Z" transform="translate(234 55)" fill="url(#a)"/><path d="M21.369,17.345a1.64,1.64,0,0,1,0,2.38l-1.789,1.8a1.612,1.612,0,0,1-2.363,0l-6.277-6.29-6.278,6.29a1.612,1.612,0,0,1-2.362,0l-1.789-1.8a1.64,1.64,0,0,1,0-2.38l6.244-6.324L.511,4.7a1.64,1.64,0,0,1,0-2.38L2.3.515a1.612,1.612,0,0,1,2.362,0l6.278,6.29L17.218.515a1.612,1.612,0,0,1,2.363,0l1.789,1.8a1.64,1.64,0,0,1,0,2.38l-6.244,6.324Z"
                    transform="translate(250.06 88.179)" fill="#fff"/></g></svg>
                    <br />
                   <strong>${
	lesson.content_type == 'quiz'
		? this.$t(
			'content-manegment.are-you-sure-you-want-to-delete-quiz'
		)
		: this.$t(
			'content-manegment.are-you-sure-you-want-to-delete-lesson'
		)
} `,
					showCancelButton: true,
					focusConfirm: false,
					cancelButtonText: this.$t('cancel-button-text'),
					confirmButtonText: this.$t('confirm-button-text'),
				})
				.then((result) => {
					if (result.value) {
						if (lesson.content_type !== 'quiz') {
							this.$store
								.dispatch('course/deleteLesson', lesson)
								.then((res) => {})
						} else {
							this.$store
								.dispatch('course/deleteQuiz', lesson)
								.then((res) => {})
						}

						// this.$refs["my-modal"].hide();
					}
				})
		},
	},
}
</script>
