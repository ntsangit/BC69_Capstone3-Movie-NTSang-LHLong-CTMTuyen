
import {stringify} from 'qs'

//  Record<string, unknown> : kiểu dữ liệu là 1 obj
type ObjectToQueryStringParams = Record<string, unknown>

/**
 * 
 * @param obj : Object
 * @returns query string
 * @author `Hai Nguyen`
 */

export const objectToQueryString = ( obj: ObjectToQueryStringParams ) => {
  return stringify(obj, {
    addQueryPrefix: true
  })
}
