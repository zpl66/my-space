<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="@/assets/OIP.jpg" alt="用户头像">
                </div>
                <div class="col-9">
                    <div class="username">
                        {{ fullName }}
                    </div>
                    <div class="fans">
                        粉丝数: {{ user.followerCount }}
                    </div>
                    <button v-if="!user.is_followed" @click="follow" type="button"
                        class="btn btn-primary btn-sm">+关注</button>
                    <button v-if="user.is_followed" @click="unfollow" type="button"
                        class="btn btn-secondary btn-sm">取消关注</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "UserProfileInfo",

    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    setup(props, context) {
        let fullName = computed(() => props.user.lastName + ' ' + props.user.firstName);

        const follow = () => {
            context.emit("follow");
        }

        const unfollow = () => {
            context.emit("unfollow");
        }

        return {
            fullName,
            follow,
            unfollow
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>