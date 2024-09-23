<template>
    <div class="home">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <slot>

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentBase",
}
</script>

<style scoped>
.card {
    margin-top: 10px;
}
</style>