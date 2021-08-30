<template>
  <div>
    <!-- view matrials modal -->
    <b-modal id="view-matrials" centered hide-header hide-footer size="md">
      <div class="sm_padding">
        <div class="view_matrial_modal">
          <div class="modal_title">
            <Title bold medium>
              {{ $t('members.courses-which-student-complete') }}
            </Title>
          </div>
          <template v-if="completedCourses">
            <div class="matrial_box"
                v-for="(i, index) in completedCourses"
                :key="i.id">
              <b-row>
                <b-col cols="1" class="p-0">
                  <div class="matrial_num">
                      <span>{{ index + 1 }}</span>
                  </div>
                </b-col>
                <b-col cols="11">
                  <div class="matrial_content">
                  <Title extra_small>{{
                        i.course && i.course.name ? i.course.name : $t('members.not-exist')
                      }}</Title>
                  </div>
                </b-col>
              </b-row>
            </div>
          </template>
            <p class="modal_title_text" v-else> {{ $t('members.no-courses') }}</p>
          <div class="modal_title">
            <Title bold medium>
              {{ $t('members.courses-in-progress') }}
            </Title>
          </div>

            <academi-scroll :ops="scrollerOptions">
              <div class="pending_courses">
                <template v-if="userMatrials.length > 0">
                  <div
                    class="matrial_box"
                    v-for="(i, index) in userMatrials"
                    :key="i.id"
                  >
                  <b-row class="align-items-center">
                    <b-col cols="1" class="p-0">
                      <div class="matrial_num">
                        <span>{{ index + 1 }}</span>
                      </div>
                    </b-col>
                    <b-col cols="7">
                      <div class="matrial_content">
                        <Title extra_small>{{
                          i.course && i.course.name ? i.course.name : $t('members.not-exist')
                        }}</Title>
                      </div>
                    </b-col>
                    <b-col cols="4">
                      <b-button
                        v-b-modal.confirm-unsubscribe
                        @click="
                          (course_id = i.course_id), $bvModal.hide('view-matrials')
                        "
                        class="unsubscribe_btn"
                        >
                          {{ $t('members.unsubscribe-button') }}
                        </b-button
                      >
                    </b-col>
                  </b-row>
                </div>
                </template>
                <p class="modal_title_text" v-else> {{ $t('members.no-courses') }}</p>
              </div>
            </academi-scroll>
        </div>
      </div>
    </b-modal>

    <b-modal
      id="confirm-unsubscribe"
      centered
      hide-header
      hide-footer
      size="md"
    >
      <div class="add_cat_modal">
        <Title center gray class="mb-4"
          >
          {{ $t('members.are-you-sure-you-want-to-unsubscribe-student') }}
          </Title
        >
        <b-row class="btns">
          <b-col sm="6">
            <Button
              type="submit"
              rounded_radius
              block
              bg_blue
              @click.native="unSubscribe"
              >
              {{ $t('members.confirm-button') }}
              </Button
            >
          </b-col>
          <b-col sm="6">
            <Button
              rounded_radius
              block
              @click.native="$bvModal.hide('confirm-unsubscribe')"
              > {{ $t('members.cancle-button') }}
            </Button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
	props: {
		id: Number,
		userMatrials: Array,
		completedCourses: Array
	},
	data() {
		return {
			user_id: '',
			course_id: '',
			form: {
				user_id: '',
				course_id: ''
			},

			scrollerOptions: {
				vuescroll: {
					mode: 'native',
					sizeStrategy: 'percent',
					detectResize: true,
					/** Enable locking
           * to the main axis
           * if user moves only
           * slightly on one of them at start
           **/
					locking: true,
					preventDefault: true,
				},
				scrollPanel: {
					initialScrollY: false,
					initialScrollX: false,
					scrollingX: false,
					scrollingY: true,
					speed: 300,
					easing: undefined,
					verticalNativeBarPos: 'left'
				},
				rail: {
					background: 'var(--primary)',
					opacity: 0.1,
					size: '6px',
					specifyBorderRadius: false,
					gutterOfEnds: null,
					gutterOfSide: 'auto',
					keepShow: false
				},
				bar: {
					showDelay: 500,
					onlyShowBarOnScroll: true,
					keepShow: true,
					background: 'var(--primary)',
					opacity: 1,
					hoverStyle: false,
					specifyBorderRadius: false,
					minSize: 0,
					size: '6px',
					disable: false
				}
			},
		}
	},
	methods: {
		async unSubscribe() {
			this.form.user_id = this.id
			this.form.course_id = this.course_id
			await this.$Api.subscriptions.unSubscribe(this.form).then(res => {
				if (res.data.status) {
					this.$bvModal.hide('confirm-unsubscribe')
				}
			})
		}
	},
	created() {
		if (process.client) {
			const hasVBar = document.getElementsByClassName('hasVBar')
			const rail = document.getElementsByClassName('__rail-is-vertical')
			const hzRail = document.getElementsByClassName('__rail-is-horizontal')
			if (hasVBar) {
				if (rail[0]) {
					rail[0].style.right = 'auto'
					rail[0].style.left = 0
				}
				if (hzRail[0]) {
					hzRail[0].removeAttribute('style')
				}
			}
		}
	}
}
</script>

<style>
  .modal_title_text {
    color: #333333;
    font-size: 18px;
  }
</style>
