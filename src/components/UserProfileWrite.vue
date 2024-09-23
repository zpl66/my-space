<template>
    <div class="card edit-field">
        <div class="card-body">
            <div class="form-floating">
                <textarea v-model="content" class="form-control" placeholder="Leave a comment here" id="edit-field"
                    style="height: 100px"></textarea>
                <label for="edit-field">编辑</label>
                <button @click="post_a_post" type="button" class="btn btn-primary btn-sm">发送</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'UserProfileWrite',

    setup(props, context) {
        let content = ref('');

        const post_a_post = () => {
            context.emit('post_a_post', content.value);
            content.value = "";
        };

        return {
            content,
            post_a_post
        }
    }
}
</script>

<style scoped>
.card {
    margin-top: 10px;
}

.btn {
    float: right;
}
</style>