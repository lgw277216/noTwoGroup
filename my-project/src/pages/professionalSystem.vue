<template>
	<div>
		<!-- 分店正文内容 branch_container-->
		<div class="branch_container">
			<div class="container">
			    <!-- 分店介绍 -->
			    <div class="branch_content">
			    	<ul class="branch_list">
			    		<li v-for="item of branch_data">
			    			<a href="javascript:;">
			    				<img class="pre" :src="item.imgUrl">
			    			</a>
			    			<h3>{{item.alt}}</h3>
			    			<!-- {{item.next_url}} -->
			    		</li>
			    	</ul>
			    </div>
			    <!-- 分店介绍 end -->
			    <!-- 路由匹配到的组件将渲染在这里 -->
    			<router-view></router-view>
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
		color: #939495;
	}
</style>

<script type="es6">
	export default {
		 data(){
			return{
				branch_data:[
					{
						"alt":"新生儿健康护理",
						"next_url":"#/yunShan",
						"imgUrl":"../../static/images/serviceSystem/professionalSystem/professionalSystem_03.jpg"
					},
					{
						"alt":"中医调理保健",
						"next_url":"#/intelligenceDevelopment",
						"imgUrl":"../../static/images/serviceSystem/professionalSystem/professionalSystem_05.jpg"
					},
					{
						"alt":"产后妈妈康复",
						"next_url":"#/intelligenceDevelopment",
						"imgUrl":"../../static/images/serviceSystem/professionalSystem/professionalSystem_09.jpg"
					},
					{
						"alt":"母婴专业营养",
						"next_url":"#/intelligenceDevelopment",
						"imgUrl":"../../static/images/serviceSystem/professionalSystem/professionalSystem_10.jpg"
					},
					{
						"alt":"产后妈妈塑形美丽",
						"next_url":"#/intelligenceDevelopment",
						"imgUrl":"../../static/images/serviceSystem/professionalSystem/professionalSystem_13.jpg"
					},
					{
						"alt":"新生儿早期智力开发",
						"next_url":"#/intelligenceDevelopment",
						"imgUrl":"../../static/images/serviceSystem/professionalSystem/professionalSystem_14.jpg"
					},
					{
						"alt":"立体式院感防御",
						"next_url":"#/intelligenceDevelopment",
						"imgUrl":"../../static/images/serviceSystem/professionalSystem/professionalSystem_17.jpg"
					},
					{
						"alt":"全天候无缝安保体系",
						"next_url":"#/intelligenceDevelopment",
						"imgUrl":"../../static/images/serviceSystem/professionalSystem/professionalSystem_18.jpg"
					}
				]
			}
		}
	}
</script>