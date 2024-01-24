<template>
<div>  
<div id="map" ref="mapCom"/>
<div id="popup" ref="mapContent" v-html="mapText" class="overlay"/>    
</div>
</template>

<script setup lang="ts">
import 'ol/ol.css'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Map, View, Feature, Overlay } from 'ol'
import { Point as olPoint } from 'ol/geom'
import { fromLonLat, transform } from 'ol/proj'
import { Style, Fill, Icon, Text } from 'ol/style'
import { onMounted, reactive, ref } from 'vue'


let zuida = 10
const props = defineProps({
guiji: {
   type: Array as PropType<Array<number>>,
   default: () => []
}
});
const mapView = reactive({
center: fromLonLat(props.guiji[0].long), // 地图中心点
zoom: 9, // 初始缩放级别
minZoom: 7, // 最小缩放级别
maxZoom: zuida // 最大缩放级别
})

let map = ref(null)
// 弹框
const overlay = ref(null)
const mapContent = ref(null)
const mapText = ref(null)
const mapCom = ref(null)
// const mapUrl = ref('http://127.0.0.1:9098/tiles/{z}/{x}/{y}.png')

const mapUrl = ref(`tiles/{z}/{x}/{y}.png`)

// 初始化地图
const init = () => {
const tileLayer = new TileLayer({
source: new XYZ({
   url: mapUrl.value
})
})
map.value = new Map({
layers: [tileLayer],
view: new View(mapView),
target: mapCom.value
})

// 循环将每个人都添加在地图上
props.guiji.forEach((v) => {
addLayer(v)
})

// 初始化地图之后就将弹框挂载好，后续只是修改显示的位置
createOverlay()
// 地图点击
map.value.on('click', (e) => mapClick(e))
// map.value.on('hover', (e) => mapClick(e))
}

// 添加点位
const addLayer = (v) => {
const layer = new VectorLayer({
source: new VectorSource()
})
// 添加图层
map.value.addLayer(layer)
// 创建 feature 坐标信息
const feature = new Feature({
// 经纬度转换成坐标信息
geometry: new olPoint(fromLonLat(v.long)),
// 可以带别的参数，key 可以随便写，不冲突就行，这里将所有的参数都放进来，供后续使用
...v
})
feature.setStyle(
new Style({
   // 标点的图片，如果要标不同类型的点，这个图片可以判断加
   image: new Icon({
      crossOrigin: 'anonymous',
      src: new URL('@/assets/point.png',
         import.meta.url).href
   }),
   // 标点的文字
   text: new Text({
      text: v.index+'',
      fill: new Fill({
         color: 'red'
      }),
      font: '15px Calibri'
      // offsetY: 15
   })
})
)
// 将 feature 坐标信息添加在地图上
layer.getSource().addFeatures([feature])
}
// 创建弹框
const createOverlay = () => {
overlay.value = new Overlay({
element: mapContent.value, // 将弹框挂载在 dom 上
autoPan: true, // 如果弹框显示不全则自动归位
positioning: 'bottom-center', // 相对于其位置属性的实际位置
stopEvent: true, // 事件冒泡
autoPanAnimation: {
   duration: 300 // 地图移动速度
}
})
map.value.addOverlay(overlay.value) // 将弹框添加到地图上
}
// 关闭弹框
const closeMapPopup = () => {
overlay.value.setPosition(undefined)
}
// 地图点击
const mapClick = (e) => {

const lonlat = transform(e.coordinate, 'EPSG:3857', 'EPSG:4326')
// 判断当前点击是否点击在图标上
const feature = map.value.forEachFeatureAtPixel(e.pixel, (feature) => feature)
if (feature) {
// 弹框内容
mapText.value = `<p>站点：${feature.values_.zdm}</p>
<p>时间：${feature.values_.time}</p>`
// 把 overlay 显示到指定的坐标位置
overlay.value.setPosition(fromLonLat(feature.values_.long))
// debugger
// var view = mapCom.getView();
// map.setZoom(zuida); //设置地图层级
// map.setCenter(fromLonLat(feature.values_.long));
} else {
// 弹框关闭
closeMapPopup()
}
}
onMounted(() => {
init()

})
</script>

<style scoped>
#map {
width: 100%;
height: 100%;
position: absolute;
}
.overlay {
position: absolute;
background-color: rgba(117, 172, 240, 0.596);
border: 1px solid #1a157c;
padding: 10px;
border-radius: 4px;
min-width: 220px;
font-size: 14px;
color:black;
}
</style>

