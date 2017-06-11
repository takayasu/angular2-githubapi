
//GithubのID、Secretを設定して、config.tsにリネームする。

export class Config {

  private client_id = 'your_client_id';
  private client_secret = 'your_client_secret';

  getCliemtId() {
    return this.client_id;
  }

  getClientSecret() {
    return this.client_secret;
  }


}
