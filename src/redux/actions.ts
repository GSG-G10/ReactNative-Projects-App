const storeData = (data: any) => {
    return {
        type: 'STORE_DATA',
        payload : data
    }
}

export default storeData