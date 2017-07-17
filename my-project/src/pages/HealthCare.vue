<template>
	<div class="careSystem_container">
		<div class="container">
		<!-- 文字标题 -->
			<div class="Hf_title text-center">
	            <p>
				<span class="span_border"></span>
	            <span class="text">中医营养调理</span>
	            <span class="span_border"></span>
	            </p>
	            <span>Nutrition regulate</span>
		    </div>
		    <!-- 新生儿早教图片展览 -->
		    <div class="education_content">
		    	<ul class="education_list text-center">
		    		<li>
		    		  	<span class="img_dashed">
	    					<img class="pre" src="../../static/images/serviceSystem/HealthCare/HealthCare_03.jpg">
	    				</span>
	    				<h3>药善调理</h3>
		    		</li>
		    		<li>
	    				<span class="img_dashed">
	    					<img class="pre" src="../../static/images/serviceSystem/HealthCare/HealthCare_05.jpg">
	    				</span>
	    				<h3>高档炖品</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 新生儿早教图片展览结束 end -->
		</div>

		<div class="container  clear">
		<!-- 文字标题 -->
			<div class="Hf_title text-center">
	            <p>
				<span class="span_border"></span>
	            <span class="text">生活护理</span>
	            <span class="span_border"></span>
	            </p>
	            <span>Life care</span>
		    </div>
		    <!-- 新生儿护理图片展览 -->
		    <div class="careSystem_content">
		    	<ul class="careSystem_list text-center">
		    		<li v-for="item of imgs1">
	    				<img class="pre" :src="item.imgUrl">
	    				<h3>{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 新生儿护理图片展览结束 end -->
		</div>

	</div>
</template>

<style type="text/css">
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
	.careSystem_content{
		margin-top: 1.125rem;
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
		width: calc(50% - 0.3rem);
		float:left;
		margin:0.3rem 0 0 0;
	}
	.education_list li img{
		width:100%;
		border-radius:6px;
		margin:0;
	}
	.education_list li:nth-child(2n){
		margin-left: 0.475rem;
	}

	.img_dashed{
		display:inline-block;
		padding:0.25rem;
		border:1px dashed #74c5be;
		border-radius:6px; 
	}
</style>

<script type="es6">
export default{
		name:'careSystem',
		data(){
			return{
				imgs1:[
					{
						"alt":"局部中医推拿",
						"imgUrl":"../../static/images/serviceSystem/HealthCare/HealthCare_10.jpg"
					},
					{
						"alt":"脾胃双调",
						"imgUrl":"../../static/images/serviceSystem/HealthCare/HealthCare_12.jpg"
					},
					{
						"alt":"头颈舒压",
						"imgUrl":"../../static/images/serviceSystem/HealthCare/HealthCare_14.jpg"
					},
					{
						"alt":"中药封包",
						"imgUrl":"../../static/images/serviceSystem/HealthCare/HealthCare_19.jpg"
					},
					{
						"alt":"中药头部清洁",
						"imgUrl":"../../static/images/serviceSystem/HealthCare/HealthCare_20.jpg"
					},
					{
						"alt":"特制中药水擦澡",
						"imgUrl":"../../static/images/serviceSystem/HealthCare/HealthCare_21.jpg"
					}
					,
					{
						"alt":"中药沐浴",
						"imgUrl":"../../static/images/serviceSystem/HealthCare/HealthCare_25.jpg"
					}
				],
				imgs2:[
					
				]
			}
		}
	}
</script>

