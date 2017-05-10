<template>
	<div id="port">
		<div class="card collection with-header">
			<div class="collection-header light-blue white-text">
				<h5>{{title}}</h5>
			</div>
			<div v-if="data">
				<router-link to="/"
				             v-if="data.anei"
				             class="collection-item black-text">
					安栄観光
					<span class="new badge"
					      v-bind:class="classObject"
					      data-badge-caption="">
						{{data.anei.status.text}}
					</span>
				</router-link>
	
				<router-link to="/"
				             v-if="data.ykf"
				             class="collection-item black-text">
					八重山観光フェリー
					<span class="new badge"
					      v-bind:class="classObject"
					      data-badge-caption="">
						{{data.ykf.status.text}}
					</span>
				</router-link>
	
				<router-link to="/"
				             v-if="data.dream"
				             class="collection-item black-text">
					石垣ドリーム観光
					<span class="new badge"
					      v-bind:class="classObject"
					      data-badge-caption="">
						{{data.dream.status.text}}
					</span>
				</router-link>
			</div>
		</div>
	</div>
</template>
  
<script>
export default {
	name: 'port',
	props: ['title','data'],
	computed: {
		classObject: function () {
			return {
				blue: true
			}
		}
	}
}
</script>

<style>

</style>

