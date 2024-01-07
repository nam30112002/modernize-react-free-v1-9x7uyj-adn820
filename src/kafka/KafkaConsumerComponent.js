// import React, { useEffect } from 'react';
// import { Kafka } from 'kafkajs';
// import Cookies from "js-cookie";
//
// const KafkaConsumerComponent = () => {
//     const kafka = new Kafka({
//         clientId: `${Cookies.get("username")}`,
//         brokers: ['kafka1:29092'],
//     });
//
//     const consumer = kafka.consumer({ groupId: `${Cookies.get("username")}` });
//
//     const runConsumer = async () => {
//         await consumer.connect();
//         await consumer.subscribe({ topic: 'admin-notifications', fromBeginning: true });
//
//         await consumer.run({
//             eachMessage: async ({ topic, partition, message }) => {
//                 // Xử lý thông điệp ở đây
//                 const notificationMessage = message.value.toString();
//                 // Hiển thị thông báo trong ứng dụng React
//                 alert(notificationMessage);
//             },
//         });
//     };
//
//     useEffect(() => {
//         // Gọi hàm consumer khi component được mount
//         runConsumer();
//
//         // Rời bỏ kết nối khi component bị unmount
//         return () => consumer.disconnect();
//     }, []);
//
//     return (
//         <div>
//             {/* Hiển thị giao diện ReactJS của bạn ở đây */}
//         </div>
//     );
// };
//
// export default KafkaConsumerComponent;
