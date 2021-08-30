<template>
  <div>
    <div class="table_search">
      <!-- <b-row>
        <b-col lg="3" class="my-1">
          <b-form-group>
            <b-input-group size="sm">
              <b-form-input
                v-model="search_input"
                type="search"
                placeholder="Search By Name"
                @input="$emit('searchFn', $event)"
              ></b-form-input>

              <b-input-group-append>
                <b-button :disabled="!search_input" @click="search_input = ''"
                  >Clear</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row> -->
    </div>
    <div style="overflow-x:auto;">
    <b-table borderless :items="items" :fields="fields">
      <template
        v-for="dataTableSlot in Object.keys($scopedSlots)"
        v-slot:[dataTableSlot]="slotScope"
      >
        <slot :name="dataTableSlot" v-bind="slotScope" />
      </template>
    </b-table>
    </div>
    <div v-if="pagination">
      <!-- <b-col lg="6" class="my-1">
        Showing page number
        {{ items.length ? current_page : 0 }}
      </b-col> -->

      <div class="text-center">
        <b-pagination
          v-if="items.length > 5"
          v-model="current_page"
          :total-rows="pagination.total"
          :per-page="per_page"
          :last-page="last_page"
          pills
          align="center"
          @input="
            $emit('page-changed', {
              current_page: current_page,
              per_page: per_page,
              last_page: last_page
            })
          "
          class="my-3 heavy-rain-gradient"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: null
		},
		fields: {
			type: Array,
			default: null
		},
		pagination: {
			type: Object,
			default: () => {}
		}
	},

	data() {
		return {
			total: 1,
			current_page: 1,
			per_page: 10,
			last_page: '',
			search_input: ''
		}
	}
}
</script>

<style scoped>
.table {
  font-size: 12px;
}
table {
  border-collapse: separate;
  border-spacing: 0 20px;
}
</style>
