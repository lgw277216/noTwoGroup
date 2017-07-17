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
			width: calc(33.33333333% - 0.25rem);
			float:left;
			/*width:8.25rem;*/
			margin:0.3rem 0 0 0;
		}
		.branch_list li a img{
			height:100%;
			margin:0;
		}
		.branch_list li:nth-child(n){
			margin-right: 0.25rem;
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
						"alt":"紫外线灯管消毒",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_03.jpg"
					},
					{
						"alt":"沐浴室消毒",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_05.jpg"
					},
					{
						"alt":"育婴室消毒",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_07.jpg"
					},
					{
						"alt":"配奶间消毒",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_12.jpg"
					},
					{
						"alt":"母婴同室消毒",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_13.jpg"
					},
					{
						"alt":"早教室消毒",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_14.jpg"
					},
					{
						"alt":"育婴室感染管理",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_18.jpg"
					},
					{
						"alt":"生物环境检测",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_19.jpg"
					},
					{
						"alt":"特制中药水擦澡",
						"imgUrl":"../../static/images/serviceSystem/defenseSystem/defenseSystem_20.jpg"
					}
					
				]
			}
		}
	}
</script>