import * as _ from 'lodash';
import { toNumber } from '../helpers';
import router from '../router';
import { Store } from './Store';

export let store = new Store

async function iniciar () {
    await store.fetchCourses()
    store.fetchUsers()
    let user = store.users.findById(toNumber(localStorage.getItem('user_id')!))
    if (user) store.user = user
    router(window.location.pathname)
}

iniciar()