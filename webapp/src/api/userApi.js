import {instance} from "./api_instance";

export const userApi = {
    getUsersPage(page) {
        return instance.get('api/user/get/page?page=' + page);
    },
    getUserById(id) {
        return instance.get('api/user/get/' + id);
    },
    deleteUserById(id) {
        return instance.delete('api/user/delete/' + id);
    },
    addUser(user) {
        return instance.post('api/user/add', user);
    },
    updateUser(user) {
        return instance.put('api/user/update', user);
    },
    searchUser(page, search) {
        return instance.get('api/user/search/?page=' + page + '&search=' + search);
    }
}