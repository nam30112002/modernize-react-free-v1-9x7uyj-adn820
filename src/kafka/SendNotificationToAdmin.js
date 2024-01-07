//
// import { Kafka } from 'kafkajs';
// import Cookies from "js-cookie";
//
// const kafka = new Kafka({
//     clientId: `${Cookies.get("username")}`,
//     brokers: ['kafka1:29092']
// });
//
// const producer = kafka.producer();
//
// const sendNotificationToAdmin = async (message) => {
//     await producer.connect();
//     await producer.send({
//         topic: 'admin-notifications',
//         messages: [
//             { value: message },
//         ],
//     });
//     await producer.disconnect();
// };
//
// export { sendNotificationToAdmin };