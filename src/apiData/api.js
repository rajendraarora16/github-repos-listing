class api {
    static getData(search) {

        return fetch('https://github-user.now.sh/?username='+search).then(response => {
            return response.json()
        }).catch(error => {
            return error;
        })
    }
}

export default api
