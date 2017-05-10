<template>
	<div id="port">
		<div class="card collection with-header">
			<div class="collection-header light-blue white-text">
				<h5>{{title}}</h5>
			</div>
			<div v-if="data">
				<router-link :to="{ path:`detail/${portCode}/anei` }"
				             v-if="data.anei"
				             class="collection-item black-text">
					安栄観光
					<span class="new badge"
					      v-bind:class="aneiColor"
					      data-badge-caption="">
									{{data.anei.status.text}}
								</span>
				</router-link>
	
				<router-link :to="{ path:`detail/${portCode}/ykf` }"
				             v-if="data.ykf"
				             class="collection-item black-text">
					八重山観光フェリー
					<span class="new badge"
					      v-bind:class="ykfColor"
					      data-badge-caption="">
									{{data.ykf.status.text}}
								</span>
				</router-link>
	
				<router-link :to="{ path:`detail/${portCode}/dream` }"
				             v-if="data.dream"
				             class="collection-item black-text">
					石垣ドリーム観光
					<span class="new badge"
					      v-bind:class="dreamColor"
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
	props: ['data', 'title', 'portCode' ],
	computed: {
		classObject: function () {
			if (this.data.anei.status.code == 'normal') {
				return {
					blue: true
				}
			}
			else if (this.data.anei.status.code == 'cancel') {
				return {
					red: true
				}
			}
			else if (this.data.anei.status.code == 'cation') {
				return {
					orange: true
				}
			}
			else if (this.data.anei.status.code == 'suspend') {
				return {
					amber: true
				}
			}
			else {
				return {
					orange: true
				}
			}
		},
		aneiColor: function () {
			if (this.data.anei.status.code == 'normal') {
				return {
					blue: true
				}
			}
			else if (this.data.anei.status.code == 'cancel') {
				return {
					red: true
				}
			}
			else if (this.data.anei.status.code == 'cation') {
				return {
					orange: true
				}
			}
			else if (this.data.anei.status.code == 'suspend') {
				return {
					amber: true
				}
			}
			else {
				return {
					orange: true
				}
			}
		},
		ykfColor: function () {
			if (this.data.ykf.status.code == 'normal') {
				return {
					blue: true
				}
			}
			else if (this.data.ykf.status.code == 'cancel') {
				return {
					red: true
				}
			}
			else if (this.data.ykf.status.code == 'cation') {
				return {
					orange: true
				}
			}
			else if (this.data.ykf.status.code == 'suspend') {
				return {
					amber: true
				}
			}
			else {
				return {
					orange: true
				}
			}
		},
		dreamColor: function () {
			if (this.data.dream.status.code == 'normal') {
				return {
					blue: true
				}
			}
			else if (this.data.dream.status.code == 'cancel') {
				return {
					red: true
				}
			}
			else if (this.data.dream.status.code == 'cation') {
				return {
					orange: true
				}
			}
			else if (this.data.dream.status.code == 'suspend') {
				return {
					orange: true
				}
			}
			else {
				return {
					orange: true
				}
			}
		}
	}
}
</script>

<style>

</style>

