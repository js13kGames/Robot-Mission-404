c=a.getContext`2d`,k=[u=r=d=l=s=0],c.w=innerWidth,c.h=innerHeight,onkeydown=onkeyup=b=>k[b.which]=self["lld*rlurdu"[b.which%32%17]]=b.type[5];var touch,done,tool,tS,toX,levelCols=32,levelRows=16,pCol=2,pRow=12,ct2=0,pS=4,pL=c.width/32,gameOver=!1,testing=!1,p=makeSprite(c,350,70,"robot2.png",5,40,c.w/4,c.h/2,1,pS),toY=0,onOff=-1,numnpcs=5,npcs=[],bd=[];for(let b=0;b<numnpcs;b+=1)spawnnpc(),npcs[b].seq=[0,0,1,1,2,2,1,1];var totalNPC=5;for(let b=0;5>b;b+=1)2<b?spawnb("buildFlip.png"):spawnb("build.png"),bd[b].seq=[0];var story,choose,data,game,mob,health,R=0,speak=["This is a ","Ahh! You're an ","You have a ","You're here to ",""],choices=[["Peaceful Town","Alien","Warp Tunnel","Destroy all life!","Ahhh! What are you?!"],["Mob's Hideout","Robo Cop","Laser Gun","Fight the Mob!","Can I pay you off?"],["Government Facility","Escaped Experiment","Self Destruct","Destroy the Evidence.","I'm going to be in so much trouble!"],["Delightful Bakery","Bad Trip","Cool Jet Pack","Try the Brownies?","Yikes!"],["Enviromental Organization","Volunteer","Vacuum","Clean Up Trash","I can't believe my eyes!"]],dead=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],level=[[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],[1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1],[1,1,1,0,0,2,0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,0,0,2,1,1,1],[1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1],[4,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1],[4,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1],[4,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1],[1,0,0,1,2,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,2,0,0,0,0,1,0,1],[1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1],[1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1],[1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1],[1,0,1,0,0,1,2,0,0,1,0,1,1,0,0,1,1,0,1,2,0,0,0,1,0,1,0,0,1,0,0,1],[1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1],[4,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1],[4,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1],[4,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1],[1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,2,0,0,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,0,1,0,0,0,0,0,0,0,1,2,0,1,0,0,1],[1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1],[1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1],[1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1],[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,2,1],[1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],[4,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],[4,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],[4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,0,2,1,0,0,1,0,1,2,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1],[1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,2,0,0,0,0,1,1,0,1],[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1],[1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1],[1,1,1,0,0,1,0,0,1,0,2,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1],[4,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,2,0,1,0,0,1,1,0,0,0,0,0,1,0,1],[4,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1],[4,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1],[1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,2,0,0,1],[1,0,0,1,0,1,0,1,0,1,0,0,2,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1],[1,0,2,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1],[1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1],[1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1],[4,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,2,1,1,1],[4,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1],[4,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]];setInterval(()=>{a.width=innerWidth,a.height=innerHeight;0===s?title():1===s?(street(),k[13]&&(testing=!0)):2===s?inside():3===s?s=1:4===s?(endScreen(),k[13]&&(s=0)):5===s?mapEditor():void 0},16),onclick=b=>{switch(x=b.pageX,y=b.pageY,s){case 0:s=1;break;case 1:toX=x,toY=y,ct=600,touch=!0,done=!1;break;case 2:toX=x,toY=y,ct=600,touch=!0,done=!1;break;case 3:break;case 5:toX=x,toY=y,tapped(x,y,!1);}};function tx(b,e,g,h,f){c.textAlign="center",c.fillStyle=f,c.font=h+"vw Arial",c.fillText(b,e,g)}function title(){c.w=a.width,c.h=a.height,data=["404","404","404","404"],touch=!1,done=!0,story="Robot Mission 404",choose="",game=1,mob=[!1,!1,!1,!1,!1],health=100,c.fillStyle="#241007",c.fillRect(0,0,c.w,c.h),tx(story,c.w/2,.45*c.h,6,"#dc21ff"),tx("Click to go to street",c.w/2,.6*c.h,3,"#f5e2b4")}function endScreen(){tx(story+"Self-destruct!",a.width/2,a.height/4,6,"#dc21ff"),tx("Press enter to restart.",a.width/2,a.height/2,3,"#000000"),k[88]&&(s=0)}function street(){c.w=a.width,c.h=a.height,mob=[!1,!1,!1,!1,!1],c.fillStyle="#f5e2b4",c.fillRect(0,0,c.w,c.h),c.fillStyle="#241007",c.fillRect(0,c.h/3,c.w,c.h/3);let b,e=0;for(i=0;i<bd.length;i++){2<i?(e=2*c.h/3,b=2*(i-2)*c.w/5-c.w/5+c.w/50):b=2*i*c.w/5+c.w/50,bd[i].x=b,bd[i].y=e,bd[i].scaleRatio=.0202*c.w,bd[i].update(),bd[i].render();let f=bd[i].w/2;p.isClose(b+f,e+f,1)&&(R=i,testing?s=5:building())}tx("Robot Mission 404",c.w/2,c.h/2,5,"#dc21ff"),story="Mission: Enter "+data[0]+" as "+data[1]+" use "+data[2]+" to "+data[3],tx(story,c.w/2,.6*c.h,2.5,"#f5e2b4"),touch||keyMove(),touch&&!done&&touchMove(toX,toY),p.render()}function building(){if(2==game)for(let b=0;5>b;b++)dead[R][b]?(npcs[b].newSeq([5]),console.log("Can't wake the dead")):(npcs[b].newSeq([1,0,3,4,3,1]),console.log("player "+b+" waking up!"));p.x=pCol*a.width/32,p.y=pRow*a.height/16,s=2}function complete(){for(i in data)if(404==data[i])return!1;return!0}function inside(){c.w=a.width,c.h=a.height,drawR();let b=!1;for(i=0;i<npcs.length;i++)npcs[i].update(),npcs[i].render(),p.isClose(npcs[i].x,npcs[i].y,1)&&(1==game&&(story=speak[i]+choices[R][i]+"!",choose="Incoporate into memory file? Y or N",b=!0,k[89]&&4!=i?data[i]=choices[R][i]:k[78]?data[i]="404":4==i&&k[78]&&(data[2]="404")),2==game&&(!mob[i]&&0==dead[R][i]&&(npcs[i].newSeq([1,0,3,4,3,1]),mob[i]=!0),npcs[i].isClose(tS.x,tS.y,2)&&0==dead[R][i]&&(npcs[i].newSeq([5]),dead[R][i]=1,console.log("killing "+i+" in R "+R))));b||(story="Mission: Enter "+data[0]+" as "+data[1]+" use "+data[2]+" to "+data[3],choose="",complete()&&1==game&&(choose="Memory restored. Start mission? Y ? N",k[89]&&(makeTool(),game=2)),2==game&&(choose="Health: "+Math.floor(health))),2==game&&((1==tool||2==tool)&&(tS.update(),tS.render(),1==tool&&k[32]&&(tS.x=p.x,tS.y=p.y)),k[13]&&(console.log("c.w "+c.w+"c.h "+c.h),console.log(npcs))),p.render(),(l||r||u||d)&&(touch=!1),touch||keyMove(),touch&&!done?touchMove(toX,toY):p.y+=p.s,bump(p),tx(story,a.width/2,.06*c.h,2,"#f5e2b4"),tx(choose,a.width/2,.11*c.h,1.8,"#000000");let e=a.width/levelCols;p.y>12*e&&p.x<1*e+e/4&&(s=3),0>health&&(story="Mission Incomplete, ",s=4)}function drawR(){c.fillStyle="#f5e2b4",c.fillRect(0,0,a.width,a.height);var e=a.width/levelCols;c.width=e*levelCols,c.height=e*levelRows;var f=0;for(i=0;i<levelRows;i++)for(j=0;j<levelCols;j++){let b=level[R][i][j];if(0!=b&&2!=b&&(1===b?c.fillStyle="#dc21ff":4===b?c.fillStyle="#000000":void 0,c.fillRect(j*e,i*e,e,e)),2==b&&f<numnpcs&&0==dead[R][f]){if(2==game&&mob[f]){let g=p.x-5*f-2*e,h=g<c.width-e&&g>e;npcs[f].isClose(p.x,p.y,3)&&!(npcs[f].y>p.y+3*e)&&h&&(npcs[f].x=g,health-=.02),npcs[f].y+p.s<c.height-e&&(npcs[f].y+=p.s),bump(npcs[f])}else npcs[f].x=j*e,npcs[f].y=i*e;f++}}}function makeTool(){switch(data[2]){case"Warp Tunnel":;case"Vacuum":tool=1,tS=makeSprite(c,24,4,"warp.png",4,5,p.x,p.y,10,0);break;case"Laser Gun":tool=2,tS=makeSprite(c,90,15,"fire.png",6,5,p.x,p.y,6,0),tS.seq=[0,1,2,3,4,4,4,4,5];break;case"Cool Jet Pack":tool=3;break;case"Self Destruct":tool=4;}console.log(tool)}function mapEditor(){for(drawR(),i=0;i<npcs.length;i+=1)npcs[i].update(),npcs[i].render();k[13]&&(console.log(level[R]),s=2,testing=!1),u&&tapped(toX,toY,!0)}function tapped(b,e,f){var g=a.width/levelCols,h=Math.floor(b/g),m=Math.floor(e/g);let n=level[R][m][h];0===n?n=1:1===n?n=0:2===n?n=0:void 0;f&&(n=2),level[R][m][h]=n}function bump(b){var e=a.width/levelCols,f=Math.floor(b.x/e),g=Math.floor(b.y/e),h=b.x%e,m=b.y%e;if(!(16<g)&&!(32<f)){let n=[level[R][g][f],level[R][g][f+1],level[R][g+1][f],level[R][g+1][f+1]];(n[1]&&!n[0]||n[3]&&!n[2]&&m)&&(b.x=f*e),(!n[1]&&n[0]||!n[3]&&n[2]&&m)&&(b.x=(f+1)*e),(n[2]&&!n[0]||n[3]&&!n[1]&&h)&&(b.y=g*e),(!n[2]&&n[0]||!n[3]&&n[1]&&h)&&(b.y=(g+1)*e)}}function sprite(b){var e={},f=0,g=0,h=0,m=b.ticksPerFrame||0,n=b.numberOfFrames||1;return e.context=b.context,e.w=b.width,e.h=b.height,e.x=b.x,e.y=b.y,e.image=b.image,e.scaleRatio=1,e.s=b.s,e.seq=[],e.switch=function(b){f=b},e.newSeq=function(b){h=0,f=0,e.seq=b},e.update=function(){g+=1,g>m&&(g=0,f<n-1?(f+=1,0<e.seq.length&&(f=e.seq[h],h+=1)):1>e.seq.length&&(f=0),h>e.seq.length-1&&(h=0))},e.render=function(){e.context.drawImage(e.image,f*e.w/n,0,e.w/n,e.h,e.x,e.y,e.w/n*e.scaleRatio,e.h*e.scaleRatio)},e.getFrameWidth=function(){return e.w/n},e.isClose=function(b,f,g){var h=e.x+e.getFrameWidth()/2*e.scaleRatio-(b+e.getFrameWidth()/2),m=e.y+e.getFrameWidth()/2*e.scaleRatio-(f+e.getFrameWidth()/2),n=Math.sqrt(h*h+m*m);return!!(n<e.getFrameWidth()*e.scaleRatio*g)},e}function makeSprite(b,e,g,h,m,f,n,o,p,q){let t;return t=new Image,sp=sprite({context:b,width:e,height:g,image:t,numberOfFrames:m,ticksPerFrame:f,s:q}),sp.x=n,sp.y=o,sp.scaleRatio=p,t.src=h,sp}function spawnnpc(){let b=npcs.length;npcs[b]=makeSprite(c,192,32,"man.png",6,5,0,0,1.5,2),npcs[b].dead=!1}function spawnb(b){let e=bd.length;bd[e]=makeSprite(c,100,8,b,10,20,0,0,0,0)}function keyMove(){u&&(p.y-=5*p.s,p.switch(4));d&&(p.y+=p.s,p.switch(4));r&&(p.x+=p.s,p.switch(3));l&&(p.x-=p.s,p.switch(2));u&&r&&p.switch(1);u&&l&&p.switch(0);u||d||r||l||(p.seq=[1,0],p.update(),p.seq=[])}function touchMove(b,e){p.x>b+p.s||p.x<b-p.s||p.y>e+p.s||p.y<e-p.s?p.x!=b&&(p.y!=e&&(p.switch(4),e>p.y?p.y+=p.s:p.y-=p.s),b>p.x?(p.switch(1),p.x+=p.s):(p.switch(0),p.x-=p.s)):(done=!0,touch=!1)}