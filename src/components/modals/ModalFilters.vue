<template>
  <div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button @click="dismiss({success: true})">
          <ion-icon name="close" slot="icon-only"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Filters</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-list>
      <ion-list-header>Filter by:</ion-list-header>
            <ion-item>
              <ion-label>Sort by</ion-label>
              <ion-select  placeholder="Select One" @ionChange="onChange($event)">
                <ion-select-option value="Newest" >Newest</ion-select-option>
                <ion-select-option value="Oldest" >Oldest</ion-select-option>
              </ion-select>
          </ion-item>
      </ion-list>
      <ion-button
        expand="block"
        color="danger"
        @click="$ionic.modalController.dismiss({success: true , sortbySelection: filterData.sortBy})"
      >Close</ion-button>
    </ion-content>
  </div>
</template>
<script>
export default {
  props: {
    userData: {
      type: Number
    }
  },
  data() {
    return {
      filterData: {
        sortBy: "",
      }
    };
  },
  methods: {
    dismiss: async function() {
      await this.$ionic.modalController.dismiss({success: true, sortbySelection: filterData.sortBy});
    },
    onChange($event){
      console.log($event);
      console.log($event.target.value);
      this.filterData.sortBy=$event.target.value
    }
  }
};
</script>
