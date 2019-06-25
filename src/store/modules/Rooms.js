import axios from 'axios'
import data from '../../data'

const state = {
    rooms:[data]
}

const getters = {
    allRooms: state => state.rooms
}

const actions = {}

const mutations = {}

export default {
    state,getters,actions,mutations
};