import axios from "axios"

export function crawlingData(url: string, type?: string) {
  return axios.get(url + type).then(res => res).catch(console.error)
}