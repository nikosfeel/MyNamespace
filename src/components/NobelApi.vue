<template>
  <div class="container-fluid mt-3">
    <table class="table table-danger table-hover">
      <thead>
        <tr>
          <th>
            <input
              class="form-control"
              placeholder="Search Category"
              type="text"
              v-model="searchCategory"
            />
          </th>
          <th>
            <input
              class="form-control"
              placeholder="Search Laureate"
              type="text"
              v-model="searchLaureates"
            />
          </th>
          <th>
            <input
              class="form-control"
              type="text"
              disabled
              placeholder="No action possible"
            />
          </th>
          <th>
            <input
              class="form-control"
              placeholder="Search Year"
              type="text"
              v-model="searchYear"
            />
          </th>
        </tr>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Laureates</th>
          <th scope="col">Motivation</th>
          <th scope="col">Year</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prize in filtered" :key="prize.id">
          <th class="text-capitalize" scope="row">
            <h3>{{ prize.category }}</h3>
          </th>
          <td>
            <div v-for="(laureate, index1) in prize.laureates" :key="index1">
              <h5>{{ laureate.firstname }} {{ laureate.surname }}</h5>
            </div>
          </td>
          <td style="width: 50rem">
            <div v-for="(laureate, index2) in prize.laureates" :key="index2">
              {{ laureate.motivation }}
            </div>
          </td>
          <td>
            <h3>{{ prize.year }}</h3>
          </td>
          <td>
            <button class="btn btn-danger" @click="removePrize(prize.id)" title="Delete Entry">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCategory: "",
      searchLaureates: "",
      searchYear: "",
      prizes: [],
    };
  },
  async mounted() {
    await this.getNobels();
    this.prizes = this.$store.state.nobels.prizes.filter(
      (x) => x.year >= "2000"
    );
  },
  computed: {
    filtered() {
      return this.prizes
        .filter((x) => x.year.includes(this.searchYear.trim()))
        .filter((x) =>
          x.category
            .toLowerCase()
            .includes(this.searchCategory.toLowerCase().trim())
        )
        .filter(
          (x) =>
            x.laureates.filter((y) =>
              (y.firstname + " " + y.surname)
                .toLowerCase()
                .includes(this.searchLaureates.toLowerCase().trim())
            ).length > 0
        );
    },
  },

  methods: {
    async getNobels() {
      await this.$store.dispatch("getNobels");
    },
    removePrize(index) {
      console.log(index)
      this.prizes.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.container-fluid {
  width: 85%;
}
table {
  border-radius: 25px !important;
  box-shadow: rgba(0, 0, 0, 0.82) 2px 12px 40px;
}
th,
td {
  text-align: center;
  vertical-align: middle;
}
</style>