import React, {useState} from 'react';
import moment from 'moment';
import shortid from 'shortid'
import WithPrettyDate from './components/withPrettyDate/withPrettyDate';
import './index.css'

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

const DateTimePretty = WithPrettyDate(DateTime)

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.url}></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={shortid.generate()}/>);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(7, 'days').format('MM/DD/YYYY HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(2, 'hours').format('MM/DD/YYYY HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(12, 'minutes').format('MM/DD/YYYY HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(46, 'days').format('MM/DD/YYYY HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(20, 'hours').format('MM/DD/YYYY HH:mm:ss')
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: moment().subtract(24, 'days').format('MM/DD/YYYY HH:mm:ss')
        },
    ]);

    return (
        <VideoList list={list} />
    );
}