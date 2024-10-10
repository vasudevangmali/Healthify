import requests

def authenticate():
    client_id = '210f40e7-4bff-455e-9b5c-742ec31d4874_aa0a5293-07f8-4a1e-807b-5501a99e5a04'
    client_secret = 'FQINNH03AzcYqzUhZ15zOkbDiTf05Ooqy5s0OxXZeio='
    auth_url = 'https://icdaccessmanagement.who.int/connect/token'

    data = {
        'client_id': client_id,
        'client_secret': client_secret,
        'grant_type': 'client_credentials'
    }

    response = requests.post(auth_url, data=data)

    if response.status_code == 200:
        auth_data = response.json()
        access_token = auth_data['access_token']
        print(f"Access Token: {access_token}")
        return access_token
    else:
        print(f"Failed to authenticate: {response.status_code}, {response.text}")
        return None
