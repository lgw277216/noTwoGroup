<template>
	<div>
		<!-- 正文内容 -->
	<div class="careSystem_container">

		<div class="container">
		<!-- 文字标题 -->
			<div class="Hf_title text-center">
	            <p>
				<span class="span_border"></span>
	            <span class="text">美容项目</span>
	            <span class="span_border"></span>
	            </p>
	            <span>Beauty project</span>
		    </div>
		    <!-- 新生儿早教图片展览 -->
		    <div class="education_content">
		    	<ul class="education_list text-center">
		    		<li>
		    		  	<span class="img_dashed">
	    					<img class="pre img_radius" src="../../static/images/serviceSystem/plasticBeauty/plasticBeauty_03.jpg">
	    				</span>
	    				<h3>面部基础护理</h3>
		    		</li>
		    		<li>
	    				<span class="img_dashed">
	    					<img class="pre img_radius" src="../../static/images/serviceSystem/plasticBeauty/plasticBeauty_05.jpg">
	    				</span>
	    				<h3>面部高级抗衰全套护理</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 新生儿早教图片展览结束 end -->
			</div>
		</div>
		<div class="container  clear">
		<!-- 文字标题 -->
			<div class="Hf_title text-center">
	            <p>
				<span class="span_border"></span>
	            <span class="text">形体恢复</span>
	            <span class="span_border"></span>
	            </p>
	            <span>Body recovery</span>
		    </div>
		    <!-- 新生儿护理图片展览 -->
		    <div class="careSystem_content">
		    	<ul class="education_list text-center">
		    		<li v-for="item in careSystem_data">
		    			<a href="javascript:;">
		    				<img class="pre" :src="item.imgUrl">
		    			</a>
		    			<h3>{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 新生儿护理图片展览结束 end -->
			</div>
		</div>
	</div>
	<!-- 新生儿护理内容结束 end -->
	</div>
</template>

<style scoped>
	html,body{
			margin:0;
			padding: 0;
		}
		.clear{
			clear:both;
		}
		.careSystem_list {
			width:100%;
		}
		.careSystem_list li{
			width:calc(33.3333% - .333rem);
			float: left;
			margin-left: .5rem;
		}
		.careSystem_list li:nth-child(3n+1){
			margin-left:0;
		}
		.careSystem_list li img{
			margin:0;
		}
		li p{
			font-size: .6rem;
			text-align: center;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			text-indent: 0;
			margin-top: 0;
		}
		.education_content{
			width:100%;
			overflow: hidden;
			margin-top: 1.125rem;
		}
		.education_list{
			width:100%;
			list-style: none;
			margin:0;
			padding: 0;
		}
		.education_list li{
			width: calc(50% - 0.5rem);
			float:left;
			margin:0.3rem 0 0 0;
		}
		.education_list li img{
			width:100%;
			margin:0;
		}
		.img_radius{		
			border-radius:0.2rem;
		}
		.education_list li:nth-child(2n){
			margin-left: 1rem;
		}

		.img_dashed{
			display: inline-block;
			padding:0.25rem;
			border:1px dashed #74c5be;
			border-radius:6px; 
		}
		.careSystem_content{
			margin-top: 1.125rem;
		}
</style>

<script type="es6">
	export default {
		 data(){
			return{
				careSystem_data:[
					{
						"alt":"软光子腰腹部收紧",
						"imgUrl":"../../static/images/serviceSystem/plasticBeauty/plasticBeauty_10.jpg"
					},
					{
						"alt":"全身十二经络疏通",
						"imgUrl":"../../static/images/serviceSystem/plasticBeauty/plasticBeauty_13.jpg"
					},
					{
						"alt":"仪器盆底肌修复",
						"imgUrl":"../../static/images/serviceSystem/plasticBeauty/plasticBeauty_17.jpg"
					},
					{
						"alt":"骨盆矫正",
						"imgUrl":"../../static/images/serviceSystem/plasticBeauty/plasticBeauty_18.jpg"
					}
				]
			}
		}
	}
</script>