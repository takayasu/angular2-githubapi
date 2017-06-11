import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  user: any;
  repos: any[];
  errMsg: string;

  constructor(private _github: GithubService) {
    this.user = false;
  }

  ngOnInit() {
  }

  searchUser() {

    console.log('search User');
    this._github.updateUser(this.username);

    this._github.getUser().subscribe(user => {
      this.user = user;
      this.errMsg = null;

    }, error => {
      this.errMsg = 'ユーザがいません';
      this.user = false;
    });

    this._github.getRepos().subscribe( repos => {
      this.repos = repos;
    });
  }

}
