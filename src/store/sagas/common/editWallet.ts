async function editWallet(data: any) {
    const url = `api/v1/${data.blockchain_id}/wallets/edit`;

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/${url}`, options);

    return await response.json();
}

export function* doEditWallet (action: any) {
    yield console.log('do edit wallet', action);

    try {
        const response = yield editWallet(action.data);
        // TODO: handle response and push to reducers
    } catch (error) {

    }
}