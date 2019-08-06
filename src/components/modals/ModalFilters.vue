<template>
  <div class="ion-page">
  <ion-header>
    <ion-toolbar color="light">
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
              <ion-select required  v-bind:placeholder="sortBy" @ionChange="onChange($event)">
                <ion-select-option value="Newest" >Newest</ion-select-option>
                <ion-select-option value="Oldest" >Oldest</ion-select-option>
              </ion-select>
          </ion-item>
          <ion-item v-if="false">
              <ion-label position="stacked">Author</ion-label>
              <ion-select required  v-bind:placeholder="author" @ionChange="onChangeAuthor($event)">
                <ion-select-option v-for='(currentAuthor, authorIndex) in allAuthors' :key="authorIndex" :value="currentAuthor.authorName" >{{currentAuthor.authorName}}</ion-select-option>
              </ion-select>
          </ion-item>
      </ion-list>
      <ion-button
        expand="block"
        color="danger"
        @click="$ionic.modalController.dismiss({success: true , sortbySelection: sortBy, authorSelection: author})"
      >Close</ion-button>
    </ion-content>
  </div>
</template>
<script>
import { mapActions,mapState, mapGetters } from 'vuex'
export default {
  props: {
    sortBy: {
      type: String
    },
    author: {
      type: String
    },
  },
  data() {
    return {
      filterData: {
        sortBy: "",
        author: "",
      }
    };
  },
  computed: {
    ...mapState([
      'allAuthors'
    ])
  },
  methods: {
    ...mapActions([
      'refreshAuthors'
    ]),
    dismiss: async function() {
      await this.$ionic.modalController.dismiss({success: true, sortbySelection: this.sortBy, authorSelection: this.author});
    },
    onChangeAuthor($event){
      console.log($event);
      console.log($event.target.value);
      this.formData.author = $event.target.value;
    },
    onChange($event){
      console.log($event);
      console.log($event.target.value);
      this.sortBy = $event.target.value;
      this.filterData.sortBy=$event.target.value;
    }
  },
  created: function () {
    if(this.allAuthors.length <1)
    {
      this.loading=true
      this.refreshAuthors()
      .then(() => {
        this.loading=false
      })
    }
    else
    {
      this.loading=false
    }
  }
}
</script>
