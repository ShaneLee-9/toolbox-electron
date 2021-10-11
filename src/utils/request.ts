import { Loading, QSpinnerCube } from 'quasar'
import { getStrictType } from '@/utils/helper'

type methods = 'GET' | 'POST'
type params = Record<string, unknown> | null | undefined
type resType = 'json' | 'text'

export default <T>(
  url: string,
  params: params,
  method: methods = 'GET',
  resType: resType = 'json'
): Promise<T> => {
  let _url = url
  const options: RequestInit = {}

  if (params) {
    if (method === 'GET') {
      if (getStrictType(params) === 'Object') {
        const s = new URLSearchParams()

        for (const key in params) {
          s.set(key, String(params[key]))
        }

        _url += '?' + s.toString()
      }
    } else {
      options.headers = {
        'Content-Type': 'application/json'
      }
      options.body = JSON.stringify(params)
    }
  }

  Loading.show({
    spinner: QSpinnerCube,
    spinnerColor: 'primary'
  })

  return new Promise((resolve, reject) => {
    fetch(_url, options)
      .then(res => {
        if (resType === 'text') return res.text()
        return res.json()
      })
      .then(res => {
        resolve(res as unknown as T)
      })
      .catch(err => {
        reject(err)
      })
      .finally(() => {
        Loading.hide()
      })
  })
}
