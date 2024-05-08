const token = 'SDBGAiEAmWOYmoayLMZTzUgsNQY54QNT7Q5l-iOP2z9mZCot4ZQCIQCsTAqm3VMAyYJLBtkh-qlrvt5cP4J5g_FbC883Oks1YnsidSI6MSwiZSI6IjIwMjQtMDUtMTBUMTc6MDA6MDAuMDAwKzAwOjAwIn0';
const url = `localhost:8082/api/session?token=${token}`;
const socket = new WebSocket(url);

// ตรวจสอบการเชื่อมต่อ WebSocket
socket.onopen = function(event) {
    console.log('WebSocket connected!');
};

// การรับข้อมูลจาก WebSocket
socket.onmessage = function(event) {
    console.log('Received message: ' + event.data);
};

// การปิดการเชื่อมต่อ WebSocket
socket.onclose = function(event) {
    console.log('WebSocket disconnected!');
};