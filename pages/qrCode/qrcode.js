function generateQrcode() {
    var QRCode = document.getElementById('textQrcode').value;
	document.getElementById('qrcodeImg').src = `https://quickchart.io/qr?text=${QRCode}&caption=${QRCode}&captionFontSize=10&size=250`;
    document.getElementById('textQrcode').value='';
}