// // เรียกใช้งาน WebSocket API
// const WebSocket = require('ws');

// // สร้างฟังก์ชันสำหรับเชื่อมต่อ WebSocket
// function connectWebSocket() {
//     const socket = new WebSocket('ws://13.213.32.238:8082/api/socket');

//     // Event listener สำหรับเมื่อ WebSocket เชื่อมต่อสำเร็จ
//     socket.addEventListener('open', function (event) {
//         console.log('WebSocket connection established successfully');
//     });

//     // Event listener สำหรับเมื่อมีข้อมูลเข้ามาผ่าน WebSocket
//     socket.addEventListener('message', function (event) {
//         console.log('Message from server:', event.data);
//         // ดำเนินการกับข้อมูลที่ได้รับได้ตามต้องการ
//     });

//     // Event listener สำหรับเมื่อเกิดข้อผิดพลาดในการเชื่อมต่อ WebSocket
//     socket.addEventListener('error', function (event) {
//         console.error('WebSocket connection error:', event);
//     });

//     // Event listener สำหรับเมื่อ WebSocket ปิดการเชื่อมต่อ
//     socket.addEventListener('close', function (event) {
//         console.log('WebSocket connection closed');
//     });
// }

// // ฟังก์ชันสำหรับเรียกข้อมูล Position ผ่าน WebSocket connection
// function getPositionData() {
//     // เรียกใช้งานฟังก์ชันเชื่อมต่อ WebSocket
//     connectWebSocket();
// }

// // เรียกใช้งานฟังก์ชันเริ่มต้นการรับข้อมูล Position
// getPositionData();


import WebSocket from 'ws';
import fetch from 'node-fetch';

// ฟังก์ชันสำหรับเข้าสู่ระบบและรับ token
async function loginAndGetToken() {
    const loginData = {
        email: 'p0925569761@gmail.com', // แก้ไขเป็นอีเมล์ของคุณ
        password: 'K150844' // แก้ไขเป็นรหัสผ่านของคุณ
    };

    try {
        const response = await fetch('http://13.213.32.238:8082/api/socket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const responseData = await response.json();
        const token = responseData.token;

        // เมื่อได้รับ token ให้เรียกใช้งานฟังก์ชันสำหรับเชื่อมต่อ WebSocket และรับข้อมูล Positions
        connectWebSocket(token);
    } catch (error) {
        console.error('Login failed:', error);
    }
}

// สร้างฟังก์ชันสำหรับเชื่อมต่อ WebSocket และรับข้อมูล Positions
function connectWebSocket(token) {
    const socket = new WebSocket('ws://13.213.32.238:8082/api/socket');

    socket.addEventListener('open', function (event) {
        console.log('WebSocket connection established successfully');

        // เมื่อ WebSocket เชื่อมต่อสำเร็จ ส่งคำขอเพื่อรับข้อมูล Positions โดยใช้ token
        socket.send(JSON.stringify({
            token: token,
            commands: [
                {
                    command: 'positions',
                    deviceId: null,
                    params: {}
                }
            ]
        }));
    });

    socket.addEventListener('message', function (event) {
        const data = JSON.parse(event.data);
        if (data.positions) {
            console.log('Positions:', data.positions);
            // ดำเนินการกับข้อมูล Positions ตามต้องการ
        }
    });

    socket.addEventListener('error', function (event) {
        console.error('WebSocket connection error:', event);
    });

    socket.addEventListener('close', function (event) {
        console.log('WebSocket connection closed');
    });
}

// เรียกใช้งานฟังก์ชันสำหรับเข้าสู่ระบบและรับ token
loginAndGetToken();



