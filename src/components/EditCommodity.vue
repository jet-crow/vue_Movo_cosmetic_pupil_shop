<template>
    <el-dialog :model-value="showDialog"
               @close="close"
               title="编辑商品" width="60%" align-center>
        <div class="good_details">
            <ul>
                <li>
                    <span>商品类型：</span>
                    <el-select v-model="goodDetails.classId" class="m-2" placeholder="Select">
                        <el-option
                                v-for="item in options"
                                :key="item.classId"
                                :label="item.cname"
                                :value="item.classId"
                        />
                    </el-select>
                    <el-input v-model="goodDetails.gname" size="large" placeholder="请输入商品名称">
                        <template #prepend>商品名称:</template>
                    </el-input>
                </li>
                <li>
                    <span>商品价格：</span>
                    <el-input v-model.number="goodDetails.price" placeholder="请输入商品价格"/>
                </li>
                <li>
                    <span>商品描述：</span>
                    <el-input v-model="goodDetails.introduce" placeholder="请输入商品描述"/>
                </li>
                <li>
                    <span>商品图</span>
                    <div class="img_head_box">
                        <div class="img_top">
                            <span>主图：</span>
                            <el-upload
                                    class="avatar-uploader"
                                    :limit="1"
                                    :show-file-list="false"
                                    :on-change="(file, fileList) => {handleChange(file, fileList, 'mainImg')}"
                                    :auto-upload="false"
                            >
                                <img v-if="goodDetails.mainImg" :src="$getImgUrl(goodDetails.mainImg)" class="avatar"/>
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
                                    :limit="1"
                                    :show-file-list="false"
                                    :on-change="(file, fileList) => {handleChange(file, fileList, 'topImg')}"
                                    :auto-upload="false"
                            >
                                <img v-if="goodDetails.topImg" :src="$getImgUrl(goodDetails.topImg)" class="avatar"/>
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
                                    :limit="1"
                                    :show-file-list="false"
                                    :on-change="(file, fileList) => {handleChange(file, fileList, 'bottomImg')}"
                                    :auto-upload="false"
                            >
                                <img v-if="goodDetails.bottomImg" :src="$getImgUrl(goodDetails.bottomImg)"
                                     class="avatar"/>
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
                            v-model:file-list="goodDetails.shufflingFigure"
                            list-type="picture-card"
                            :auto-upload="false">
                        <el-icon>
                            <Plus/>
                        </el-icon>
                    </el-upload>
                </li>
                <li>
                    <!--{{ goodDetails.imgDetailsFigure }}-->
                    <span>详情页图：</span>
                    <el-upload
                            v-model:file-list="goodDetails.detailsFigure"
                            list-type="picture-card"
                            :auto-upload="false">
                        <el-icon>
                            <Plus/>
                        </el-icon>
                    </el-upload>
                </li>
                <li>
                    <!--{{ goodDetails.goodsItems }}-->
                    <span>加购图：</span>
                    <div>
                        <el-input v-for="i in goodDetails.goodTypes" v-model="i.name" placeholder="Please input"
                                  style="width: 147px;margin-right: 8px;"/>
                    </div>
                    <ul class="img_goods_box">
                        <el-upload
                                v-model:file-list="goodDetails.goodTypes"
                                list-type="picture-card"
                                :auto-upload="false">
                            <el-icon>
                                <Plus/>
                            </el-icon>
                        </el-upload>
                    </ul>
                </li>
            </ul>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="emits('update:showDialog',false)">Cancel</el-button>
                <el-button type="primary" @click="submit">
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
import { ElMessage } from "element-plus";

const {proxy} = getCurrentInstance();
const props = defineProps({
    showDialog: Boolean,
    goodId: Number,
})
const emits = defineEmits(['update:showDialog']);//子传父
const close = () => {
    emits('update:showDialog', false)
}
//商品详情
const goodDetails = ref({
    "bottomImg": "",
    "classId": 1,
    "mainImg": "",
    "detailsFigure": [],
    "shufflingFigure": [],
    "introduce": "",
    "price": '',
    "goodTypes": [],
    "gname": "",
    "topImg": ""
});
//请求商品详情
if (props.goodId !== 0) {
    proxy.$api.get("/goods/goodInfo?goodId=" + props.goodId).then(r => {
        goodDetails.value = r.data;
        goodDetails.value.shufflingFigure = r.data.shufflingFigure.map(i => {
            return {
                url: proxy.$getImgUrl(i),
            }
        })
        goodDetails.value.detailsFigure = r.data.detailsFigure.map(i => {
            return {
                url: proxy.$getImgUrl(i)
            }
        })
        goodDetails.value.goodTypes = r.data.goodTypes.map(i => {
            return {
                url: proxy.$getImgUrl(i.img),
                name: i.name
            }
        })
        // console.log(goodDetails.value);
    });
}

//下拉菜单
let options = ref([]);
proxy.$api.get("/goods/admin/classAll").then(r => {
    options.value = r.data
})

//顶图
//上传的Data
let uploadData = ref(new FormData());

//主图顶图底图的图片替换
function handleChange(file, _, key) {
    // console.log(file.raw)
    uploadData.value.append(key, file.raw);
    // console.log(uploadData.value.get(key));
    const reader = new FileReader();
    reader.readAsDataURL(file.raw);
    reader.onload = function (e) {
        // this.result // 这个就是base64编码了
        goodDetails.value[key] = this.result;
    }
}

//轮播图监听==>轮播图的图片

const submit = () => {
    //轮播图
    let shufflingFigureFiles = []//上传的文件
    let shufflingFigure = []//本身就有的数据==>添加它为最终传输的文本数据
    for (let s of goodDetails.value.shufflingFigure) {
        if (s.raw != null) {
            shufflingFigureFiles.push(s.raw);
        } else {
            shufflingFigure.push(s.url.substring(9, s.url.length));
        }
    }
    //详情图
    let detailsFigureFiles = []//上传的文件
    let detailsFigure = []//本身就有的数据==>添加它为最终传输的文本数据
    for (let s of goodDetails.value.detailsFigure) {
        if (s.raw != null) {
            detailsFigureFiles.push(s.raw);
        } else {
            detailsFigure.push(s.url.substring(9, s.url.length));
        }
    }
    //加购图
    let goodTypesFiles = []//上传的文件
    let goodTypes = []//本身就有的数据==>添加它为最终传输的文本数据
    let goodTypesFilesNames = []//后面上传的名字
    for (let s of goodDetails.value.goodTypes) {
        if (s.raw != null) {
            goodTypesFiles.push(s.raw);//需要上传的文件
            goodTypesFilesNames.push(s.name);
        } else {
            goodTypes.push({
                name: s.name,
                img: s.url.substring(9, s.url.length),
            });
        }
    }
    // console.log(goodTypes, goodTypesFilesNames);
    //上传的图片
    for (let s of shufflingFigureFiles) {
        uploadData.value.append("shufflingFigure", s);
    }
    for (let d of detailsFigureFiles) {
        uploadData.value.append("detailsFigure", d);
    }
    for (let g of goodTypesFiles) {
        uploadData.value.append("gTypeList", g);
    }
    uploadData.value.append("classId", goodDetails.value.classId);
    uploadData.value.append("goodId", proxy.goodId);
    console.log(goodDetails.value)
    //上传图片
    proxy.$api.post("/goods/admin/uploadGoodsImages", uploadData.value).then(r => {
        console.log(r.data);
        let goods = {
            "gname": goodDetails.value.gname,
            "introduce": goodDetails.value.introduce,
            "price": goodDetails.value.price,
            "mainImg": r.data.mainImg,
            "topImg": r.data.topImg,
            "shufflingFigure": JSON.stringify(r.data.shufflingFigure),
            "bottomImg": r.data.bottom,
            "detailsFigure": JSON.stringify(r.data.detailsFigure),
            "classId": goodDetails.value.classId
        }
        let goodTypesList = [];
        for (let i = 0; i < goodTypesFilesNames.length; i++) {
            goodTypesList.push({
                "name": goodTypesFilesNames[i],
                "img": r.data.gTypeList[i],
            })
        }
        console.log({
            goods: goods,
            goodTypesList: goodTypesList
        });
        // 添加商品
        if (props.goodId === 0) {
            proxy.$api.post("/goods/admin/addGoodsData", {
                goods: goods,
                goodTypesList: goodTypesList
            }).then(rAdd => {
                console.log("添加成功")
                proxy.$showSuccessToast('添加成功');
                console.log(rAdd);
            });
        } else {//修改商品
            console.log("修改商品")
            if (r.data.shufflingFigure != null) {
                for (const s of r.data.shufflingFigure) {
                    shufflingFigure.push(s);
                }
            }
            if (r.data.detailsFigure != null) {
                for (const d of r.data.detailsFigure) {
                    detailsFigure.push(d);
                }
            }
            for (let i = 0; i < goodTypesFilesNames.length; i++) {
                goodTypes.push({
                    "name": goodTypesFilesNames[i],
                    "img": r.data.gTypeList[i],
                })
            }
            goodTypes = goodTypes.map(i => {
                return {
                    "name": i.name,
                    "img": i.img,
                    "goodId": props.goodId
                }
            })
            goods.shufflingFigure = JSON.stringify(shufflingFigure);
            goods.detailsFigure = JSON.stringify(detailsFigure);
            goodTypesList = goodTypes;
            goods.goodId = props.goodId;
            console.log(goods, goodTypesList);
            proxy.$api.post("/goods/admin/updateGoodsData", {
                goods: goods,
                goodTypesList: goodTypesList
            }).then(rAdd => {
            proxy.$showSuccessToast('修改成功');
                console.log(rAdd);
            });
        }
    });
    emits('update:showDialog', false)
};

</script>


<style scoped>
.avatar-uploader .avatar {
    width: 150px;
    height: 150px;
    display: block;
}

.img_head_box, .img_goods_box {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
}

.img_head_box > div, .img_goods_box > li {
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