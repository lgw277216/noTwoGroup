<template>
	<div>
		<!-- 分店正文内容 branch_container-->
		<div class="branch_container">
			<div class="container">
			<!-- 文字标题 -->
				<div class="title text-center">
		            <p>
					<span class="left"></span>
		            <span class="text">分店介绍</span>
		            <span class="right"></span>
		            </p>
		            <span>Branch</span>
			    </div>
			    <!-- 分店介绍 -->
			    <div class="branch_content">
			    	<ul class="branch_list">
			    		<li v-for="item in branch_data">
			    			<router-link to="/yunShan">
			    				<img class="pre" :src="item.imgUrl">
			    			</router-link>
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
		margin-bottom: 0.475rem;
	}
	.branch_list li a img{
		height:100%;
		margin:0;
	}
	.branch_list li:nth-child(2n){
		margin-left: 0.475rem;
	}
</style>

<script type="es6">
	export default {
		 data(){
			return{
				branch_data:[
				{
					"imgUrl":"../../static/images/Branch/branch/branch_03.jpg"
				},
				{
					"imgUrl":"../../static/images/Branch/branch/branch_05.jpg"
				},
				{
					"imgUrl":"../../static/images/Branch/branch/branch_09.jpg"
				},
				{
					"imgUrl":"../../static/images/Branch/branch/branch_10.jpg"
				},
				{
					"imgUrl":"../../static/images/Branch/branch/branch_13.jpg"
				},
				{
					"imgUrl":"../../static/images/Branch/branch/branch_14.jpg"
				}
			]
			}
		}
	}
</script>
