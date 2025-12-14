// simple
export const formatIDR = (value: number): string => {
    return new Intl.NumberFormat("id-ID").format(value)
}

// currency-aware
export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(value)
}
