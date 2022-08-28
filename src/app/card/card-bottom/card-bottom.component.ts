import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CheckIosService } from '../../service/check-ios/check-ios.service';

@Component({
  selector: 'nk-card-bottom',
  templateUrl: './card-bottom.component.html',
  styleUrls: ['./card-bottom.component.scss'],
  providers: [CheckIosService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBottomComponent implements OnInit {
  @Input() footer: boolean;
  @Input() scroll: boolean;
  @Input() height: number;


  constructor() {}

  ngOnInit(): void {

  }
}
