<template>
  <!-- block member modal -->
  <b-modal id="block-member" centered hide-header hide-footer size="lg">
    <div class="sm_padding">
      <div class="block_member_modal">
        <div class="member_info">
          <div class="img_box rowunded_small_img">
            <b-img
              v-if="singleStudent && singleStudent.image"
              :src="singleStudent.image"
              fluid
            ></b-img>
            <b-avatar v-else></b-avatar>
          </div>
          <div class="content_box">
            <Title small>{{ singleStudent.name }}</Title>
            <Title gray extra_small>{{$t('members.member-joining-date')}} : 15-03-2020</Title>
          </div>
        </div>
        <div class="contact_info">
          <b-row class="align-items-center">
            <b-col md="4">
              <Title small>
                {{ $t('members.concat-info') }}
              </Title>
            </b-col>
            <b-col md="8">
              <ul class="list-unstyled">
                <li>
                  <i class="fa fa-envelope"></i> {{ singleStudent.email }}
                </li>
                <li><i class="fa fa-phone"></i> {{ singleStudent.phone }}</li>
              </ul>
            </b-col>
          </b-row>
        </div>
        <div class="btns text-center">
          <Button rounded_radius bg_red @click.native="blockStudent">
            {{ $t('members.ban-membership') }}
           </Button>
          <Button rounded_radius @click.native="$bvModal.hide('block-member')">
            {{ $t('members.cancle-button') }}
          </Button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
	props: ['id', 'singleStudent', 'getStudents'],
	methods: {
		async blockStudent() {
			await this.$Api.students.blockStudent(this.id).then(res => {
				if (res.status === 200) {
					// this.$toast.fire({
					//   icon: "success",
					//   title: res.statusText
					// });
					this.$bvModal.hide('block-member')
					this.getStudents()
				}
			})
		},
	}
}
</script>
