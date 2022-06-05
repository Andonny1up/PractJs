const precioOriginal = 100;
const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioCondescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioCondescuento;
}

function btnPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioCondescuento = calcularPrecioConDescuento(priceValue,discountValue)
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioCondescuento;
}

function btnPriceDiscountCoupon(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const CouponValue = Number(inputCoupon.value);
    let couponDiscount;

    switch (CouponValue) {
        case 1:
            couponDiscount = 10;
            break;
        case 2:
            couponDiscount = 15;
            break;
        case 3:
            couponDiscount = 20;
            break;
        case 4:
            couponDiscount = 30;
            break;
        default:
            couponDiscount = 0;
            break;
    }
    const precioCondescuento = calcularPrecioConDescuento(priceValue,couponDiscount)
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioCondescuento;
}