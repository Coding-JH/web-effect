var arr = [{
	imgsrc: "b00",
	cont: "�羰�续00"
},{
	imgsrc: "b01",
	cont: "�羰�续01"
}, {
	imgsrc: "b02",
	cont: "�羰�续02"
}, {
	imgsrc: "b03",
	cont: "�羰�续03"
}, {
	imgsrc: "b04",
	cont: "�羰�续04"
}, {
	imgsrc: "b05",
	cont: "�羰�续05"
}, {
	imgsrc: "b06",
	cont: "�羰�续06"
}, {
	imgsrc: "b07",
	cont: "�羰�续07"
}, {
	imgsrc: "b09",
	cont: "�羰�续09"
}, {
	imgsrc: "b10",
	cont: "�羰�续10"
}, {
	imgsrc: "b12",
	cont: "�羰�续11"
}, {
	imgsrc: "b13",
	cont: "�羰�续12"
}, {
	imgsrc: "b14",
	cont: "�羰�续13"
}, {
	imgsrc: "b15",
	cont: "�羰�续14"
}, {
	imgsrc: "b16",
	cont: "�羰�续15"
}, {
	imgsrc: "b17",
	cont: "�羰�续16"
}, {
	imgsrc: "b18",
	cont: "�羰�续17"
}, {
	imgsrc: "b19",
	cont: "�羰�续18"
}, {
	imgsrc: "b20",
	cont: "�羰�续19"
}, {
	imgsrc: "b21",
	cont: "�羰�续20"
}, {
	imgsrc: "b22",
	cont: "�羰�续21"
}, {
	imgsrc: "b24",
	cont: "�羰�续22"
}];
var pageAs = document.getElementById("pageAs").getElementsByTagName("a"),
	imgsWrp = document.getElementsByClassName("imgsWrp"),
	showBox = document.getElementById("showBox");
// showBox �رհ�ť�¼�
showBox.getElementsByTagName("a")[0].onclick = function() {
	showBox.style.display = "none";
}
for (var j = 0; j < imgsWrp.length; j++) {
	// ��ÿ��imgsWrp�����Զ���indx���ԣ���������
	imgsWrp[j].setAttribute("indx", j);
	imgsWrp[j].onclick = function() {
		showBox.style.display = "block";
		// ���showBox���ͼƬ��ַ = ��ǰ��Ԫ��a���Զ���data-imgֵ
		showBox.getElementsByTagName("img")[0].src = this.getElementsByTagName("a")[0].getAttribute("data-img");
		// ���showBox���p���� = ��ǰ��Ԫ��p������
		showBox.getElementsByTagName("p")[0].innerText = this.getElementsByTagName("p")[0].innerText;
	}
}

for (var i = 0; i < pageAs.length; i++) {
	pageAs[i].onclick = (function() {
		// ��ȡҳ�룬��0��ʼ����
		var pgNum = Number(this.innerText) - 1;
		for (var j = 0; j < imgsWrp.length; j++) {
			// ȡ��֮ǰ����imgsWrp��indxֵ
			var indx = Number(imgsWrp[j].getAttribute("indx"));
			// arrNow ÿ�θ���ҳ����ʱ��arr�������Ӧ��ȡֵ��012345��67891011��......
			var arrNow = arr[indx + pgNum * imgsWrp.length];
			if (arrNow) {
				// ���ÿ��ȡֵʱ���У�����ʾimgsWrp
				imgsWrp[j].style.display = "block";
				// �����ǰimgsWrp��ͼƬ��src��ַ
				imgsWrp[j].getElementsByTagName("a")[0].getElementsByTagName("img")[0].src = "http://sandbox.runjs.cn/uploads/rs/113/ajzbmzhg/" + arrNow.imgsrc + ".jpg";
				// �����ǰimgsWrp��a���Զ�������ֵdata-img
				imgsWrp[j].getElementsByTagName("a")[0].setAttribute("data-img", "http://sandbox.runjs.cn/uploads/rs/113/ajzbmzhg/" + arrNow.imgsrc + ".jpg");
				// �����ǰimgsWrp��p������
				imgsWrp[j].getElementsByTagName("p")[0].innerText = arrNow.cont;
			} else {
				// ���ÿ��ȡֵʱû�У�������imgsWrp
				imgsWrp[j].style.display = "none";
			}

		}
	})
}