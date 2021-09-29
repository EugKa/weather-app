import moment from "moment"

export function getDateAndOffset(time: number, offset: any) {
    const dateTime = moment.unix(time).utc().add(offset, 's').format("D");
    return parseInt(dateTime);
}

export const convertToMDHM = (dt:number, offset: number) => {
    const humanDateFormat = moment.unix(dt).utc().add(offset, 's').format("MMM D, HH:mma"); 
    return humanDateFormat;
}

export const convertToDWMD = (dt:number, offset: number) => {
    const humanDateFormat = moment.unix(dt).utc().add(offset, 's').format("ddd, MMM D"); 
    return humanDateFormat;
}

export const convertToDDHHmm = (dt:number, offset: number) => {
    const dateTime = moment.unix(dt).utc().add(offset, 's').format("HH:mm"); 
    return dateTime
}

export const getCurrentDay = (dt:number, offset: number) => {
    const dateTime = moment.unix(dt).utc().add(offset, 's').format("D");
    return parseInt(dateTime);
}

export function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function numFormatter(num: number) {
    if(num > 1000){
        return (num/1000) + 'km';
    } else {
        return num + 'm'
    }
}