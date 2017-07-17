<template>
	<div class="branch_container">
		<div class="container">
		<!-- 文字标题 -->
			<div class="title text-center">
	            <p>
				<span class="left"></span>
	            <span class="text">通乳服务</span>
	            <span class="right"></span>
	            </p>
	            <span>Milk services</span>
		    </div>
		    <!-- 通乳服务 -->
		    <div class="branch_content">
		    	<div class="milkServices border-radius">
		    		<img src="../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_03.jpg" alt="" class="pre">
		    	</div>
		    </div>
		    <!-- 通乳服务 end -->

			<!-- 文字标题 -->
		    <div class="title text-center">
	            <p>
				<span class="left"></span>
	            <span class="text">专家查房</span>
	            <span class="right"></span>
	            </p>
	            <span>Specialist ward round</span>
		    </div>
		    <!-- 专家查房 -->
		    <div class="branch_content">
		    	<ul class="branch_list branch_Specialist">
		    		<li v-for="item of imgs1">
		    			<a href="javascript:;">
		    				<img class="pre border-radius" :src="item.imgUrl">
		    			</a>
		    			<h3 class="text_overflow">{{item.alt}}</h3>
		    		</li>
		    	</ul>
		 	</div>
		  <div class="title text-center">
	            <p>
				<span class="left" style="margin-left: 4.2rem"></span>
	            <span class="text">身体功能性修复</span>
	            <span class="right" style="margin-left: -5.7rem;"></span>
	            </p>
	            <span>Physical function repair</span>
		    </div>
		    <!-- 身体功能性修复 -->
		    <div class="branch_content">
		    	<ul class="branch_list1 branch_repair">
		    		<mt-swipe :show-indicators="false">
					  	<li v-for="item of imgs3">
					  	<mt-swipe-item>
			    			<a href="javascript:;">
			    				<img class="pre" :src="item.imgUrl">
			    			</a>
			    			<h3 class="text_overflow text-left">{{item.alt}}</h3>
			    			<h5 class="text-left">{{item.h5}}</h5>
		    			</mt-swipe-item>
					    </li>
					  
					</mt-swipe>
					<!-- <li v-for="item of imgs3">
		    			<a href="javascript:;">
		    				<img class="pre" :src="item.imgUrl">
		    			</a>
		    			<h3 class="text_overflow text-left">{{item.alt}}</h3>
		    			<h5 class="text-left">{{item.h5}}</h5>
				    </li> -->
		    	</ul>
		    </div>
		    <!-- 身体功能性修复 end -->

		    <!-- 文字标题 -->
		    <div class="title text-center">
	            <p>
				<span class="left" style="margin-left: 3.7rem"></span>
	            <span class="text">中医营养调理</span>
	            <span class="right" style="margin-left: -5.3rem;"></span>
	            </p>
	            <span>Nutrition regulate</span>
		    </div>
		    <!-- 中医营养调理 -->
		    <div class="branch_content">
		    	<ul class="branch_list branch_regulate">
		    		<li v-for="item of imgs2">
		    			<a href="javascript:;">
		    				<img class="pre border-radius" :src="item.imgUrl">
		    			</a>
		    			<h3>{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 中医营养调理 end -->

		    <!-- 文字标题 -->
		    <div class="title text-center">
	            <p>
				<span class="left"></span>
	            <span class="text">生活护理</span>
	            <span class="right"></span>
	            </p>
	            <span>Life care</span>
		    </div>
		    <!-- 生活护理 -->
		    <div class="branch_content">
		    	<ul class="branch_list2 branch_care">
		    		<li v-for="item of imgs4">
		    			<a href="javascript:;">
		    				<img class="pre" :src="item.imgUrl">
		    			</a>
		    			<h3 class="text_overflow">{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 生活护理 end -->

		    <!-- 文字标题 -->
		    <div class="title text-center">
	            <p>
				<span class="left" style="margin-left: 3.7rem"></span>
	            <span class="text">中医保健调理</span>
	            <span class="right" style="margin-left: -5rem;"></span>
	            </p>
	            <span>Chinese Medicine</span>
		    </div>
			<!-- 中医保健调理 -->
		    <div class="branch_content">
		    	<ul class="branch_list1 branch_Medicine">
					<li v-for="item of imgs5">
		    			<a href="javascript:;">
		    				<img class="pre" :src="item.imgUrl">
		    			</a>
		    			<h3 class="text_overflow">{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 中医保健调理 end -->

		    <!-- 文字标题 -->
		    <div class="title text-center">
	            <p>
				<span class="left"></span>
	            <span class="text">美容项目</span>
	            <span class="right"></span>
	            </p>
	            <span>Beauty project</span>
		    </div>
		    <!-- 美容项目 -->
		    <div class="branch_content">
		    	<ul class="branch_list branch_Beauty">
		    		<li v-for="item of imgs6">
		    			<a href="javascript:;">
		    				<img class="pre border-radius" :src="item.imgUrl">
		    			</a>
		    			<h3 class="text_overflow">{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 美容项目 end -->

		    <!-- 文字标题 -->
		    <div class="title text-center">
	            <p>
				<span class="left"></span>
	            <span class="text">形体恢复</span>
	            <span class="right"></span>
	            </p>
	            <span>Body recovery</span>
		    </div>
			<!-- 形体回复 -->
		    <div class="branch_content">
		    	<ul class="branch_list1 branch_recovery">
		    		<li v-for="item of imgs7">
		    			<a href="javascript:;">
		    				<img class="pre" :src="item.imgUrl">
		    			</a>
		    			<h3 class="text_overflow">{{item.alt}}</h3>
		    		</li>
		    	</ul>
		    </div>
		    <!-- 形体回复 end -->

		</div>
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
			width: calc(50% - 0.8rem);
			float:left;
			/*width:8.25rem;*/
			margin:0.3rem 0 0 0;
		}
		.branch_list li a img{
			height:100%;
			margin:0;
		}
		.branch_list li:nth-child(2n){
			margin-left: 1rem;
		}
		.branch_list1{
			width:100%;
			list-style: none;
			margin:0;
			padding: 0;
		}
		.branch_list1 li{
			width: calc(50% - 0.2375rem);
			float:left;
			/*width:8.25rem;*/
			margin:0.3rem 0 0 0;
		}
		.branch_list1 li a img{
			height:100%;
			margin:0;
		}
		.branch_list1 li:nth-child(2n){
			margin-left: 0.475rem;
		}
		.branch_list2 li{
			width: calc(33.33333333% - 0.25rem);
			float:left;
			/*width:8.25rem;*/
			margin:0.3rem 0 0 0;
		}
		.branch_list2 li a img{
			height:100%;
			margin:0;
		}
		.branch_list2 li:nth-child(n){
			margin-right: 0.25rem;
		}
		.text_overflow{
			/*color: #585757;*/
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		/*.branch_list1 h3{
			text-align: left;
		}*/
		.branch_list1 h5{
			font-size: 0.3rem;
		    color: #3a3a3a;
		    font-weight: normal;
		}
		.border-radius{
			border: 1px dashed #74c5be;
			border-radius: 6px;
			padding: 0.2rem;
		}
	</style>

<script type="es6">
	export default{
		data(){
			return{
				imgs1:[
					{
					"alt":"营养师查房",
					"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_07.jpg"
					},
					{
					"alt":"专家查房(中医专家，产科专家)",
					"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_09.jpg"
					}
				],
				imgs2:[
					{
					"alt":"药膳调理",
					"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_21.jpg"
					},
					{
					"alt":"高档炖品",
					"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_23.jpg"
					}
				],
				imgs3:[
					{
						"alt":"仪器子宫修复",
						"h5":"Instrument uterine repair",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_14.jpg"
					},
					{
						"alt":"红外线艾灸",
						"h5":"Infrared moxibustion",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_16.jpg"
					}
				],
				imgs4:[
					{
						"alt":"胸部保养",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_27.jpg"
					},
					{
						"alt":"特制中药水擦澡",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_29.jpg"
					},
					{
						"alt":"中药沐浴",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_31.jpg"
					},
					{
						"alt":"中药头部清洁",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_36.jpg"
					},
					{
						"alt":"体质评估分析",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_37.jpg"
					},
					{
						"alt":"动态观测和伤口护理",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_38.jpg"
					}
				],
				imgs5:[
					{
						"alt":"脾胃双调",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_42.jpg"
					},
					{
						"alt":"局部中医推拿",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_44.jpg"
					},
					{
						"alt":"头颈舒压",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_49.jpg"
					},
					{
						"alt":"中药封包",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_51.jpg"
					}
				],
				imgs6:[
					{
						"alt":"面部基础护理",
						"border":"border-radius",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_55.jpg"
					},
					{
						"alt":"面部高级抗衰全套护理",
						"border":"border-radius",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_57.jpg"
					}
				],
				imgs7:[
					{
						"alt":"软光子腰腹部收紧",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_61.jpg"
					},
					{
						"alt":"全身十二经络疏通",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_67.jpg"
					},
					{
						"alt":"仪器盆底肌修复",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_68.jpg"
					},
					{
						"alt":"骨盆矫正",
						"imgUrl":"../../static/images/serviceSystem/rehabilitationSystem/rehabilitationSystem_64.jpg"
					}
				]
			}
		}
	}
</script>
