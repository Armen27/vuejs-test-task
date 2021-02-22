<template>
  <b-row class="mb-1">
    <b-button class="p-2 mr-2 font-weight-bold count-badge" variant="primary">{{ count }}</b-button>
    <b-button class="p-1 mr-2 font-weight-bold" @click="incrementNumber(index)">
      <b-icon-plus></b-icon-plus>
    </b-button>
    <b-button class="p-1 mr-2 font-weight-bold" :disabled="!count" variant="info"
              @click="decrementNumber(index)">
      <b-icon-dash></b-icon-dash>
    </b-button>
    <b-button class="p-1 mr-2 font-weight-bold"  variant="danger" @click="removeRow(index)">
      <b-icon-trash></b-icon-trash>
    </b-button>
  </b-row>
</template>

<script>
    import { BIconPlus, BIconDash, BIconTrash } from 'bootstrap-vue';
    import { mapActions } from 'vuex';
    export default {
        name: "CountRow",
        components: {
            BIconPlus,
            BIconDash,
            BIconTrash,
        },
        props: {
            index: {
                type: Number,
                required: true,
                default: 0,
            },
            count: {
                type: Number,
                required: true,
                default: 0,
            },
        },
        computed: mapActions([
          "incrementItem",
          "decrementItemA",
          "removeCurrentListA"
        ]),
        methods: {
            incrementNumber: function(index) {
                this.$store.dispatch("incrementItem", index);
            },
            decrementNumber: function (index) {
                this.$store.dispatch("decrementItemA", index);
            },
            removeRow: function (index) {
                this.$store.dispatch("removeCurrentListA", index);
            }
        }
    }
</script>

<style scoped>
  button {
    width: 35px;
  }
</style>