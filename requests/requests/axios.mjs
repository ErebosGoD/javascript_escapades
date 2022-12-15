export const getData = async () => {
    try {
        let getResponse = await axios.get('https://reqres.in/api/unknown')
        console.log(getResponse);
    }
    catch (error) {
        console.log(error);
    }

}

export const sendData = async () => {
    try {
        let postResponse = await axios.post(
            'https://reqres.in/api/register',
            {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        console.log(postResponse);
    }
    catch (error) {
        console.log(error);
    }
}