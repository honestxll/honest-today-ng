import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { getTodayTime } from '../../../utils/time';
import {
  USERNAME,
  INIT_FLAG,
  START_USING_DATE,
} from '../../services/local-storage/local-storage-namespace';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less'],
})
export class SetupComponent implements OnInit {
  username: string;

  constructor(private store: LocalStorageService, private router: Router) {}

  ngOnInit() {}
}
