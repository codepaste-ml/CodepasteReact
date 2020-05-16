export class Api {
    static host = (process.env.NODE_ENV === 'production' ? 'https://api.codepaste.ml' : '');

    static post(path, body) {
        return fetch(`${Api.host}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        }).then(r => r.json());
    }

    static get(path) {
        return fetch(`${Api.host}${path}`).then(r => r.json());
    }

    static getLanguages() {
        return Api.get('/languages');
    }

    static getPaste(alias) {
        return Api.get(`/get/${alias}`);
    }

    static createPaste({source, name, language}) {
        return Api.post('/create', {
            source, name, language
        });
    }
}
