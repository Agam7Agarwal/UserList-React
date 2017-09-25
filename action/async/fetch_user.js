const fetchapiuser = () => {
    return (store) => {
        store.dispatch({type: 'FETCH_USER_STARTED'});
        fetch('https://api.myjson.com/bins/63r2x')
            .then(r => r.json())
            .then(data => {
                store.dispatch( {type: 'FETCH_USER_SUCCESS', userlist: data});
            })
            .catch(err => {
                store.dispatch({type: 'FETCH_USER_FAILURE'})
            });
    }
};

export default fetchapiuser;