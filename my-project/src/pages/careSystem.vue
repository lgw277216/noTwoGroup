<template>
	<div>
		<!-- 新生儿护理正文内容 branch_container-->
	<div class="careSystem_container">
		<div class="container">
		<!-- 文字标题 -->
			<div class="Hf_title text-center">
	            <p>
				<span class="span_border"></span>
	            <span class="text">宝宝日常专业护理</span>
	            <span class="span_border"></span>
	            </p>
	            <span>Baby's daily professional care</span>
		    </div>
		    <!-- 图片展览 -->
		    <div class="careSystem_content">
		    	<ul class="careSystem_list text-center">
		    		<li v-for="item in careSystem_data">
	    				<img class="pre" :src="item.imgUrl">
	    				<h3>{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 图片展览结束 end -->
			</div>
		</div>
		<div class="careSystem_big_div">
			<img class="pre" src="../../static/images/serviceSystem/careSystem/careSystem_24.jpg">
			<div class="careSystem_big_div_word">
				<h3>儿科专家查房</h3>
				<p>Paediatrician Ward round</p>
			</div>
		</div>
		<div class="container clear">
		<!-- 文字标题 -->
			<div class="Hf_title text-center">
	            <p>
				<span class="span_border"></span>
	            <span class="text">宝宝日常专业护理</span>
	            <span class="span_border"></span>
	            </p>
	            <span>Baby's daily professional care</span>
		    </div>
		    <!-- 图片展览 -->
		    <div class="education_content">
		    	<ul class="education_list text-center">
		    		<li v-for="item in education_data">
	    				<img class="pre" :src="item.imgUrl">
	    				<h3>{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 图片展览结束 end -->
			</div>
		</div>
	</div>
	<!-- 正文内容结束 end -->
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
	.careSystem_content{
		margin-top: 1.125rem;
	}
	li h3{
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
		width: calc(50% - 0.2375rem);
		float:left;
		/*width:8.25rem;*/
		margin:0.3rem 0 0 0;
	}
	.education_list li img{
		height:100%;
		margin:0;
	}
	.education_list li:nth-child(2n){
		margin-left: 0.475rem;
	}
	.careSystem_big_div{
		width:100%;
		padding-top: 2rem;
		overflow: hidden;
		position: relative;
	}
	.careSystem_big_div_word{
		color:#fff;
		position: absolute;
		top:31%;
		left:4%;
	}
	.careSystem_big_div_word h3{
		margin-top:1.3rem;
		color:#fff;
		text-align: normal;
		font-size: 0.8rem;
		padding-left: .725rem;
		line-height: 1rem;
	}
	.careSystem_big_div_word p{
		margin-top:.5rem; 
		max-width: 5.75rem;
		line-height: 1rem;
		text-indent: 0;
		font-size: .6rem;
		margin-left: 0.2rem;
	}
</style>

<script type="es6">
	export default {
		 data(){
			return{
				careSystem_data:[
					{
						"alt":"黄疸监测",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_03.jpg"
					},
					{
						"alt":"五官护理",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_05.jpg"
					},
					{
						"alt":"红臀监测",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_07.jpg"
					},
					{
						"alt":"脐部护理",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_12.jpg"
					},
					{
						"alt":"入离院健康评估",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_14.jpg"
					},
					{
						"alt":"宝宝就医提醒",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_18.jpg"
					}
					,
					{
						"alt":"24小时育婴托管服务",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_19.jpg"
					}
					,
					{
						"alt":"24小时宝宝观察",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_20.jpg"
					}
				],
				education_data:[
					{
					"alt":"黄疸监测",
					"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_27.jpg"
					},
					{
						"alt":"五官护理",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_29.jpg"
					},
					{
						"alt":"红臀监测",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_34.jpg"
					},
					{
						"alt":"脐部护理",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_36.jpg"
					},
					{
						"alt":"入离院健康评估",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_40.jpg"
					},
					{
						"alt":"宝宝就医提醒",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_41.jpg"
					}
					,
					{
						"alt":"24小时育婴托管服务",
						"imgUrl":"../../static/images/serviceSystem/careSystem/careSystem_44.jpg"
					}
				]	
			}
		}
	}
</script>