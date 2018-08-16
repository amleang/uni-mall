<template>
	<view class="product">
		<block v-for="(item,index) in productData" :key="index">
			<view class="product-item" :class="index%2==0?'product-one':'product-two'">
				<image class="img" :src="item.image"></image>
				<view class="product-name">
					{{item.title}}
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			productData: {
				type: Array,
				default () {
					return [];
				}
			}
		},

	};
</script>

<style>
	.product-item {
		display: flex;
		flex-direction: column;
		width: 345px;
		float: left;
		margin-bottom: 20px;
		font-size: 26px;
	}

	.product-item .img {
		width: 320px;
		height: 320px;
	}

	.product-one {
		padding-left: 20px;
		padding-right: 10px;
	}

	.product-two {
		padding-right: 20px;
		padding-left: 10px;
	}
</style>
