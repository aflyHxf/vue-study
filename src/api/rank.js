import jsonp from 'common/js/jsonp'
import {commonParams, options, headerUrl, options_songs} from './config'
import axios from 'axios'

export function getTopList() {
  const url = headerUrl + '/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}


export function getMusicList(topid) {
  const url = headerUrl + '/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, commonParams, {
    page: 'detail',
    platform: 'h5',
    needNewCode: 1,
    type: 'top',
    tpl: 3,
    topid
  })
  return jsonp(url, data, options)
}
