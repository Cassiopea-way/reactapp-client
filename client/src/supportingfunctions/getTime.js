export function getTime(duration) {
   let sec = Math.ceil(duration);
   let minute = Math.floor(duration/60);
   
   let secStr1 = [0,1,2,3,4,5];
   let secStr2 = sec%10;
   let i;
   let num;
   let readystrfornum = String(Math.floor((sec/60)*100));
   
   if (readystrfornum.length <= 2){
	   
	   num = Number(readystrfornum);
	   
   } else {
	   let tmpStr = readystrfornum.substr(readystrfornum.length - 2);
	  
	   num = Number(tmpStr);
   }
   
   switch (true){
	   case (num >= 0 && num < 16):i = 0;break;
	   case (num >= 16 && num < 33):i = 1;break;
	   case (num >= 33 && num < 50):i = 2;break;
	   case (num >= 50 && num < 66):i = 3;break;
	   case (num >= 66 && num < 83):i = 4;break;
	   case (num >= 83 && num < 100):i = 5;break;   
   }
   
   return <div>{minute} : {secStr1[i]}{secStr2}</div>;
}