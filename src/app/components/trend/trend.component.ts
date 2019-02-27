import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.less'],
  // host: {
  //   '[class.trend]': 'true',
  //   '[class.trend__grey]': '!colorful',
  //   '[class.trend__reverse]': 'colorful && reverseColor',
  // },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendComponent {

 /** 上升下降标识 */
 @Input() flag: 'up' | 'down';
 /** 是否彩色标记 */
 @Input() @InputBoolean() colorful = true;
 /** 颜色反转 */
 @Input() @InputBoolean() reverseColor = false;

}
