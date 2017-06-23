var arr = [{
	imgsrc: "b00",
	cont: "风景如画00"
},{
	imgsrc: "b01",
	cont: "风景如画01"
}, {
	imgsrc: "b02",
	cont: "风景如画02"
}, {
	imgsrc: "b03",
	cont: "风景如画03"
}, {
	imgsrc: "b04",
	cont: "风景如画04"
}, {
	imgsrc: "b05",
	cont: "风景如画05"
}, {
	imgsrc: "b06",
	cont: "风景如画06"
}, {
	imgsrc: "b07",
	cont: "风景如画07"
}, {
	imgsrc: "b09",
	cont: "风景如画09"
}, {
	imgsrc: "b10",
	cont: "风景如画10"
}, {
	imgsrc: "b12",
	cont: "风景如画11"
}, {
	imgsrc: "b13",
	cont: "风景如画12"
}, {
	imgsrc: "b14",
	cont: "风景如画13"
}, {
	imgsrc: "b15",
	cont: "风景如画14"
}, {
	imgsrc: "b16",
	cont: "风景如画15"
}, {
	imgsrc: "b17",
	cont: "风景如画16"
}, {
	imgsrc: "b18",
	cont: "风景如画17"
}, {
	imgsrc: "b19",
	cont: "风景如画18"
}, {
	imgsrc: "b20",
	cont: "风景如画19"
}, {
	imgsrc: "b21",
	cont: "风景如画20"
}, {
	imgsrc: "b22",
	cont: "风景如画21"
}, {
	imgsrc: "b24",
	cont: "风景如画22"
}];
var pageAs = document.getElementById("pageAs").getElementsByTagName("a"),
	imgsWrp = document.getElementsByClassName("imgsWrp"),
	showBox = document.getElementById("showBox");
// showBox 关闭按钮事件
showBox.getElementsByTagName("a")[0].onclick = function() {
	showBox.style.display = "none";
}
for (var j = 0; j < imgsWrp.length; j++) {
	// 给每个imgsWrp设置自定义indx属性，后面有用
	imgsWrp[j].setAttribute("indx", j);
	imgsWrp[j].onclick = function() {
		showBox.style.display = "block";
		// 变更showBox里的图片地址 = 当前子元素a的自定义data-img值
		showBox.getElementsByTagName("img")[0].src = this.getElementsByTagName("a")[0].getAttribute("data-img");
		// 变更showBox里的p内容 = 当前子元素p的内容
		showBox.getElementsByTagName("p")[0].innerText = this.getElementsByTagName("p")[0].innerText;
	}
}

for (var i = 0; i < pageAs.length; i++) {
	pageAs[i].onclick = (function() {
		// 获取页码，从0开始计数
		var pgNum = Number(this.innerText) - 1;
		for (var j = 0; j < imgsWrp.length; j++) {
			// 取出之前付给imgsWrp的indx值
			var indx = Number(imgsWrp[j].getAttribute("indx"));
			// arrNow 每次根据页面变更时，arr数组里对应的取值，012345，67891011，......
			var arrNow = arr[indx + pgNum * imgsWrp.length];
			if (arrNow) {
				// 如果每次取值时都有，则显示imgsWrp
				imgsWrp[j].style.display = "block";
				// 变更当前imgsWrp里图片的src地址
				imgsWrp[j].getElementsByTagName("a")[0].getElementsByTagName("img")[0].src = "http://sandbox.runjs.cn/uploads/rs/113/ajzbmzhg/" + arrNow.imgsrc + ".jpg";
				// 变更当前imgsWrp里a的自定义属性值data-img
				imgsWrp[j].getElementsByTagName("a")[0].setAttribute("data-img", "http://sandbox.runjs.cn/uploads/rs/113/ajzbmzhg/" + arrNow.imgsrc + ".jpg");
				// 变更当前imgsWrp里p的内容
				imgsWrp[j].getElementsByTagName("p")[0].innerText = arrNow.cont;
			} else {
				// 如果每次取值时没有，则隐藏imgsWrp
				imgsWrp[j].style.display = "none";
			}

		}
	})
}