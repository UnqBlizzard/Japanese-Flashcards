radDict75STL = "一 (いち) one; 刀/刂 (かたな, トウ) sword; 十 (ジュウ, と) ten; 田 (た, デン) rice field; 火/灬 (ひ, カ) fire; 大 (おお, ダイ) big; 山 (やま, サン) mountain; 食 / 飠 (しょく) eat, food; 車 (くるま) vehicle; 彳 (行人/ぎょうにん) walking person radical; 目 (め) eye; 雨 (あめ) rain; 犬 / 犭 (いぬ, ケン) dog; 王 (おう) king; 玉 (たま) ball, jewel; 石 (いし) stone; 力 (ちから) power; 衣/衤 (ころも) garment; 弓 (ゆみ) bow; 竹/⺮ (たけ) bamboo; 又 (また) again; 攵 (のぶん) strike, action radical; 夂 (ふゆがしら) winter radical; 示/礻 (しめす) show on an altar radical; 酉 (とり) alcohol radical; 囗 (くに) enclosure radical; 禾 (いね) grain radical; 广 (間/ま) building on a cliff radical; 疒 (病/やまい) sickness radical; 巾 (きん/はば) cloth radical; 尸 (かたしろ, シ) flag/corpse radical; 寸 (すん) inch/sundial, degree radical;";

// to be used on a desktop build of p5.js so it can save to computer and generate the list as a dictionary
function LoadStringText() {
  chars = radDict75STL;
    parts = []

    splits = false;
    lastEnd = 0;
    for (i = 0; i < chars.length; i++) {
        c = chars.charAt(i);
        switch (c) {
        case '(':
            splits = true;
            break;
        case ')':
            splits = true;
            break;
        case ';':
            splits = true;
            break;
        }
        if (splits) {
            parts.push(chars.substring(lastEnd, i));
            lastEnd = i+1;
            splits = false;
        }

    }
    print(parts);


    LoadedString = "";
    for (i = 0; i < parts.length - 2 || i == 0; i+=3 ) {
        if (i == 0) LoadedString += "TempDict = [";
          //list.push({kanji: arr[i], kana : arr[i+1], english : arr[i+2]});
          
          
          Kana = parts[i+1].replace(/(|)/g,'');
          if (Kana.charAt(0) == ' ') Kana = Kana.slice(1,Kana.length);
          
          eng = parts[i+2];
          if (eng.charAt(0) == ' ') eng = eng.slice(1,eng.length);
          k = parts[i];

          if (k.charAt(0) == ' ') k = k.slice(1,k.length);
          
          
    
          LoadedString += "{kanji: '" + k + "', kana: '" + Kana + "', english : '" + eng + "'}"
        if (i == parts.length-3) LoadedString += "];"; //this line may not work????
        else LoadedString += ", ";
      }



  //saveStrings(LoadedString, 'STL RadDict75.txt');
  let writer = createWriter('newFile.txt');
  // write 'Hello world!'' to the file
  writer.write(LoadedString);
  // close the PrintWriter and save the file
  writer.close();
}