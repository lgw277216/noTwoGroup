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
		color: #585757;
	}
</style>
<script type="es6">
	export default {
		 data(){
			return{
				branch_data:[
					{
						"alt":"安保团队",
						"imgUrl":"../../static/images/serviceSystem/securitySystem/securitySystem_03.jpg"
					},
					{
						"alt":"24小时监控",
						"imgUrl":"../../static/images/serviceSystem/securitySystem/securitySystem_06.jpg"
					},
					{
						"alt":"出入登记",
						"imgUrl":"../../static/images/serviceSystem/securitySystem/securitySystem_10.jpg"
					},
					{
						"alt":"停车位",
						"imgUrl":"../../static/images/serviceSystem/securitySystem/securitySystem_11.jpg"
					},
					{
						"alt":"独栋物业",
						"imgUrl":"../../static/images/serviceSystem/securitySystem/securitySystem_14.jpg"
					}
				]
			}
		}
	}
</script>