exports.validate = (fieldObject) => {
  if(!fieldObject.content || !fieldObject.encryption_type){
    return false;
  }
  return true;
};

exports.encrypt_message = (content,encryption_type) => {
  if(encryption_type === "backwards"){
    return content.split("").reverse().join("");
  }else if(encryption_type === "letter-scramble"){
    let manipulated_content=[];
    for(let i=0;i<content.length;i++){
        manipulated_content.push(content.charCodeAt(i)+1);
    }
    return String.fromCharCode.apply(null, manipulated_content);
  }else if(encryption_type === "emo-gize"){
    let manipulated_content=[];
    for(let i=0;i<content.length;i++){
        manipulated_content.push(content.charCodeAt(i)-65+128512);
    }
    for(let i=0;i<manipulated_content.length;i++){
        manipulated_content[i]="&#"+manipulated_content[i]+";";
    }
    return manipulated_content.join("");
  }else if(encryption_type === "nothing"){
    return content;
  }
};

exports.decrypt_message = (content,encryption_type) => {
    if(encryption_type === "backwards"){
      return content.split("").reverse().join("");
    }else if(encryption_type === "letter-scramble"){
      let manipulated_content=[];
      for(let i=0;i<content.length;i++){
          manipulated_content.push(content.charCodeAt(i)-1);
      }
      return String.fromCharCode.apply(null, manipulated_content);
    }else if(encryption_type === "emo-gize"){
      let manipulated_content=content.split(";");
      for(let i=0;i<manipulated_content.length;i++){
        manipulated_content[i]=manipulated_content[i].slice(2);
      }
      for(let i=0;i<manipulated_content.length;i++){
        manipulated_content[i] = parseInt(manipulated_content[i])+65-128512;
      }
      return String.fromCharCode.apply(null, manipulated_content);
    }else if(encryption_type === "nothing"){
      return content;
    }
  };



