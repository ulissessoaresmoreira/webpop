const formatCurrency = value => {
    return value.toLocaleString('en-GB', {style: 'currency', currency: 'EUR' })
}

export {
    formatCurrency,
}