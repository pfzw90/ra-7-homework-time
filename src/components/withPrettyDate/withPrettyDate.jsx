import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru');

export default function WithPrettyDate(Component) {
    return function Wrapper(props) {
        const oldDate = moment(props.date)
        return <Component date={oldDate.fromNow()}/>
    } 

}