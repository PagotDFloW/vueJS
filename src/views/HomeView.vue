<template>
  <div>
    <div>
      <items-list/>
    </div>
  </div>
</template>

<script>
import ItemsList from '@/components/ItemsList.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    ItemsList,
  },
};
</script>
