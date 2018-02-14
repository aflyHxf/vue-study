import jsonp from 'common/js/jsonp'
import {commonParams, options, headerUrl} from './config'

export function getSingerList() {
  const url = headerUrl + '/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1664029744
  })
  return jsonp(url, data, options)
}

// const singers = [
//   {
//     Findex: 'X',
//     Fsinger_mid: 'xzq',
//     Fsinger_name: '薛之谦',
//     Fsort: '1',
//   },
//   {
//     Findex: 'Z',
//     Fsinger_mid: 'zjl',
//     Fsinger_name: '周杰伦',
//     Fsort: '2',
//   },
//   {
//     Findex: 'C',
//     Fsinger_mid: 'cyx',
//     Fsinger_name: '陈奕迅',
//     Fsort: '3',
//   },
//   {
//     Findex: 'W',
//     Fsinger_mid: 'wyt',
//     Fsinger_name: '五月天',
//     Fsort: '4',
//   },
//   {
//     Findex: 'L',
//     Fsinger_mid: 'ldh',
//     Fsinger_name: '刘德华',
//     Fsort: '5',
//   },
//   {
//     Findex: 'X',
//     Fsinger_mid: 'xaq',
//     Fsinger_name: '谢安琪',
//     Fsort: '6',
//   },
//   {
//     Findex: 'R',
//     Fsinger_mid: 'rze',
//     Fsinger_name: '容祖儿',
//     Fsort: '7',
//   },
//   {
//     Findex: 'G',
//     Fsinger_mid: 'gjj',
//     Fsinger_name: '古巨基',
//     Fsort: '8',
//   },
//   {
//     Findex: 'Y',
//     Fsinger_mid: 'yqh',
//     Fsinger_name: '杨千嬅',
//     Fsort: '9',
//   },
//   {
//     Findex: 'L',
//     Fsinger_mid: 'lkq',
//     Fsinger_name: '李克勤',
//     Fsort: '10',
//   },
//   {
//     Findex: 'C',
//     Fsinger_mid: 'cxc',
//     Fsinger_name: '陈小春',
//     Fsort: '11',
//   },
//   {
//     Findex: 'W',
//     Fsinger_mid: 'wf',
//     Fsinger_name: '王菲',
//     Fsort: '12',
//   },
//   {
//     Findex: 'Z',
//     Fsinger_mid: 'zgr',
//     Fsinger_name: '张国荣',
//     Fsort: '13',
//   },
//   {
//     Findex: 'W',
//     Fsinger_mid: 'wyf',
//     Fsinger_name: '吴雨霏',
//     Fsort: '14',
//   },
//   {
//     Findex: 'Z',
//     Fsinger_mid: 'zxy',
//     Fsinger_name: '张学友',
//     Fsort: '15',
//   },
//   {
//     Findex: 'L',
//     Fsinger_mid: 'ljr',
//     Fsinger_name: '梁静茹',
//     Fsort: '16',
//   },
//   {
//     Findex: 'L',
//     Fsinger_mid: 'ljj',
//     Fsinger_name: '林俊杰',
//     Fsort: '17',
//   },
//   {
//     Findex: 'T',
//     Fsinger_mid: 'tyl',
//     Fsinger_name: '谭咏麟',
//     Fsort: '18',
//   },
//   {
//     Findex: 'G',
//     Fsinger_mid: 'gtl',
//     Fsinger_name: '古天乐',
//     Fsort: '19',
//   },
//   {
//     Findex: 'M',
//     Fsinger_mid: 'mww',
//     Fsinger_name: '莫文蔚',
//     Fsort: '20',
//   },
//   {
//     Findex: 'L',
//     Fsinger_mid: 'lry',
//     Fsinger_name: '刘若英',
//     Fsort: '21',
//   },
//   {
//     Findex: 'D',
//     Fsinger_mid: 'dzq',
//     Fsinger_name: '邓紫棋',
//     Fsort: '22',
//   },
//   {
//     Findex: 'L',
//     Fsinger_mid: 'lf',
//     Fsinger_name: '林峯',
//     Fsort: '23',
//   },
//   {
//     Findex: 'C',
//     Fsinger_mid: 'cyl',
//     Fsinger_name: '蔡依林',
//     Fsort: '24',
//   },
//   {
//     Findex: 'Z',
//     Fsinger_mid: 'zgr',
//     Fsinger_name: '张国荣',
//     Fsort: '25',
//   },
//   {
//     Findex: 'Z',
//     Fsinger_mid: 'zgr',
//     Fsinger_name: '张国荣',
//     Fsort: '26',
//   },
//   {
//     Findex: 'Z',
//     Fsinger_mid: 'zgr',
//     Fsinger_name: '张国荣',
//     Fsort: '27',
//   },
// ]
// return singers

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    g_tk: 1664029744,
    singermid: singerId
  })

  return jsonp(url, data, options)
}




