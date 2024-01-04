import SockJsClient from 'react-stomp';
import {useSnackbar} from 'notistack';


export default function Notification() {
    const SOCKET_URL = "http://localhost:8080/ws-message";
    const {enqueueSnackbar} = useSnackbar();

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onMessageReceived = (msg) => {
        showSnackBar(msg);
    }
    let onDisconnect = () => {
        console.log("Disconnected!")
    }
    const showSnackBar = (message) => {
        enqueueSnackbar(message, {variant: 'success'});
        console.log("showSnackBar");
    }

    return (
        <SockJsClient
            url={SOCKET_URL}
            topics={['/topic/notification']}
            onConnect={onConnected}
            onDisconnect={onDisconnect}
            onMessage={msg => onMessageReceived(msg)}
            debug={false}
        />
    )
}