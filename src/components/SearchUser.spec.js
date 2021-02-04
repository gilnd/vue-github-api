/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import SearchUser from './SearchUser.vue';

describe('SearchUser.vue', () => {
    const wrapper = shallowMount(SearchUser, {
        props:{ loading: Boolean },
        data() { return { query: ''}
        }
    })
    test('Check if alla elements exists!', () => {
        expect(wrapper.find('button').exists()).toBeTruthy()
        expect(wrapper.find('input').exists()).toBeTruthy()
    });
    test('Check if loading is false!', () => {
        expect(wrapper.props('loading')).toBe(false);
    });
})