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
			    				<h3>{{item.alt}}</h3>
			    			</a>
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
			color: #585757;
		}
</style>

<script type="es6">
	export default {
		 data(){
			return{
				branch_data:[
					{
						"alt":"宝宝游泳",
						"imgUrl":"../../static/images/serviceSystem/intelligenceDevelopment/intelligenceDevelopment_03.jpg"
					},
					{
						"alt":"宝宝抚触",
						"imgUrl":"../../static/images/serviceSystem/intelligenceDevelopment/intelligenceDevelopment_05.jpg"
					},
					{
						"alt":"宝宝早早教",
						"imgUrl":"../../static/images/serviceSystem/intelligenceDevelopment/intelligenceDevelopment_09.jpg"
					},
					{
						"alt":"宝宝沐浴",
						"imgUrl":"../../static/images/serviceSystem/intelligenceDevelopment/intelligenceDevelopment_10.jpg"
					},
					{
						"alt":"宝宝0~6个月全脑早教课",
						"imgUrl":"../../static/images/serviceSystem/intelligenceDevelopment/intelligenceDevelopment_13.jpg"
					},
					{
						"alt":"离院后儿保",
						"imgUrl":"../../static/images/serviceSystem/intelligenceDevelopment/intelligenceDevelopment_16.jpg"
					},
					{
						"alt":"宝宝全智评估",
						"imgUrl":"../../static/images/serviceSystem/intelligenceDevelopment/intelligenceDevelopment_19.jpg"
					}
				]
			}
		}
	}
</script>