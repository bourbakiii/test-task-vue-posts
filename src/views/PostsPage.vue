<template>
    {{ authoredPosts }}
    {{postsQuery?.isLoading}}
    <!--    {{ postsQuery }}-->
</template>

<script setup>
import {useUsersQuery, usePostsQuery} from "@/queries";
import {computed, onMounted, watchEffect} from "vue";

const usersQuery = useUsersQuery();
const postsQuery = usePostsQuery();

</script>

<style lang="scss">

</style>
