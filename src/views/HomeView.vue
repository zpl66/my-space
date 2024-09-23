<template>
  <div class="home">
    <ContentBase>
      首页
    </ContentBase>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentBase from '@/components/ContentBase.vue';

export default {
  name: 'HomeView',
  components: {
    ContentBase
  }
}
</script>
