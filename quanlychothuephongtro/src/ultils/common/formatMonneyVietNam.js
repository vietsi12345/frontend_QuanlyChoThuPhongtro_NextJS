export const formatMonneyVietNam = (keyword) => {
    return keyword.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
} 