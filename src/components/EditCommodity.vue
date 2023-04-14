<template>
    <el-dialog :model-value="showDialog"
               @close="close"
               title="编辑商品" width="60%" align-center>
        <div class="good_details">
            <ul>
                <li>
                    <span>商品类型：</span>
                    <el-select v-model="value" class="m-2" placeholder="Select">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                        />
                    </el-select>
                    <el-input v-model="goodDetails.name" size="large" placeholder="请输入商品名称">
                        <template #prepend>商品名称:</template>
                    </el-input>
                </li>
                <li>
                    <span>商品价格：</span>
                    <el-input v-model.number="goodDetails.price" placeholder="请输入商品价格"/>
                </li>
                <li>
                    <span>商品描述：</span>
                    <el-input v-model="goodDetails.describe" placeholder="请输入商品描述"/>
                </li>
                <li>
                    <span>商品图</span>
                    <div class="img_head_box">
                        <div class="img_top">
                            <span>主图：</span>
                            <el-upload
                                    class="avatar-uploader"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                            >
                                <img v-if="imgTop" :src="$getImgUrl(imgTop)" class="avatar"/>
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus/>
                                </el-icon>
                            </el-upload>
                        </div>
                        <div class="img_top">
                            <span>顶图：</span>
                            <!-- 图片 -->
                            <el-upload
                                    class="avatar-uploader"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                            >
                                <img v-if="imgTop" :src="$getImgUrl(imgTop)" class="avatar"/>
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus/>
                                </el-icon>
                            </el-upload>
                        </div>
                        <div class="img_top">
                            <span>底图：</span>
                            <!-- 图片 -->
                            <el-upload
                                    class="avatar-uploader"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                            >
                                <img v-if="imgTop" :src="$getImgUrl(imgTop)" class="avatar"/>
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus/>
                                </el-icon>
                            </el-upload>
                        </div>
                    </div>
                </li>
                <li style="margin: 20px 0">
                    <span>轮播图： </span>
                    <el-upload
                            v-model:file-list="fileList"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <el-icon>
                            <Plus/>
                        </el-icon>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img :src="dialogImageUrl" alt="Preview Image"/>
                    </el-dialog>
                </li>
                <li>
                    <!--{{ goodDetails.imgDetailsFigure }}-->
                    <span>详情页图：</span>
                    <el-upload
                            v-model:file-list="fileList"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <el-icon>
                            <Plus/>
                        </el-icon>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img :src="dialogImageUrl" alt="Preview Image"/>
                    </el-dialog>
                </li>
                <li>
                    <!--{{ goodDetails.goodsItems }}-->
                    <span>加购图：</span>
                    <ul class="img_goods_box">
                        <li v-for="i in goodDetails.goodsItems">
                           <span>{{goodDetails.goodsItems[0].itemTitle}}</span>
                            <el-upload
                                    class="avatar-uploader"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                            >
                                <img v-if="imgTop" :src="$getImgUrl(imgTop)" class="avatar"/>
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus/>
                                </el-icon>
                            </el-upload>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="emits('update:showDialog',false)">Cancel</el-button>
                <el-button type="primary" @click="emits('update:showDialog',false)">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
/*分类下拉选择框*/
import {ref, getCurrentInstance} from "vue";
import {Plus} from '@element-plus/icons-vue'

const props = defineProps({
    showDialog: Boolean,
    goodDetails: Object
})
const emits = defineEmits(['update:showDialog']);//子传父
const close = () => {
    emits('update:showDialog', false)
    console.log(props.goodDetails)
}
//下拉菜单
const value = ref('日抛')
const options = [
    {
        value: '日抛',
        label: '日抛',
    },
    {
        value: '月抛',
        label: '月抛',
    },
    {
        value: '季抛',
        label: '季抛',
    },
    {
        value: '半年抛',
        label: '半年抛',
    },
]

//顶图
const imgTop = ref(props.goodDetails.imgTop);
//上传成功事件
const handleAvatarSuccess = (response, uploadFile) => {
    console.log(response, uploadFile);
}

/*
* 照片墙：轮播图，详情页
* */
//  goodDetails.imgShuffling==>图片
const fileList = ref([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
//删除事件
const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

//上传成功事件
const handlePictureCardPreview = (uploadFile) => {
    console.log(1)
    // dialogImageUrl.value = uploadFile.url!dialogVisible.value = true
}
</script>


<style scoped>
.avatar-uploader .avatar {
    width: 150px;
    height: 150px;
    display: block;
}

.img_head_box,.img_goods_box {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
}
.img_head_box>div,.img_goods_box>li{
    margin-right: 10px;
}

.good_details {
    overflow: auto;
}


.good_details li span {
    font-size: var(--text-xl);
}

.good_details li .el-input {
    padding-top: 6px;
    padding-bottom: 16px;

}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>