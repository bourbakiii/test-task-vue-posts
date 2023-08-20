<script setup>
    import axios from 'axios';
    import PostCard from '@/components/PostCard.vue';
    import SearchForm from '@/components/SearchForm.vue';
    import TheMasonry from '@/components/TheMasonry.vue';
    import { onMounted, ref } from 'vue';

    const users = ref([]);
    const posts = ref([]);

    onMounted(async () => {
        users.value = await getUsers();
        posts.value = await getPosts();
    });

    const userQuery = ref('');

    async function onQuerySubmit() {
        if (!userQuery.value) {
            posts.value = await getPosts();

            return;
        }

        const userId = users.value.find((u) => {
            return u.name === userQuery.value;
        })?.id;

        if (!userId) {
            posts.value = [];

            return;
        }

        posts.value = await getPosts(userId);
    }

    const postsLoading = ref(false);

    async function getPosts(userId) {
        postsLoading.value = true;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                userId: userId,
            },
        });

        postsLoading.value = false;

        return response.data;
    }

    const usersLoading = ref(false);

    async function getUsers() {
        usersLoading.value = true;

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        usersLoading.value = false;

        return response.data;
    }
</script>

<template>
    <main class="my-4 lg:my-8">
        <div class="container">
            <div class="mb-8 lg:w-[400px] lg:mx-auto">
                <SearchForm
                    v-model="userQuery"
                    @submit="onQuerySubmit"
                    :placeholder="'Отфильтровать по автору...'"
                />
            </div>

            <div
                v-if="postsLoading === true || usersLoading === true"
                class="text-lg text-center"
            >
                Загружаю...
            </div>

            <TheMasonry v-else-if="posts.length">
                <div
                    v-for="post in posts"
                    :key="post.id"
                    class="masonry-item"
                >
                    <PostCard
                        :title="post.title"
                        :description="post.body"
                        :author="
                            users.find((u) => {
                                return u.id === post.userId;
                            }).name
                        "
                    />
                </div>
            </TheMasonry>

            <div
                v-else
                class="text-lg text-center"
            >
                😞 Ничего не найдено
            </div>
        </div>
    </main>
</template>
