<template>
	<div id="port">
		<div class="card collection with-header">
			<div class="collection-header orange darken-1 white-text">
				<h5>{{title}}</h5>
			</div>
			<router-link :to="{ path:`port/${portCode}/anei` }"
			             v-if="data.anei"
			             class="collection-item black-text">
				<div class="row">
					<span>安栄観光</span>
					<badge v-if="data.anei.status"
					       :status="data.anei.status" />
					<div v-if="data.anei.comment">
						<span class="collections-content truncate blue-grey-text">{{data.anei.comment}}</span>
					</div>
				</div>
			</router-link>
			<router-link :to="{ path:`port/${portCode}/ykf` }"
			             v-if="data.ykf"
			             class="collection-item black-text">
				<div class="row">
					八重山観光フェリー
					<badge v-if="data.ykf.status"
					       :status="data.ykf.status" />
					<div v-if="data.ykf.comment">
						<span class="collections-content truncate grey-text">{{data.ykf.comment}}</span>
					</div>
				</div>
			</router-link>

		</div>
	</div>
</template>
  
<script>
import badge from "./Badge";
export default {
  name: "port",
  props: ["data", "title", "portCode"],
  components: {
    badge
  }
};
</script>

<style scoped>
.row {
  margin-bottom: 0;
}

.collections-content {
  margin-top: 10px;
  font-weight: 300;
}
</style>

