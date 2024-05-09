// สร้าง Firebase database reference
const database = firebase.database();
const locationsRef = database.ref('locations'); // ชื่อของโหนดใน Firebase database

// ดึงข้อมูลพิกัดจาก Firebase และตรวจสอบตำแหน่งเมื่อมีการเปลี่ยนแปลง
locationsRef.on('value', (snapshot) => {
  const locations = snapshot.val();
  for (let key in locations) {
    const location = locations[key];
    // สร้างตัวแปร LatLng สำหรับตำแหน่งที่บันทึกไว้ใน Firebase
    const savedLocation = new google.maps.LatLng(location.latitude, location.longitude);
    // ดึงตำแหน่งปัจจุบันของอุปกรณ์เคลื่อนที่
    navigator.geolocation.getCurrentPosition((position) => {
      const currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      // ตรวจสอบว่าตำแหน่งปัจจุบันของอุปกรณ์เคลื่อนที่อยู่ในพื้นที่ที่กำหนดไว้หรือไม่
      if (google.maps.geometry.spherical.computeDistanceBetween(savedLocation, currentLocation) < 100) { // หากอยู่ในรัศมี 100 เมตร
        let locationName = ""; // เริ่มต้นชื่อสถานที่เป็นช่องว่าง
        // ตรวจสอบ filed name และกำหนดชื่อสถานที่ตามเงื่อนไขที่กำหนด
        if (location['field_name1'] && location['field_name2'] && location['field_name3']) {
          locationName = "ชื่อที่ 1";
        } else if (location['field_name4'] && location['field_name5'] && location['field_name6']) {
          locationName = "ชื่อที่ 2";
        }
        document.getElementById('locationName').innerText = locationName; // แสดงชื่อสถานที่
      }
    });
  }
});
