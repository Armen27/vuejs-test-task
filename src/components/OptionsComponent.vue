<template>
  <b-row class="mb-3">
    <b-button class="mr-1" variant="success" @click="refreshNumbers">Refresh numbers
      <b-icon-arrow-repeat></b-icon-arrow-repeat>
    </b-button>
    <b-button class="ml-1" variant="info" :disabled="disabled" @click="restoreNumbers">Restore
      <img :src="this.svg" class="restoreButton" alt="..." />
    </b-button>
  </b-row>
</template>

<script>
    import {
      BIconArrowRepeat,
    } from 'bootstrap-vue';
    import { mapActions, mapState } from 'vuex';

    export default {
        name: "OptionsComponent",
        components: {
            BIconArrowRepeat,
        },
        data() {
            return {
                disabled: true,
                svg: require('../assets/recycle.svg'),
            }
        },
        computed: {
            ...mapActions(["restoreListItemsA", "refreshListItemsA"]),
           ... mapState(['counterList']),
         },
        watch: {
            counterList(newValue) {
                this.disabled = !!newValue.length;
            },
        },
        methods: {
            refreshNumbers: function() {
               this.$store.dispatch("refreshListItemsA");
            },
            restoreNumbers: function () {
                this.$store.dispatch("restoreListItemsA");
            }
        }
    }
</script>

<style scoped>
  .restoreButton {
    width: 22px;
    margin-left: 4px;
  }
</style>