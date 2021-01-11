export default function priceFormat(value){

    return (value + ' ₽').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

}