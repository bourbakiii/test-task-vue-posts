import {useQuery} from '@tanstack/vue-query';
import axios from 'axios';

export function usePostsQuery(users = []) {
    return useQuery(['posts'], async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    });
}


export function useUsersQuery() {
    return useQuery(['users'], async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    });
}
