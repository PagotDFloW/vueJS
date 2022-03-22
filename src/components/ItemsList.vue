<template>
  <div>
    <v-container>
      <v-row>
        <v-col sm="6" lg="4">
          <v-text-field label="Find" prepend-icon="mdi-magnify" v-model="nameFilter"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, index) in data" :key="index" lg="4" sm="6">
          <item :item="item"/>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Item from '@/components/Item';

export default {
  name: 'ItemsList.vue',
  components: { Item },
  watch: {
    nameFilter(val) {
      this.$socket.emit('filtername_change', val);
      this.$socket.on('filtered_name', (data) => {
        console.log(data);
        this.data = data;
      });
    },
  },
  async mounted() {
    await this.$store.dispatch('getItems');
    this.data = this.$store.state.itemList;
  },
  data() {
    return {
      data: [],
      nameFilter: '',
    };
  },
};
</script>

<style scoped>

</style>
