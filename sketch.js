function setup() {
  createCanvas(400, 400);
  
  dict =[{
      kanji : '会う',
      kana: 'あう',
      english: 'to meet'
  }, {
      kanji : '口',
      kana: 'くち',
      english: 'mouth'
  }, {
      kanji : '',
      kana: '',
      english: ''
  }, {
      kanji : '',
      kana: '',
      english: ''
  }, {
      kanji : '',
      kana: '',
      english: ''
  }, {
      kanji : '',
      kana: '',
      english: ''
  }, {
      kanji : '',
      kana: '',
      english: ''
  }, {
      kanji : '',
      kana: '',
      english: ''
  }
        
        
        
  ];
  
  
  
  
  learning = dict;
  
  cur = {
      kanji : '会う',
      kana: 'あう',
      english: 'to meet'
      }
  
  curModeTxt = ['Kanji', 'Radicals', 'Rad 25%', 'Rad 50%', 'Rad 75%'];
  curMode = 0;
  curModeDict = [dict,dictRad,dictRad25,dictRad50, dictRad75];

  Checking = false;
  
  txtSize = 32;
  
}

function draw() {
  background(220);
  textSize(txtSize);
  //if we want to search for a specific kanjia nd tis kana and that
  //index = dict.map(x => x.english).indexOf('to meet');
  textAlign(CENTER);
  text(cur.kanji,width/2,width/8 + txtSize); 
  
  if (Checking) {
    
    text(cur.kana, width/2, width/8 + txtSize * 2.1);
    textSize(txtSize/2);
    text(cur.english, width/2, width/8 + txtSize *3);
    textSize(txtSize);
  }
  
  
  //extra info
  textAlign(LEFT);
  textSize(txtSize*0.5);
  text("Press 'Space' to show kana/english", width*(1/5),height - txtSize*6);
  text("Press 'Enter' to go to random kanji", width*(1/5),height - txtSize*5);
  text("Currently Learning: '" + curModeTxt[curMode] + "'", width*(1/5),height - txtSize*4);
  text("Press 'Left Shift' to change modes", width*(1/5),height - txtSize*3);
  text("If on Mobile tap Left Side to chnage Mode, ", width*(1/5),height - txtSize*2);
  text("Tap Right Side to continue", width*(1/5),height - txtSize);
}

function keyPressed() {
  if (keyCode == 32) { //space
    
    Checking = true;
    
  } else if (keyCode == 13) { //enter
    
      Checking = false;
      tempCur = cur;
      cur = random(learning);
        while (cur == tempCur) { //stop back to back duplicates
          cur = random(learning);
        }
    
  } else if (keyCode == 16) { //left shift
      
      if (curMode < 4) {
        curMode += 1;
      } else {curMode = 0;}
    
      Checking = false;
      learning = curModeDict[curMode];
      
   
  }
  
  
}


function touchStarted() {
  
  if (mouseX < canvasWidth/2 && mouseX > 0) {
    if (curMode < 4) {
        curMode += 1;
      } else {curMode = 0;}
    
      Checking = false;
      learning = curModeDict[curMode];
  } else if (mouseX >= canvasWidth/2 && mouseX < canvasWidth) {
    if (Checking) {
        Checking = false;
        tempCur = cur;
        cur = random(learning);
        while (cur == tempCur) { //stop back to back duplicates
          cur = random(learning);
        }
    } else {
      Checking = true;
    }
  }
  
  return falss;
  
}
