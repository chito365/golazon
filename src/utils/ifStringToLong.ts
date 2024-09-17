export const ifStringToLong = (s : string, max : number) : string =>{

    if(s.length > max){
        return s.split('').slice(0, max).join('') + "..."
    }

    return s
}