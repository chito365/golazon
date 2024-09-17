export const getAbberviation = (s : string) : string => {
    let abberviation = s[0]
    for( let i = 0 ; i < s.length ; i++){
        if(s[i] === " "){
            abberviation += s[i + 1]
        }
    }
    return abberviation
}