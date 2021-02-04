/* eslint-disable no-undef */
import { mount, createLocalVue } from '@vue/test-utils'
import Home from './Home.vue';
import SearchUser from '../components/SearchUser.vue';

import Vuex from 'vuex';
import vuexstore from '../store.js'

describe('Home.vue', () => {    
    let wrapper;
    //mocking vuex to make it work
    let store;
    const localVue = createLocalVue();

    localVue.use(Vuex);
    beforeEach(() => {
        store = new Vuex.Store(vuexstore);
        wrapper = mount(Home, { store, localVue })
    });
    test('Check if search-user and user-card components exists!', () => {
        expect(wrapper.findComponent(SearchUser).exists()).toBeTruthy();
    });

})
