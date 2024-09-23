<template>
    <div class="home">
        <ContentBase>
            404 Not Found
        </ContentBase>
    </div>
</template>

<script>
// @ is an alias to /src
import ContentBase from '@/components/ContentBase.vue';

export default {
    name: 'NotFoundView',
    components: {
        ContentBase
    }
}
</script>