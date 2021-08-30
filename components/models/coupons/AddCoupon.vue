<template>
  <!-- add Coupon modal -->
  <b-modal id="add-coupon" centered hide-header hide-footer size="md">
    <div class="sm_padding">
      <div class="add_cat_modal">
        <b-form @submit.prevent="addCoupon">
          <AppInput
            rounded_radius
            type="text"
            v-model="newCoupon.name"
            :title="newCoupon.name"
          >
            {{ $t("coupons.coupon-name") }}
          </AppInput>
          <AppInput
            rounded_radius
            type="text"
            v-model="newCoupon.code"
            :title="newCoupon.code"
            :state="newCoupon.code.length == 6 || newCoupon.code == ''"
            :invalidFeedback="'Coupon must be 6 characters.'"
          >
            {{ $t("coupons.coupon-code") }}
          </AppInput>
          <b-form-group>
            <label
              class="form__label"
              :class="newCoupon.discount_type == '' ? '' : 'has-data'"
              for="type"
            >
              {{ $t("coupons.coupon-type") }}
            </label>
            <b-form-select v-model="newCoupon.discount_type">
              <b-form-select-option
                v-for="item in coupons_types"
                :key="item.name"
                :value="item.type"
                >{{ item.name }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
          <AppInput
            rounded_radius
            type="number"
            v-model="newCoupon.discount_amount"
            :title="newCoupon.discount_amount"
            :state="
              newCoupon.discount_amount > 101 &&
              newCoupon.discount_type == 'percentage'
                ? false
                : true
            "
            :invalidFeedback="'Discount must be less than 100%.'"
          >
            {{ $t("coupons.discount-value") }}
          </AppInput>
          <AppInput
            v-if="newCoupon.discount_type == 'percentage'"
            rounded_radius
            type="number"
            v-model="newCoupon.max_discount_amount"
            :title="newCoupon.max_discount_amount"
          >
            {{ $t("coupons.max-discount") }}
          </AppInput>
          <AppInput
            rounded_radius
            type="number"
            v-model="newCoupon.max_uses"
            :title="newCoupon.max_uses"
          >
            {{ $t("coupons.quantity") }}
          </AppInput>
          <b-form-group>
            <b-form-datepicker
              id="start-date"
              v-model="newCoupon.starts_at"
              :placeholder="$t('coupons.discount-start')"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group>
            <b-form-datepicker
              :min="newCoupon.starts_at"
              id="end-date"
              v-model="newCoupon.expires_at"
              :placeholder="$t('coupons.discount-end')"
            ></b-form-datepicker>
          </b-form-group>
          <b-row class="btns">
            <b-col sm="6">
              <Button
                :disabled="disableButton"
                type="submit"
                rounded_radius
                block
                bg_blue
              >
                {{ $t("coupons.add-new-coupon") }}
              </Button>
            </b-col>
            <b-col sm="6">
              <Button rounded_radius block @click.native="reset">
                {{ $t("coupons.cancle-button") }}
              </Button>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
	props: {},
	data() {
		return {
			disableButton: false,
			coupons_types: [
				{ name: this.$t('coupons.percentage'), type: 'percentage' },
				{ name: this.$t('coupons.fixed-value'), type: 'fixed price' },
			],

			newCoupon: {
				name: '',
				code: '',
				discount_type: 'fixed price',
				discount_amount: '',
				max_discount_amount: null,
				max_uses: '',
				starts_at: '',
				expires_at: '',
			},
		}
	},
	methods: {
		// add Coupon
		async addCoupon() {
			this.disableButton = true
			await this.$Api.coupons
				.addNewCoupon(this.newCoupon)
				.then((res) => {
					if (res.status == 201) {
						this.$toast.fire({
							icon: 'success',
							title: res.statusText,
						})
						this.$emit('couponCreated')
						this.reset()
					}
					this.disableButton = false
				})
				.catch(() => {
					this.disableButton = false
				})
		},
		// reset
		reset() {
			this.newCoupon.name = {
				name: '',
				code: '',
				discount_type: 'fixed price',
				discount_amount: '',
				max_discount_amount: '',
				max_uses: '',
				starts_at: '',
				expires_at: '',
			}
			this.$bvModal.hide('add-coupon')
		},
	},
}
</script>
