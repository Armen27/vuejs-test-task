<template>
  <b-row class="mb-3 cartContainer">
    <b-badge class="mr-2 p-2 font-weight-bold" pill variant="light">
      <h6><b-icon-cart4/></h6>
    </b-badge>
    <b-badge class="count" pill variant="success">
      {{ itemsCount | filterCounterList }}
    </b-badge>
   <h6><b-badge class="ml-2 p-2 font-weight-bold" pill variant="light">Items</b-badge></h6>
  </b-row>
</template>

<script>
    import { BIconCart4 } from 'bootstrap-vue';
    import { mapState } from 'vuex';

    export default {
        name: "CartComponent",
        components: {
          BIconCart4,
        },
        data() {
            return {
                itemsCount : 0,
            }
        },
        computed: mapState([
            'counterList'
        ]),
        watch: {
            counterList(newValue) {
                this.itemsCount = newValue
            },
        },
        created() {
            this.itemsCount = this.counterList;
        },
      filters: {
          filterCounterList(value) {
            if (!value.length) return 0;
            return  value.reduce((prev, cur) => prev + cur.count, 0);
          }
      }
    }
</script>

<style scoped>
  .cartContainer {
    display: flex;
    align-items: center;
  }
  .count {
    height: 25px;
    text-align: center;
    padding: 7px 23px;
  }
</style>