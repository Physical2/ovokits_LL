<template>
  <div class="translator">
    <!-- 标题 -->
    <header class="header">
      <h1>LL翻译</h1>
    </header>

    <!-- 选择翻译类型 -->
    <div class="translation-options">
        <button :class="{ active: translationType === 'text'}"
                @click="setTranslationType('text')">
          文字
        </button>
        <button :class="{ active: translationType === 'file'}"
                @click="setTranslationType('file')">
          文件
        </button>
        <button :class="{ active: translationType === 'image'}"
                @click="setTranslationType('image')">
          图片
        </button>
        <button :class="{ active: translationType === 'website'}"
                @click="setTranslationType('website')">
          网站
        </button>
    </div>

    <!-- 翻译功能 -->
     <div v-if="translationType === 'text'" class="translation-container">
          <!-- 输入待翻译语言 -->
          <div class="input-section">
            <div class="detected-language">
              检测语言 - {{ detectedLanguage || "检测中..."}}
            </div>
            <textarea v-model="text" placeholder="请输入要翻译的内容" rows="10"></textarea>
          </div>

          <!-- 中间交换按钮 -->
           <div class="swap-button">
              <button @click="swapText">⇄</button>
           </div>

         <!--选择目标语言  -->
         <!-- <div class="controls">
            <select v-model="targetLanguage">
                <option value="en">英语</option>
                <option value="zh">汉语</option>
                <option value="ko">朝鲜语</option>
                <option value="spa">西班牙语</option>
                <option value="fra">法语</option>
                <option value="de">德语</option> -->
                <!-- 待添加更多语言选项 -->
            <!-- </select> -->
            <!-- 翻译按钮 -->
          <!-- <button @click="transText">百度翻译</button> -->
         <!-- </div> -->

         <!-- 右侧翻译结果 -->
         <div class="output-section">
            <div class="target-language">
              目标语言
              <select v-model="targetLanguage" @change="autoTranslate">
                <option value="en">英语</option>
                <option value="zh">汉语</option>
                <option value="ko">朝鲜语</option>
                <option value="spa">西班牙语</option>
                <option value="fra">法语</option>
                <option value="de">德语</option>
              </select>
            </div>
            <textarea readonly :value="translatedText_1" placeholder="翻译结果将在这里展示" rows="10">

            </textarea>
         </div>     
     </div>

     <!-- 图片翻译 -->
      <div v-if="translationType==='image'" class="translation-image">
        <p>待开发...</p>
      </div>

      <!-- 文件翻译 -->
      <div v-if="translationType==='file'" class="translation-file">
        <p>待开发...</p>`
      </div>

      <!-- 网站翻译 -->
      <div v-if="translationType==='website'" class="translation-website">
        <p>待开发...</p>
      </div>
     
    
    <!-- 查询输入框 -->
    <!-- <input v-model="text" placeholder="请输入要翻译的内容" /> -->
    <!-- 选择目标语言 -->
    <!-- <select v-model="targetLanguage">
      <option value="en">英语</option>
      <option value="zh">汉语</option> -->
      <!-- <option value="ko">朝鲜语</option> -->
      <!-- <option value="spa">西班牙语</option>
      <option value="fra">法语</option>
      <option value="de">德语</option> -->
      <!-- 待添加更多语言选项 -->
    <!-- </select> -->

    <!-- 翻译按钮 -->
    <!-- <button @click="translateText">Deepl翻译</button>
    <button @click="transText">百度翻译</button> -->


    <!-- 翻译结果 -->
    <!-- <div v-if="translatedText_1" class="result"> -->
      <!-- <h2>DeepL翻译结果</h2>
      <p>{{ translatedText }}</p> -->
<!-- 
      <h2>百度翻译结果</h2>
      <p>{{ translatedText_1 }}</p>
    </div> -->
  </div>
</template>

<script setup>
import axios from 'axios';
import md5 from 'md5';
import { ref } from 'vue'


const text = ref('')
const targetLanguage = ref('en')
// const translatedText = ref('')
const translatedText_1 = ref('')
const detectedLanguage = ref('') //检测到的语言
// const sourceLanguage = ref('')  //识别输入内容的语言
const translationType = ref('text') //当前翻译类型，默认为文字

const appid = '20241106002195901'
const key = 'CGnCZrdxYoOplaNBEK8Q'

// const Deepl_AuthKey = '995e054d-bb05-4d08-a2d2-439c47880c0d:dp'

// 翻译文本
// const translateText = async () => {

//     if(!text.value){
//         translatedText.value = "请输入内容进行翻译！";
//         return;
//     }

//     try{
//         const response = await axios.post(
//             'https://api.deepl-pro.com/v2/translate',
            
//             new URLSearchParams({
//                 text: text.value,
//                 target_lang: targetLanguage.value
//             }),
            
//             {
//                 headers:{
//                     'Authorization': `DeepL-Auth-Key ${Deepl_AuthKey}`,
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 }
//             }
//         );
//         translatedText.value = response.data.translations[0].text;
//         sourceLanguage.value = response.data.translations[0].detected_source_language;
      

//     }catch (error) {
//     console.error("翻译失败:", error.message);
//     translatedText.value = "翻译失败，请重试。";
//     sourceLanguage.value = '';
//     }
// }

//设置翻译类型
const setTranslationType = (type) => {
    translationType.value = type;
}

const getSign = (salt) => {
    const signString = appid + text.value + salt + key;
    console.log("signString: ", signString);
    const resSign = md5(signString);
    console.log("resSign: ", resSign);
    return resSign;
};


const autoTranslate = async () =>{
    if(!text.value){
        translatedText_1.value = "请输入内容进行翻译！";
        return;
    }

    try{
        const salt = Date.now().toString();
        
        const response = await axios.post(
            // 'https://fanyi-api.baidu.com/api/trans/vip/translate',
            '/api/api/trans/vip/translate',
            {
              appid: appid,
            //   q: encodeURIComponent(text.value),
              q: text.value,
              from: 'auto',
              to: targetLanguage.value,
              salt: salt,
              sign: getSign(salt),
            },
            {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        console.log("翻译结果: ", response.data);
        translatedText_1.value = response.data.trans_result[0].dst;
        //更新检测到的语言
        detectedLanguage.value = response.data.trans_result[0].src;
    }catch (error) {
    console.error("翻译失败:", error.message);
    translatedText_1.value = "翻译失败，请重试。";
    // sourceLanguage.value = '';
    detectedLanguage.value = '';
    }
}

//交换输入和输出文本
const swapText = () => {
    const temp = text.value;
    text.value = translatedText_1.value;
    translatedText_1.value = temp;
    targetLanguage.value = detectedLanguage.value || "en";
    autoTranslate();
}


</script>

<style scoped>

.translator {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  text-align: center;
}

.header h1 {
  color: #4285f4;
  font-size: 2rem;
}

.translation-options {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.translation-options button {
  padding: 10px 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.translation-options button.active {
  background-color: #4285f4;
  color: white;
}

.translation-container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.input-section,
.output-section {
  flex: 1;
}

.swap-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

textarea {
  width: 100%;
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea[readonly] {
  background-color: #f5f5f5;
}

.detected-language,
.target-language {
  margin-bottom: 10px;
  font-weight: bold;
  text-align: left;
}

.swap-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swap-button button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 1.5rem;
  padding: 5px 15px;
  cursor: pointer;
}

</style>