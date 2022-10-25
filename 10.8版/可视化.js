var json_store;
var index;
var order = false;
var person_x = true;
var action_x = true;
var sence_x = true;
var emo_x = true;
var myc ;
var ctx;
var img_src = new Image();
var myImg ;
var realWidth ;
var realHeight;
var load=false;
var is_display_order=false;
var set_int;
var per_list=[];
var emo_list=[];
var action_list=[];
var scene_list=[];
function Jump(){
    let content = document.getElementById("input_content").value;
    if(content>=0&&content<json_store.info.length-1){
        index = content;
        document.getElementById("input_content").innerHTML = "";
        DrawP();
        document.getElementById("剩余数量").innerHTML = index + " / "+ (json_store.info.length-1);
        DisplayAll();
    }
}
function Display_picture_order(){
    if(load){
        if(is_display_order){
            is_display_order=false;
            window.clearInterval(set_int)
        }else{
            is_display_order=true
            set_int = setInterval(Display_picture_right,150)
        }
    }
}
function Display_picture_left(){
    if(load){
        if(index>0)index--;
        DrawP();
        document.getElementById("剩余数量").innerHTML = index + " / "+ (json_store.info.length-1);
        DisplayAll();
    }
}
function Display_picture_right(){
    if(load){
        if(index<json_store.info.length-1)index++;
        else window.clearInterval(set_int);
        DrawP();
        document.getElementById("剩余数量").innerHTML = index + " / "+ (json_store.info.length-1);;
        DisplayAll()
    }
}
function DisplayAll(){
    action_display();
    sence_display();
    emo_display();
}
function person(){
    if(person_x){
        person_x=false;
        document.getElementById("人物属性零").innerHTML="";
        document.getElementById("人物属性一").innerHTML="";
        document.getElementById("人物属性二").innerHTML="";
        document.getElementById("属性控件").style.backgroundColor = 'gray';
    }else{
        person_x=true;
        let content="";
        let index1=0;
        per_list=[];
        document.getElementById("属性控件").style.backgroundColor = 'pink';
        for(let i=0;i<json_store.labelData.length;i++){
            if(json_store.labelData[i].label == "character attributes"){
                content+="group:"+json_store.labelData[i].group;
                content+="<br>人物序号:"+json_store.labelData[i].frames[0].attr["character number"];
                content+="<br>性别:"+json_store.labelData[i].frames[0].attr["gender"];
                content+="<br>年龄:"+json_store.labelData[i].frames[0].attr["age"];
                content+="<br>头发长度:"+json_store.labelData[i].frames[0].attr[ "hair length"];
                content+="<br>是否带帽子:"+json_store.labelData[i].frames[0].attr[ "wear a hat"];
                content+="<br>袖子长度:"+json_store.labelData[i].frames[0].attr[ "sleeve length"];
                content+="<br>裤子类型"+json_store.labelData[i].frames[0].attr["types of lower body clothing"];
                content+="<br>裤子长度"+json_store.labelData[i].frames[0].attr["bottom clothes lengthr"];
                content+="<br>是否带眼镜:"+json_store.labelData[i].frames[0].attr[ "wear glasses"];
                content+="<br>是否打领带:"+json_store.labelData[i].frames[0].attr[ "wear a tie"];
                content+="<br>上衣种类:"+json_store.labelData[i].frames[0].attr[ "types of upper body clothing"];
                if(json_store.labelData[i].frames[0].attr["up red"]=="yes")
                    content+="<br>上衣红色";
                if(json_store.labelData[i].frames[0].attr["up yellow"]=="yes")
                    content+="<br>上衣黄色";
                if(json_store.labelData[i].frames[0].attr["up blue"]=="yes")
                    content+="<br>上衣蓝色";
                if(json_store.labelData[i].frames[0].attr["up green"]=="yes")
                    content+="<br>上衣绿色";
                if(json_store.labelData[i].frames[0].attr["up purple"]=="yes")
                    content+="<br>上衣紫色";
                if(json_store.labelData[i].frames[0].attr["up black"]=="yes")
                    content+="<br>上衣黑色";
                if(json_store.labelData[i].frames[0].attr["up gray"]=="yes")
                    content+="<br>上衣灰色";
                if(json_store.labelData[i].frames[0].attr["up brown"]=="yes")
                    content+="<br>上衣棕色";
                if(json_store.labelData[i].frames[0].attr["up white"]=="yes")
                    content+="<br>上衣白色";
                if(json_store.labelData[i].frames[0].attr["down black"]=="yes")
                    content+="<br>下身黑色";
                if(json_store.labelData[i].frames[0].attr["down white"]=="yes")
                    content+="<br>下身白色";
                if(json_store.labelData[i].frames[0].attr["down red"]=="yes")
                    content+="<br>下身红色";
                if(json_store.labelData[i].frames[0].attr["down purple"]=="yes")
                    content+="<br>下身紫色";
                if(json_store.labelData[i].frames[0].attr["down yellow"]=="yes")
                    content+="<br>下身黄色";
                if(json_store.labelData[i].frames[0].attr["down gray"]=="yes")
                    content+="<br>下身灰色";
                if(json_store.labelData[i].frames[0].attr["down blue"]=="yes")
                    content+="<br>下身蓝色";
                if(json_store.labelData[i].frames[0].attr["down green"]=="yes")
                    content+="<br>下身绿色";
                if(json_store.labelData[i].frames[0].attr["down brown"]=="yes")
                    content+="<br>下身棕色";
                per_list.push(content);
                // if(index1 == 0){document.getElementById("人物属性零").innerHTML=content;index1++;}
                // else if(index1 == 1)document.getElementById("人物属性一").innerHTML=content;
                // else if(index1 == 2)document.getElementById("人物属性二").innerHTML=content;
                // index1++;
                content="";
            }
        }
        if(per_list.length>0){document.getElementById("人物属性零").innerHTML=per_list[0]}
        if(per_list.length>1){document.getElementById("人物属性一").innerHTML=per_list[1]}
        if(per_list.length>2){document.getElementById("人物属性二").innerHTML=per_list[2]}
        if(per_list.length>3){document.getElementById("人物属性三").innerHTML=per_list[3]}
    }
}
function action_display(){
    if(action_x){
        let content="";
        for(let i=1;i<json_store.labelData.length;i++){
            if(json_store.labelData[i].label == "action"){
                for(j=0;j<json_store.labelData[i].frames.length;j++){
                    if(json_store.labelData[i].frames[j].frame == index){
                        content+="人物序号:"+json_store.labelData[i].frames[j].attr["character number"];
                        content+="<br>动作原语:"+json_store.labelData[i].frames[j].attr["action_verb"];
                        content+="<br>动作目标:"+json_store.labelData[i].frames[j].attr["action_noun"];
                        content+="<br>";
                    }
                }
            }
        }
        document.getElementById("动作").innerHTML=content;
    }
}
function action(){
    if(action_x){
        action_x=false;
        document.getElementById("动作").innerHTML="";
        document.getElementById("动作控件").style.backgroundColor = 'gray';
    }else{
        action_x=true;
        document.getElementById("动作控件").style.backgroundColor = 'pink';
        action_display();
    }
}
function emo_display(){
    
    if(emo_x){
        let flag=0;
        let content="";
        for(let i=1;i<json_store.labelData.length;i++){
            if(json_store.labelData[i].label == "sentiment"){
                for(j=0;j<json_store.labelData[i].frames.length;j++){
                    if(json_store.labelData[i].frames[j].frame == index){
                        flag=1;
                        content+="人物序号:"+json_store.labelData[i].frames[j].attr["character number"];
                        content+="<br>情绪:"+json_store.labelData[i].frames[j].attr["sentiment"];
                        content+="<br>";
                    }
                }
            }
        }
        if(flag==1)document.getElementById("情绪").innerHTML=content;
    }
}
function emo(){
    if(emo_x){
        emo_x=false;
        document.getElementById("情绪").innerHTML="";
        document.getElementById("情绪控件").style.backgroundColor = 'gray';
    }else{
        emo_x=true;
        document.getElementById("情绪控件").style.backgroundColor = 'pink';
        emo_display();
    }
}
function sence_display(){
    if(sence_x){
        let content="";
        let flag=0;
        for(let i=1;i<json_store.labelData.length;i++){
            if(json_store.labelData[i].label == "scene"){
                for(j=0;j<json_store.labelData[i].frames.length;j++){
                    if(json_store.labelData[i].frames[j].frame == index){
                        flag=1;
                        content+="人物序号:"+json_store.labelData[i].frames[j].attr["character number"];
                        content+="<br>场景"+json_store.labelData[i].frames[j].attr["scene"];
                        content+="<br>";
                    }
                }
            }
        }
        if(flag==1)document.getElementById("场景").innerHTML=content;
    }
}
function sence(){
    if(sence_x){
        sence_x=false;
        document.getElementById("场景").innerHTML="";
        document.getElementById("场景控件").style.backgroundColor = 'gray';
    }else{
        sence_x=true;
        document.getElementById("场景控件").style.backgroundColor = 'pink';
        sence_display();
    }
}


function showPreview(source){
    load=false;
    var input = source;
    var reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = function() {
        if(reader.result) {
       //显示文件内容
            temp_str = reader.result;
            json_store = JSON.parse(temp_str);
            console.log(json_store);
            index = 0;
            // document.getElementById("picture").src = json_store.info[index];
            let temp = json_store.info.length-1;
            document.getElementById("剩余数量").innerHTML = index + " / "+ temp;
            document.getElementById("tid").innerHTML = "tid : " + json_store.tid;
            DisplayAll();
        }
        for (let i = 0; i < json_store.info.length; i++){
            img_src[i] = new Image();
            img_src[i].src = json_store.info[i];
        }
        img_src[json_store.info.length-1].onload = function(){
            load=true;
            myc = document.getElementById("mycanvas");
            ctx = myc.getContext("2d");
            myc.width="1011";
            myc.height="600";
            //img_src = new Image();
            //img_src.src = json_store.info[index];
            //img_src.onload = function(){
                // ctx.drawImage(img_src[index],0,0,myc.width,myc.height);
                // document.getElementById("temp_img").src=img_src[index].src;
                // myImg = document.querySelector("#temp_img");
                // realWidth = myImg.naturalWidth;
                // realHeight = myImg.naturalHeight;
                // console.log(realWidth,realHeight);
                // DrawTect();
            //}
            // document.getElementById("picture").src=json_store.info[index];
            // img_src = document.getElementById("picture");
            // ctx.drawImage(img_src,0,0);
            // document.getElementById("picture").src="";
            DrawP();
            person();
        }
    };
    // console.log(document.getElementById("picture").width); // 100px
    // console.log(document.getElementById("picture").height); // 200px
}
function DrawP(){
    ctx.clearRect(0,0,1011,600); 
    ctx.beginPath();
    ctx.drawImage(img_src[index],0,0,myc.width,myc.height);
    document.getElementById("temp_img").src=img_src[index].src;
    myImg = document.querySelector("#temp_img");
    realWidth = myImg.naturalWidth;
    realHeight = myImg.naturalHeight;
    console.log(realWidth,realHeight);
    DrawTect();
}
function DrawTect(){
    let arr=[];
    let flag = 0;
    for(let j=0;j<json_store.labelData.length&&j<=6;j++){//注：默认只看前六个
        if(json_store.labelData[j].label=="character attributes"){
            for(let i=0;i<json_store.labelData[j].frames.length&&i<=index;i++){
                if(json_store.labelData[j].frames[i].frame == index){
                    flag=1;
                    var tmp = json_store.labelData[j].frames[i].points;
                    tmp.push(json_store.labelData[j].frames[0].attr["character number"])
                    arr.push(tmp);
                }
            }
        }
    }
    if(flag){
        for(let i=0;i<arr.length;i++){
            ctx.lineWidth = 1;
            ctx.strokeStyle = "red";
            ctx.moveTo(1011/realWidth*arr[i][0],600/realHeight*arr[i][1]);
            ctx.lineTo(1011/realWidth*arr[i][0],600/realHeight*arr[i][3]);
            ctx.lineTo(1011/realWidth*arr[i][2],600/realHeight*arr[i][3]);
            ctx.lineTo(1011/realWidth*arr[i][2],600/realHeight*arr[i][1]);
            ctx.lineTo(1011/realWidth*arr[i][0],600/realHeight*arr[i][1]);
            ctx.fillText("Person"+arr[i][4],1011/realWidth*arr[i][0],600/realHeight*arr[i][1]-5);
        }
        ctx.stroke();
    }
}
