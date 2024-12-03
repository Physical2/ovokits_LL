<template>
  <div class="container">
    <div class="aside">
      <div>翻译</div>
      <el-divider />
      <div>润色</div>
    </div>
    <el-divider direction="vertical"  class="divider1"/>
    <div class="main">
      <div class="menu">
        <div class="menu1">文本</div>
        <el-divider direction="vertical" class="divider2"/>
        <div>文件</div>
        <el-divider direction="vertical" class="divider2" />
        <div>图片</div>
      </div>
      <el-divider class="divider3"/>
      <div class="content">

        <div class="input">
          <div class="from-language">
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="input-area">
            <el-input
              v-model="textarea"
              style="width: 30vw"
              :rows="12"
              type="textarea"
              placeholder="Please input"
            />
          </div>
        </div>

        <!-- <el-divider class="divider4"/> -->

        <div class="output">
          <div class="to-language">
            <el-select
              v-model="value"
              placeholder="Select"
              size="large"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="output-area">
            1111
          </div>
        </div>
          
          
        
        
      </div> 
    </div>
  </div>


 
</template>

<script setup>
// import { ElDivider } from 'element-plus'; 
import { ref } from 'vue';
// import { ElSelect} from 'element-plus';
// import { ElOption } from 'element-plus';
// import { ElInput } from 'element-plus';

const value = ref('');
const textarea = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

</script>

<style scoped>
.input{
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  
}
.input-area{
  margin-top:15px;
  width: 30vw;
  height: 45vh;
  
}
.output{
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  
}
.output-area{
  margin-top:15px;
  width: 30vw;
  height: 45vh;
  border: 2px solid rgba(36, 35, 35, 0.502);
}
.content{
  display: flex;
  margin-left: 50px ;
  margin-right: 50px;
}

.divider4{
 
  background-color:darkmagenta;
  border-radius: 5px;

  /* margin-top: -2px; */
}

.container {
  display: flex;
  height: 100vh;
}
.aside {
  width: 200px;
  /* background-color:aqua; */
  margin-top: 50px;
  /* text-align: center; */
}
.main {
  flex: 1;
  /* background-color: bisque; */
  display: flex;
  flex-direction: column;
}
.menu {
  display: flex;
  /* background-color: #67C23A; */
  text-align: center;

  /* margin: auto; */
  /* margin-top: 50px; */
  /* text-align: center; */
}
.menu div {
  /* flex: 1; */
  text-align: center;
  margin-top: 10px;
  /* background-color: #67C23A; */
  /* border: 1px solid #67C23A; */
  /* border-radius: 5px; */
  /* margin-left: 10px; */
  /* margin-right: 10px; */
}
.menu1{
  margin-left: 50px;
}

.divider3{
  /* height: 100%; */
  /* background- color: aquamarine; */
  border-radius: 5px;
  margin-top: -2px;
}
.divider2{
  /* height: 70%; */
  /* margin-top: 50px; */
  margin-bottom: 20px;
  /* background-color: #409EFF; */
  /* border: 1px solid #409EFF;s */
  border-radius: 5px;
  margin-left: 50px;
  margin-right: 50px;
}
.divider1{
  height: 100%;
  /* margin-top: 50px; */
  margin-bottom: 50px;
  /* background-color: #409EFF; */
  /* border: 1px solid #409EFF;s */
  border-radius: 5px;
  /* margin-left: 10px; */
  /* margin-right: 10px; */
}



</style>
