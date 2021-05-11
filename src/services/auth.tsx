interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'kjsbfuerh493i08ef043jjferj',
                user: {
                    name: 'Gerson',
                    email: 'gerson@hotmail.com',
                },
            });
        }, 1000);
    });
};