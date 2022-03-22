<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field label="Title" v-model="title">Title</v-text-field>
        <v-text-field label="Description" v-model="description">Description</v-text-field>

        <v-btn color="success" x-large class="mx-auto d-block mt-5">Send</v-btn>
      </v-col>
    </v-row>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'AddItem',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    sendData() {
      axios.post('http://localhost:3000/items', {
        title: this.title,
        description: this.description,
      });
    },
  },
};
</script>

<style scoped>

</style>
