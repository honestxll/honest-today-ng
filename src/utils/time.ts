import * as moment from 'moment';
import 'moment/locale/zh-cn';

export const getTodayTime = (): string => {
  return moment().format('LLLL');
};
