<template>
	<div>
		<!-- 分店正文内容 branch_container-->
		<div class="branch_container">
			<div class="container">
			    <!-- 分店介绍 -->
			    <div class="branch_content">
			    	<ul class="branch_list">
			    		<li v-for="item in branch_data">
			    			<a href="javascript:;">
			    				<img class="pre" :src="item.imgUrl">
			    			</a>
			    			<h3>{{item.alt}}</h3>
			    		</li>
			    	</ul>
			    </div>
			    <!-- 分店介绍 end -->
			</div>
		</div>
		<!-- 分店内容结束 end -->
	</div>
</template>
<style scoped>
	html,body{
		margin:0;
		padding: 0;
	}
	.branch_container{
		width:100%;
	}
	.branch_content{
		width:100%;
		overflow: hidden;
		margin-top: 1.125rem;
	}
	.branch_list{
		width:100%;
		list-style: none;
		margin:0;
		padding: 0;
	}
	.branch_list li{
		width: calc(50% - 0.2375rem);
		float:left;
		/*width:8.25rem;*/
		margin:0.3rem 0 0 0;
	}
	.branch_list li a img{
		height:100%;
		margin:0;
	}
	.branch_list li:nth-child(2n){
		margin-left: 0.475rem;
	}
	h3{
		color: #8a8b8c;
	}
</style>
<script type="es6">
	export default {
		 data(){
			return{
				branch_data:[
					{
						"alt":"体质评估分析",
						"imgUrl":"../../static/images/serviceSystem/nutritionSystem/nutritionSystem_03.jpg"
					},
					{
						"alt":"入住期间营养餐单设计",
						"imgUrl":"../../static/images/serviceSystem/nutritionSystem/nutritionSystem_05.jpg"
					},
					{
						"alt":"秘制月子水",
						"imgUrl":"../../static/images/serviceSystem/nutritionSystem/nutritionSystem_09.jpg"
					},
					{
						"alt":"粤式月子餐每天6餐",
						"imgUrl":"../../static/images/serviceSystem/nutritionSystem/nutritionSystem_11.jpg"
					},
					{
						"alt":"药膳调理",
						"imgUrl":"../../static/images/serviceSystem/nutritionSystem/nutritionSystem_16.jpg"
					},
					{
						"alt":"高档炖品",
						"imgUrl":"../../static/images/serviceSystem/nutritionSystem/nutritionSystem_18.jpg"
					},
					
				]
			}
		}
	}
</script>