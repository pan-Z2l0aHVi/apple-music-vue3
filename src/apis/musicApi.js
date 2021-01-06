import request from '/@/utils/request'

export const fetchPlaylistDetail = id => request.get('playlist/detail', { params: { id } })
