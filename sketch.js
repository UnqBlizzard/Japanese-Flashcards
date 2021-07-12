function setup() {
  createCanvas(windowWidth, windowHeight);
  //deafult canvas is 400,400
  txtScale = 1;
  ver = "v_002h";
  if (width >= height) {
    txtScale = height/400;
    xpostext = width/100;
    xposkanji = width*4/5
  } else {
    txtScale = width/400;
    xpostext = width/5;
    xposkanji = width/2
  }
  
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
  }
        
        
        
  ];
  
  
  
  
  learning = dict;
  
  cur = {
      kanji : '会う',
      kana: 'あう',
      english: 'to meet'
      }
  
  curModeTxt = ['Kanji', 'Radicals', 'Rad 25%', 'Rad 50%', 'Rad 75%','Katakana'];
  curMode = 0;
  curModeDict = [dict,dictRad,dictRad25,dictRad50, dictRad75, dictKatakana];

  Checking = false;
  
  txtSize = 32 * txtScale;
  bg = 220;
  txtKanjiScaler = 1.5;
  
}

function draw() {
  background(bg);
  textSize(txtSize * txtKanjiScaler);
  //if we want to search for a specific kanjia nd tis kana and that
  //index = dict.map(x => x.english).indexOf('to meet');
  textAlign(CENTER);
  text(cur.kanji,width/2,height/8 + txtSize * txtKanjiScaler); 
  
  if (Checking) {
    
    text(cur.kana, width/2, height/8 + txtSize * 2.1 * txtKanjiScaler);
    textSize(txtSize * txtKanjiScaler/2);
    text(cur.english, width/2, height/8 + txtSize *3 * txtKanjiScaler);
    textSize(txtSize * txtKanjiScaler);
  }
  
  
  //extra info
  textAlign(LEFT);
  textSize(txtSize*0.5);
  text("Press 'Space' to show kana/english", xpostext,height - txtSize*6*0.5);
  text("Press 'Enter' to go to random kanji", xpostext,height - txtSize*5*0.5);
  text("Currently Learning: '" + curModeTxt[curMode] + "'", xpostext,height - txtSize*4*0.5);
  text("Press 'Left Shift' to change modes", xpostext,height - txtSize*3*0.5);
  text("If on Mobile tap Left Side to chnage Mode, ", xpostext,height - txtSize*2*0.5);
  text("Tap Right Side to continue", xpostext,height - txtSize*0.5);
  text(ver, txtSize/4,txtSize/2);
  // textAlign(LEFT);
  // textSize(txtSize*0.5);
  // text("Press 'Space' to show kana/english", xpostext,height - txtSize*6);
  // text("Press 'Enter' to go to random kanji", xpostext,height - txtSize*5);
  // text("Currently Learning: '" + curModeTxt[curMode] + "'", xpostext,height - txtSize*4);
  // text("Press 'Left Shift' to change modes", xpostext,height - txtSize*3);
  // text("If on Mobile tap Left Side to chnage Mode, ", xpostext,height - txtSize*2);
  // text("Tap Right Side to continue", xpostext,height - txtSize);
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
      
      if (curMode < 5) {
        curMode += 1;
      } else {curMode = 0;}
    
      Checking = false;
      learning = curModeDict[curMode];
      cur = random(learning); 
     
  }
  
  
}


function touchStarted() {
  
  
  if (mouseX < width/2 && mouseX > 0) {
    if (curMode < 5) {
        curMode += 1;
      } else {curMode = 0;}
    
      Checking = false;
      learning = curModeDict[curMode];
      cur = random(learning);
  } else if (mouseX >= width/2 && mouseX < width) {
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
  
  return false;
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //deafult canvas is 400,400
  txtScale = 1;
  if (width >= height) {
    txtScale = height/400;
    xpostext = width/100;
    xposkanji = width*4/5
  } else {
    txtScale = width/400;
    xpostext = width/5;
    xposkanji = width/2
  }
  
  txtSize = 32 * txtScale;
  bg = 220;
  txtKanjiScaler = 1.5;
  
}


