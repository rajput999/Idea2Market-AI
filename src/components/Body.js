import React, { useState } from 'react'
import classes from './Body.module.css'
import loading from './loading.gif'
import loader2 from './loader2.gif'


const Body = () => {
    const [textInput, setTextInput] = useState('');
    const [imge,setimg] = useState("https://i.postimg.cc/6QczqnpG/Screenshot-2024-02-10-at-12-14-03-AM.png");
    const [recRslt, set_recRslt] = useState('');
    const [recLoader,set_recLoader] = useState();
    const [image_url,setImg_url] = useState('/');

    const isJSONString = (str) => {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    };

    const handleclick= async()=>{
        setImg_url('/');
        set_recRslt('');
        if(textInput===''){
            alert('Enter Promt')
            return
        }
        setimg(loading);
        set_recLoader(loader2);
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    Authorization : `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    "User-Agent" : "Chrome",
                },
                body:JSON.stringify({
                    prompt: `logo related to ${textInput}`,
                    n:1,
                    size: "1024x1024",
                }),
            }
        );

        const recBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            {
              "role": "system",
              "content": "You are a helpful assistant."
            },
            {
              "role": "system",
              "content": "Always Give the result as JSON object format and always give result inside the square bracket"
            },
            {
              "role": "user",
              "content": "Always Give atleast 2 object suggestion"
            },
            {
              "role": "assistant",
              "content": "Always Give atleast 2 object suggestion"
            },
            {
              "role": "user",
              "content": "Always Give the result as product name related to the promt and then description of it"
            },
            {
              "role": "user",
              "content": "follow this strictly Don't give anything other than JSON object"
            },
            {
              "role": "assistant",
              "content": "Always Give the result as JSON object format and always give result inside the square bracket"
            },
            {
              "role": "user",
              "content": "Always Give the result as JSON object format and always give result inside the square bracket"
            },
            {
              "role": "user",
              "content": `${textInput}`
            }
          ]
        }

        const recRes = await fetch("https://api.openai.com/v1/chat/completions",{
          method: "POST",
          headers:{
            "Content-type":"application/json",
            Authorization : `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify(recBody),
        })
        const recData= await recRes.json();
        console.log(recData.choices[0].message.content);
        var check = isJSONString(recData.choices[0].message.content);
        if(check){
          set_recRslt((JSON.parse(recData.choices[0].message.content)));
        }else{
          alert("Response is not the JSON string try again with some different Promt");
          set_recLoader();
        }

        let data = await response.json();
        let data_array= data.data;
        setImg_url(data_array[0].url)
        console.log(data)
    }

    const handleChange = async(event) => {
        if(event.target.value==='') return 0;
        setTextInput(event.target.value);
    }

  return (
    <div className={classes.body_total}>
        <div className={classes.m_body}>
            <div className={classes.search}>
                <div className={classes.main_input}>
                    <input onChange={handleChange} placeholder="Type a message..." className={classes.input} />
                    <div className={classes.image_gen}>
                        <img src={image_url==='/'?imge:image_url} className={classes.img_gen} alt="Generated Image"/>
                    </div>
                </div>
                <div className={classes.gen_btn}>
                    <div onClick={handleclick}>Generate</div> 
                </div>
            </div>
            <div className={classes.rec_main}>
                <div>
                    {
                      recRslt===''?<img src={recLoader} style={{height: "10vh",marginTop: "10vh"}} alt="Image2"/>
                      :<div>
                        {recRslt.map((item,index)=>{
                          const ar_item=Object.values(item)
                          return(
                            <div key={index} className={recRslt===''?classes.none:classes.rec_body}>
                              <div className={classes.prdtName} style={{fontWeight:"bolder"}}>-&gt;{ar_item[0]}</div>
                              <br/> 
                              <div className={classes.prdtDesc}>{ar_item[1]}</div>
                            </div>
                          )
                        })}
                        </div>
                    }
                </div>
            </div>  
        </div>
    </div>
    
  )
}

export default Body