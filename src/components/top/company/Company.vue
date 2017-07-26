<template>
	<div id="company">
		<div class="card collection with-header">
			<div class="collection-header teal white-text">
				<h5>運行会社情報</h5>
			</div>
			<router-link :to="{ path:`company/anei` }"
			             class="collection-item black-text">
				<div class="row">
					<span>安栄観光</span>
					<cancel v-if="data.anei.cancel > 0"/>
					<cation v-if="data.anei.cation > 0"/>
					<suspend v-if="data.anei.suspend > 0"/>
					<normal v-if="data.anei.cancel + data.anei.cation + data.anei.suspend < 1"/>
				</div>
			</router-link>
			<router-link :to="{ path:`company/ykf` }"
			             class="collection-item black-text">
				<div class="row">
					八重山観光フェリー
					<cancel v-if="data.ykf.cancel > 0"/>
					<cation v-if="data.ykf.cation > 0"/>
					<suspend v-if="data.ykf.suspend > 0"/>
					<normal v-if="data.ykf.cancel + data.ykf.cation + data.ykf.suspend < 1"/>
				</div>
				</span>
			</router-link>
	
			<router-link :to="{ path:`company/dream` }"
			             class="collection-item black-text">
				<div class="row">
					石垣ドリーム観光
					<cancel v-if="data.dream.cancel > 0"/>
					<cation v-if="data.dream.cation > 0"/>
					<suspend v-if="data.dream.suspend > 0"/>
					<normal v-if="data.dream.cancel + data.dream.cation + data.dream.suspend < 1"/>
				</div>
				</span>
			</router-link>
		</div>
	</div>
</template>
  
<script>
import normal from './BadgeNormal'
import cancel from './BadgeCancel'
import cation from './BadgeCation'
import suspend from './BadgeSuspend'
export default {
	name: 'company',
	components: {
		normal,cancel,cation,suspend
	},
	props: ['data']
}
</script>

<style scoped>
.row {
	margin-bottom: 0;
}

.collections-content {
	/*margin: 10px 0px 0px 0px;*/
	margin-top: 10px;
	font-weight: 300;
	/*font-size: 14px;*/
}

</style>

