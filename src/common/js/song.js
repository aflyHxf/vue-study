import {getLyric} from 'api/song'
import {ERR_OK} from "../../api/config";
import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.Lyric = Base64.decode(res.lyric)
          resolve(this.Lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}


export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: "http://dl.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?vkey=E1C70B5D404A958B78C8B70EB828C0589F672E35D5C1EB785208EDC2C2D421453B8C7DA935BC4DC22AB5E58FF0118508327E7C644CF859EB&guid=4118384561&uin=0&fromtag=66"
    // http://dl.stream.qqmusic.qq.com/%s?vkey=%s&guid=%s&uin=0&fromtag=66

  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
