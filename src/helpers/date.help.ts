import moment from 'moment';
import 'moment/locale/pt-br';

export function formateDate(date: string | Date){
    return moment(date).format('LL')
}