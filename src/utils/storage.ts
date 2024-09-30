export const storage = (key = '')=>{
    if(!key) return null
    const value = localStorage.getItem(key)
    if (!value) return null
    return JSON.parse(value)
}