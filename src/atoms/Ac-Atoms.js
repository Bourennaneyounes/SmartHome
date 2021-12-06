import { atom} from "recoil";


export const direction = atom({
    key : 'direction',
    default: 50 
    
})

export const speed = atom({
    key : 'speed',
    default: 50 
    
})
export const temperature = atom({
    key : 'temperature',
    default: 20
    
})

export const scale = atom({
    key : 'scale',
    default: {
        scaleX : 0,
        scaleY : 0,
    } 
    
})


