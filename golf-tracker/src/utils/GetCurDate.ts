export function getCurDate(): string {
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

return `${month}-${day}-${year}`;
}